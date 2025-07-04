---
layout: post
title: Design solutions using virtual machines - 1
description: "Design Compute Infrastructure-   Design solutions using virtual machines"
modified: 2018-03-28
tags: [Compute, 70-535, 70-533]
categories: [Azure]
author: Ajeet
---
In this post we will discuss about Design VM deployments by leveraging availability sets, fault domains, and update domains in Azure.

<!--more-->

# Design VM deployments by leveraging availability sets, fault domains, and update domains in Azure 

**Part - 1**
## Understand the Maintenance and Downtime

### Unplanned Hardware Maintenance Event

This event occurs when Azure predicts either hardware or any platform component is going to fail.
Azure Issue an unplanned hardware maintenance alert to reduce the impact to the VMs hosted on that hardware.

-   **What is the impact in this case?**

    In this scenario Azure uses **Live migration** to migrate VM from failing hardware to healthy physical machine.

    *Live migration pauses a virtual machine for very short time. **Live migration is a VM preserving operation**. in this case Memory, open files and network connection are maintained, but performance might reduces before and/or after the event.*
    >**If Live migration cannot be used, the VM will experience unexpected downtime.**

### An Unexpected Downtime

Its very rare, but does not means it never happens. **When Hardware or Physical infrastructure (e.g. local network failure, local disk failure or rack level failure) has faulted in some way.**

-   **What is the impact and How Azure fix this?**

    *In these scenarios Azure platform perform auto healing (migrate) VMs to a healthy physical machine in the same datacenter. 
    During this process VMs experience downtime along with some data loss of temporary drive.* 
**OS and Data disks are always preserved.**

-   **What in case of Disaster at Datacenter level or region?**

    Azure provides protection options including Availability Zones and paired regions.

### Planned Maintenance events
To improve overall reliability, performance and security Azure perform periodical maintenance activities. There is very rare instance when these updates need VM reboots to apply updates. 

> To reduce the impact of downtime due to one or more of these events, MS recommends the various high availability best practices for virtual machines.

## Availability Set
An Availability Set is a logical grouping capability that you can use in Azure to ensure that the VM resources you place within it are isolated from each other when they are deployed within an Azure datacenter. 

Each VM  is assigned to update domain and fault domain by Azure platform when you place them in Availability set

![source: Microsoft document](https://docs.microsoft.com/en-us/azure/includes/media/virtual-machines-common-manage-availability/ud-fd-configuration.png)


### Update Domain
-   Update domains are assigned by default to indicate underlying physical hardware that **can be rebooted at the same time**. 
-   By default we have **5** update domain. we can increase upto **20** using Resource Manager deployment.
-   When more than five virtual machines are configured within a single availability set, the sixth virtual machine is placed into the same update domain as the first virtual machine, the seventh in the same update domain as the second virtual machine, and so on. 

### Fault Domain

-   Fault domains define the group of virtual machines that share a common power source and network switch. 
-   By default, the virtual machines configured within your **availability set are separated across up to three fault domains for Resource Manager deployments (two fault domains for Classic)**. 
-   While placing your virtual machines into an availability set ***does not protect your application from operating system or application-specific failures***, it does limit the impact of potential physical hardware failures, network outages, or power interruptions.

## Best Practices 
-   The number of fault domains for managed availability sets varies by region - either two or three per region.
-   Place two or more than two VMs in an availability set. This configuration help you to  achieve  99.95% Azure SLA by making at least one VM is available during either planned or unplanned maintenance.
-   Avoid leaving a single instance virtual machine in an availability set by itself. VMs in this configuration do not qualify for a SLA guarantee and face downtime during Azure planned maintenance events, **except when a single VM is using Azure Premium Storage. For single VMs using premium storage, the Azure SLA applies**.
-   Configure each application tier into separate availability sets
-   If you are using unmanaged disk then you need to add following consideration into your design.
    -   Keep all disks (OS and data) associated with a VM in the same storage account.
    -   Review the limits on the number of unmanaged disks in a Storage account before adding more VHDs to a storage.
    -   Use separate storage account for each VM in an Availability Set. 
    -   Do not share Storage accounts with multiple VMs in the same Availability Set. It is acceptable for VMs across different Availability Sets to share storage accounts if above best practices are followed.

### How to decide 
**Configure each application tier into separate availability sets**

All VMs nearly identical and serve the same purpose for your application, it's recommend that you configure an availability set for each tier of your application.

**What happen if you place two different tier in same availability set?**

If you place two different tiers in the same availability set, **all virtual machines in the same application tier can be rebooted at once**. By configuring at least two virtual machines in an availability set for each tier, you guarantee that at least one virtual machine in each tier is available.

![source: Microsoft document](https://docs.microsoft.com/en-us/azure/includes/media/virtual-machines-common-manage-availability/application-tiers.png)


**load balancer with availability sets**

Combine the Azure Load Balancer with an availability set to get the most application resiliency. The Azure Load Balancer distributes traffic between multiple virtual machines. For our Standard tier virtual machines, the Azure Load Balancer is included. Not all virtual machine tiers include the Azure Load Balancer. 

## Hands on
-   Create an availability set

{% highlight powershell %}

New-AzureRmResourceGroup -Name myResourceGroupAvailability -Location EastUS

{% endhighlight %}

{% highlight powershell %}

New-AzureRmAvailabilitySet `
   -Location "EastUS" `
   -Name "myAvailabilitySet" `
   -ResourceGroupName "myResourceGroupAvailability" `
   -Sku aligned `
   -PlatformFaultDomainCount 2 `
   -PlatformUpdateDomainCount 2
{% endhighlight %}

-   Create a VM in an availability set (2 VMs)

{% highlight powershell %}
   $cred = Get-Credential

   for ($i=1; $i -le 2; $i++)
{
    New-AzureRmVm `
        -ResourceGroupName "myResourceGroupAvailability" `
        -Name "myVM$i" `
        -Location "East US" `
        -VirtualNetworkName "myVnet" `
        -SubnetName "mySubnet" `
        -SecurityGroupName "myNetworkSecurityGroup" `
        -PublicIpAddressName "myPublicIpAddress$i" `
        -AvailabilitySetName "myAvailabilitySet" `
        -Credential $cred
}
{% endhighlight %}
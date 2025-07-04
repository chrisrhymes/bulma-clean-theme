---
layout: post
title: Design VM Scale Sets - 1
description: "Design Compute Infrastructure-   Design solutions using virtual machines - design VM Scale Sets"
modified: 2018-04-22
tags: [Compute, 70-535, 70-533, VM Scale set]
categories: [Azure]
author: Ajeet
---
# Scale Sets Overview

**Scale sets provide high availability to your applications.**

With virtual machine scale sets, you can build large-scale services for areas such as compute, big data, and container workloads.

 In this post we will discuss about design VM Scale Sets.

 <!--more-->

 ![](https://azurecomcdn.azureedge.net/cvt-6c0998fa2dcfbce404ac54184e6cf80e82ea2072003230ad144d0a6dafb655a4/images/page/services/virtual-machine-scale-sets/02-scale.png)


## Why Scale sets

To provide redundancy and improved performance, applications are typically distributed across multiple instances. 

- With Scale sets you can create **identical, Load balanced VM** and managed them centrally. 

        
    -   Identical:  All VM instances are created from the **same base OS image and configuration**. This approach lets you easily manage hundreds of VMs without additional configuration tasks or network management.
    - Load balancer: Scale sets supports both **Azure Load balancer (layer 4) and Application load balancer (layer 7)**. 

- If one of these VM instances has a problem, customers continue to access your application through one of the other VM instances with minimal interruption.
- The number of VM instances can **automatically increase or decrease** in response to demand or a defined schedule.
- Scale sets **support up to 1000 VM instances**. If you create and upload your **own custom VM images, the limit is 300 VM instances**. Remember this as scale set limit.

- **High availability and application resiliency**: Scale sets provide HA and resiliency, but as we know availability,    performance, resilience need to design at each level. You can increase the availability by using Managed Disk, Premium storage, Availability zones. All these services are manged by Azure and provide HA and resilience to these services. 

- Without managed disk you need **one storage account for every 20 VMs to balance the storage load**. This will help you to achieve maximum IO. 

- If you use Scale sets with Managed Disk instead f traditional storage account

    -  You do not have to pre-create a set of Azure storage accounts for the scale set VMs.
    - You can define attached data disks for the VMs in your scale set.
    - Scale sets can be configured to support up to 1,000 VMs in a set.

- VMs automatically **spread across the vertical fault domains and update domains**. So any given point of time when microsoft is performing updates or maintenance, your services must be up and running. 
 
    [Fault domains and Update domains - 1](http://www.azure365.co.in/azure/DesignsComputeInfra.1)
    
    [Fault domains and Update domains -2](http://www.azure365.co.in/azure/DesignsComputeInfra.1)

>*Do I need to Pay additional charges? 
**No**. There is no charges for scale sets features (automation, management). You only need to pay for Azure resources like VMs, Storage, Managed Disks etc*.

## Overprovisioning
Scale sets currently default to "overprovisioning" VMs. With overprovisioning turned on, the scale set actually spins up more VMs than you asked for, then deletes the extra VMs once the requested number of VMs are successfully provisioned.

 Overprovisioning improves provisioning success rates and reduces deployment time. You are not billed for the extra VMs, and they do not count toward your quota limits.

If your scale set uses user-managed storage, and you turn off overprovisioning, you can have more than 20 VMs per storage account, but it is not recommended to go above 40 for IO performance reasons.



## What are the advantages in-terms of management compared to VM

-   **Add additional VM instances**: You need to add, configure VM manually in group of VMs, whereas in *Scale sets it automatically create from central configuration.*

-   **Traffic balancing and distribution**: Manual process to add, configure load balancer or application load balance. Scale sets *can automatically create and integrate with Azure load balancer or Application Gateway*.

- **High availability and redundancy**: Manually create Availability Set or distribute and track VMs across Availability Zones, *whereas scale sets can automatically distribute VM instances across Availability Zones or Availability Sets*. 


---
layout: post
title: Design solutions using virtual machines - 2
description: "Design Compute Infrastructure-   Design solutions using virtual machine"
modified: 2018-03-28
tags: [Compute, 70-535, 70-533]
categories: [Azure]
author: Ajeet
---

 In this post we will discuss about Planned maintenance for virtual machines in Azure.

 Read more about [Maintenance and Downtime](http://www.azure365.co.in/azure/DesignsComputeInfra.1)

<!--more-->

# Design VM deployments by leveraging availability sets, fault domains, and update domains in Azure 

**Part - 2**

## Planned maintenance for virtual machines in Azure

As mention in [previous post](http://www.azure365.co.in/azure/DesignsComputeInfra.1#planned-maintenance-events), Azure periodically perform the update to increase reliability, performance, security.  

These updates includes patching software components in the hosting environment (like operating system, hypervisor, and various agents deployed on the host), upgrading networking components, to hardware decommissioning. 

As mention these update don't have any impact on hosted environment but there are few cases updates do have impact.

-   If a reboot-less update is possible, Azure uses **memory preserving maintenance** to pause the VM while the host is updated or the VM is moved to an already updated host altogether.

-   If **maintenance requires a reboot**, you get a notice of when the maintenance is planned. In these cases, you'll also be given a time window where you can start the maintenance yourself, at a time that works for you.

### What is memory preserving maintenance
"A 30 second pause". This mechanisms is use to limit the update impact to the virtual machine.
This process preserve the memory in RAM or move the VM to all ready updated host. 

> *Updated domain are updated once in a time. All the VMs in one updated domain (UD) are paused, updated and then resumed before planned maintenance  moves on the next paired UD.*

There are use cases where application not support even 30 second impact.

-   media streaming or transcoding
-   real-time event processing

### When maintenance requires a reboot
Well in this case you are notified in advance.  There are two phases
-   Self-service window
- Schedule maintenance window

This helps you to plan your service availability accordingly and inform end users/ customer well in advance.

The self-service window lets you initiate the maintenance on your VMs. You can see the status update.

 *When you start self-service maintenance, your VM is moved to a node that has already been updated and then powers it back on.*

 When the self-service window has passed, the scheduled maintenance window begins. During this time window, you can still query for the maintenance window, but no longer be able to start the maintenance yourself.

**What if self-service maintenance fail?**

In this case the operation is stopped, the VM is not updated and it is also removed from the planned maintenance iteration. You will be contacted by Azure in a later time with a new schedule and offered a new opportunity to do self-service maintenance.

### High Availability design considerations during planned maintenance 

-   Availability sets and scale sets
    -   [Availability sets ](http://www.azure365.co.in/azure/DesignsComputeInfra.1#availability-set)
    -   Scale sets:
     Virtual machine scale sets are an Azure compute resource that enables you to deploy and manage a set of identical VMs as a single resource. The scale set is automatically deployed across update domains, like VMs in an availability set. 

- Paired regions 
Azure operates in multiple geographies around the world. An Azure geography is a defined area of the world that contains at least one Azure Region. An Azure region is an area within a geography, containing one or more datacenters.

### Paired regions
Each Azure region is paired with another region within the same geography, together making a regional pair. The exception is Brazil South, which is paired with a region outside its geography.

![image source: microsoft documentation](https://docs.microsoft.com/en-us/azure/media/best-practices-availability-paired-regions/pairedregionsoverview2.png)

#### Cross-region activities

1.  **Azure Compute (PaaS)** – You must provision additional compute resources in advance to ensure resources are available in another region during a disaster. 

2.  **Storage Azure Storage** - Geo-Redundant storage (GRS) is configured by default when an Azure Storage account is created. With GRS, your data is automatically replicated three times within the primary region, and three times in the paired region.


3.  **Azure SQL Azure SQL Databases** – With Azure SQL Standard Geo-Replication, you can configure asynchronous replication of transactions to a paired region. With premium geo-replication, you can configure replication to any region in the world.

4.  **Resource Manager Azure Resource Manage**r - Resource Manager inherently provides logical isolation of service management components across regions. This means logical failures in one region are less likely to impact another.

#### Benefits of paired regions
5.  Physical isolation 

6.  Replication Platform-provided replication 

7.  Recovery Region recovery order

8.  Updates Sequential updates 

9.  Data Data residency 
---
layout: post
title: Container - It’s all about Application
description: "Container - It’s all about Application"
modified: 2017-12-20
tags: [Container, Docker, Azure, NewIT]
categories: [Azure, DevOps]
author: Ajeet
---

# It’s all about Application

This is the simplest definition I use to explain container. No matter whether we have simple medium or high complex environments at the end we need all this to run the applications.

If we talk about the deployment models, we can categorize application deployment on

*Physical server’s environment*

*Virtual server's environment (H/W virtualization)*

*and now we have more optimized Virtualized environment (nested virtualization or O/S virtualization)*
<!--more-->

## Physical server’s environment

Before virtualization came into the picture we used to deploy application on physical servers. Physical server machines are powerful but the same time they are costlier one as well. Getting physical server up and running for deployment is never an easy job. 
Whenever team or project needs to deploy application on server they must raise SR to get the server in place. Finance team raise the purchase order, price negotiations. Once this done server arrived at your datacenter, various Ops team needs time to configure OS, replications, security, networking etc. Server will only available to you once all this exercise is completed.
The second problem is the resource utilization. Soon we realize that we are not able to consume more the 20% - 25% of server resource as whole. This also means that business not able to utilize its CAPEX and OPEX cost at maximum. 
Another common issue is time to reboot. It may take 5-10 minutes. Reboot time is another important factor in terms of service availability. e.g. if you deploy a newer or updated version of your solution which require reboot, in this case your downtime will be higher.

![](/images/posts/container/deploym1.JPG)

## Virtual server's environment (H/W virtualization)


Virtual Server's/ machines (VMs) are an abstraction of physical hardware turning one server into many servers. The hypervisor allows multiple VMs to run on a single machine. Each VM includes a full copy of an operating system (also known as guest O/S), one or more apps, necessary binaries and libraries - taking up tens of GBs. VMs can also be slow to boot but faster than the physical.

This model helps us to quickly provision virtualized instance, whenever we need and can be thrown away if not required later. Also, we have much better resource utilization as a whole compare to physical server deployment model.

![](/images/posts/container/deploym2.JPG)

## CONTAINERS (Nested virtualization or O/S virtualization)

VM’s really change the way we work earlier and help us to achieve agility, but still there is something better can be done here.
One of the problem that we have with VM that it also has a fill blown O/S. It means that maintainability is still required more efforts. We not only bother about the application security and patching, but need to take care about the O/S security, patching etc.

Nested virtualization helps here. Containers are an abstraction at the app layer that packages code and dependencies together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space. Containers take up less space than VMs (container images are typically tens of MBs in size), and start almost instantly.


![](/images/posts/container/deploym3.JPG)




## Container Isolation

Containers isolate applications from each other on a shared operating system (OS). This approach standardizes application program delivery, allowing apps to run as Linux or Windows containers on top of the host OS (Linux or Windows). Because containers share the same OS kernel (Linux or Windows), they are significantly lighter than virtual machine (VM) images. 



![](/images/posts/container/containeriso1.JPG)



When running regular containers, the isolation is not as strong as when using plain VMs. If you need further isolation than the standard isolation provided in regular containers (like in regular Docker images), then, Microsoft offers and additional choice which is Hyper-V containers. In this case, each container runs inside of a special virtual machine. This provides kernel level isolation between each Hyper-V container and the container host. Therefore, Hyper-V containers provide better isolation, with a little more overhead. 
However, Hyper-V containers are less lightweight than regular Docker containers. 

*   Windows Server Containers – provide application isolation through process and namespace isolation technology. A Windows Server container shares a kernel with the container host and all containers running on the host.

*   Hyper-V Containers – expands on the isolation provided by Windows Server Containers by running each container in a highly optimized virtual machine. In this configuration the kernel of the container host is not shared with the Hyper-V Containers providing better isolation. 

***Windows containers are not only supported by Azure but other cloud vendors like AWS, VMWare etc.
Hyper-V container only supported in Azure, but one hidden advantage here is that we can use Hyper-V container in Win 10 machine. So as a developer we can easily use them.***




![](/images/posts/container/wincon2.JPG)



## Container v/s VM

Containers and virtual machines have similar resource isolation and allocation benefits, but function differently because containers virtualize the operating system instead of hardware, containers are more portable and efficient.



| Virtual Machine          	| Container       | 
|---------------------	|	---------------------	|
| Needs an Hypervisor and a full OS inside | Talks to the host kernel |
|Bigger Footprint (RAM and Storage space) |  Smaller footprint (No RAM and differential storage) |
|  VMs consumes storage space for each instance ~1.2GB 	|                Consumes very less space ~2.5MB | 
| Heavier            	| Lightweight                      |
| Virtual machines startup time is on order of minutes           	|  Startup time in order of seconds                     |
|  Deployment is tough          	|    Easy deployment with minimal requirements for running the application                   | 
|  Slower          	|    Faster                   |
|   Security issue of running OS      	|   Security issue limited to Applications                    |

**So if containers are not VMs,  a logical question is:  Can VMs and containers coexist??**
 
 The Answer is **YES**

your application may need to interact with a database that resides in a virtual machine. Provided that the right networking
is in place, your application can interact with that database seamlessly.

Another area where there can be synergy between VMs and Docker containers is in the area of capacity optimization. VMs gained early popularity because the enabled higher levels of server utilization. That’s still true today. A virtualization host, for instance, can host VMs that may house Docker hosts, but may also host any number of traditional monolithic VMs. By mixing and matching Docker hosts with “traditional” VMs, sysadmins can be assured they are getting the maximum utilization out of their physical hardware.

> ***Container based solutions provide important benefits of cost savings because containers are a solution to deployment problems cause by the lack of dependencies in production environments, therefore, improving DevOps and production operations significantly.***


***see related post to learn more about container***

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
---
layout: post
title: Auto-shutdown RM VM
description: "Auto-shutdown RM VM"
modified: 2018-01-04
tags: [Azure, IaC]
categories: [Cloud, DevOps]
author: Ajeet
---

**Can we automate during the VM provisioning?**

We can use **Microsoft.DevTestLab/schedules** resource to automate this during the provision of VM it self.
<!--more--> 
## VM shutdown options

Manually shutting down a VM to put it in the Stopped (Deallocated) status is a great way to save cost on Azure VM’s. Although, you do need to remember to Stop the VM. This introduces a certain level of human error in the process of saving you hosting costs on your Azure VMs. As a result, Microsoft has added a scheduled auto-shutdown feature into the platform to assist you in this effort.
We all know that we can either use run books or use the option of Auto shutdown inside the VM blade. Once it's configured no you are not worried about running VM, on defined schedule they will be automatically shutdown.

But all this require a manual action to configure.  

![autoshutdown](/images/posts/iac/autoshutdown.JPG)

 As said we can use **Microsoft.DevTestLab/schedules** resource to automate this during the provision of VM it self. Let's play

```JSON
{
    "name": "[concat('shutdown-computevm-', parameters('virtualMachineName'))]",
    "type": "Microsoft.DevTestLab/schedules",
    "apiVersion": "2017-04-26-preview",
    "location": "[parameters('location')]",
    "properties": {
        "status": "[parameters('autoShutdownStatus')]",
        "taskType": "ComputeVmShutdownTask",
        "dailyRecurrence": {
            "time": "[parameters('autoShutdownTime')]"
        },
        "timeZoneId": "[parameters('autoShutdownTimeZone')]",
        "targetResourceId": "[resourceId('Microsoft.Compute/virtualMachines', parameters('virtualMachineName'))]",
        "notificationSettings": {
        "status": "[parameters('autoShutdownNotificationStatus')]",
        "emailRecipient": "[parameters('autoShutdownNotificationEmail')]",
        "notificationLocale": "[parameters('autoShutdownNotificationLocale')]",
        "timeInMinutes": "30"
        }
    },
    "dependsOn": [
       "[concat('Microsoft.Compute/virtualMachines/', parameters('virtualMachineName'))]"
        ]
    },
```


---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
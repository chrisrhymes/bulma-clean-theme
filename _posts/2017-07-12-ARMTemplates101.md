---
layout: post
title: IaC - ARM Templates Fundamentals
description: "IaC - ARM Templates Fundamentals"
modified: 2017-07-12
tags: [IaC, DevOps]
categories: [Azure]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---
With the introduction of Azure Resource Manager model life become much easier. New model not only provide much more granule control over design, deployment and management but it also provides the JSON base template deployment to support Infrastructure-as-Code. Which is one of important pillar of DevOps.

<!--more-->

Azure ASM  (classic) is based on XML whereas Azure RM is based on JSON. 

*  Azure Resource Manager: Enables you to work with the resources in your solution as a group. 
*  Resource groups: are logical containers that are used to group resources such as virtual machines, storage accounts, databases, websites, and others that share a common life cycle.

> ### Few benefits
*   We can deploy, manage, and monitor all of the resources for our solution as a group, rather than handling these resources individually.
*   We can repeatedly deploy solution throughout the development lifecycle and have confidence resources will be deployed in a consistent state. 
*   We can use declarative templates to define deployment.
*   We can define the dependencies between resources so they are deployed in the correct order.
*   We can apply access control to all services in resource group because Role-Based Access Control (RBAC) is natively integrated into the management platform.
*   We can apply tags to resources to logically organize all of the resources in our subscription.
*   We can clarify billing for organization by viewing the rolled-up costs for the entire group or for a group of resources sharing the same tag.

We can create a template (in JSON format) that defines the infrastructure and configuration of our Azure solution. By using a template, we can repeatedly deploy  solution throughout its lifecycle and have confidence your resources are deployed in a consistent state. 
The template consists of JSON and expressions which you can use to construct values for your deployment.

**Considrations**:
*   Type of resources we need to deploy
*   Where those resources will reside
*   Which version of the resource provider API we will use when deploying the resource
*   Resource deployment dependencies
*   Which values we want to pass in during deployment, and which values you want to define directly inside the template
*   Whether you need to return values from the deployment

**Azure Resource Manager Can**:	
*   Ensure Idempotency 
*   Simplify Orchestration
*   Simplify Roll-back
*   Provide Cross Resource Configuration and update support

**Azure Resource Templates are**:
*   Source files, can be checked-in
*   Specifies resources and dependencies
*   Support parameterized input/output

If you are beginner, lets go step by step. I always recommand to start with the Azure Portal and try to understand how it works. I am assuming you already have basic knowledge on Azure and Infrastrcture.
 
> ### ARM JSON Template Strcuture

```JSON
    {
    "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {  },
    "variables": {  },
    "resources": [  ],
    "outputs": {  }
    }
```
*   *schema*: Location of the JSON schema file that describes the version of the template language. You should use the URL shown above.
*  *contentVersion*: Version of the template (such as 1.0.0.0). You can provide any value for this element. When deploying resources using the template, this value can be used to make sure that the right template is being used.
*    *parameters*: Values that are provided when deployment is executed to customize resource deployment.
*   *variables*: Values that are used as JSON fragments in the template to simplify template language expressions.
*    *resources*: Resource types that are deployed or updated in a resource group.
*   *outputs*: Values that are returned after deployment.


---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
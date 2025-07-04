---
layout: post
title: DevOps Project in Azure (Public Preview)
description: "DevOps Project in Azure (Public Preview)"
modified: 2017-12-08
tags: [Azure, DevOps, WebApps, VSTS]
categories: [Azure, DevOps]
author: Ajeet
---

*DevOps Project - Another exciting feature is now available in public preview.*

Build any Azure application, on any Azure service, in less than five minutes.

I see this as an extension of Azure Web App with additional features. Its useful quick starting point, when your team do not have much experience in DevOps practices.  

<!--more-->

> Key benefits of a DevOps Project:

*   Get up and running with a new app and a full DevOps pipeline in just a few minutes
*   Support for a wide range of popular frameworks such as.NET, Java, PHP, Node, and Python
*   Start fresh or bring your own application from GitHub
*   Built-in Application Insights integration for instant analytics and actionable insights
*   Cloud-powered CI/CD using Visual Studio Team Services (VSTS)

> Behind the scene

By completing a few quick steps, now you have a DevOps Project which includes:

*   Git repository with application code. You can start building your application right away by cloning the application code locally and using an IDE of your choice
*   The necessary Azure resources. For example
*   An Azure DevOps Project

        Web App for Containers or Web App on Windows
        Application Insights
        Azure Container Registry
        Automated CI/CD pipeline

*   Application deployments will be done through continuous integration/continuous deployment (CI/CD) capabilities of Visual Studio Team Services.
*   With an auto-generated and fully integrated CI/CD pipeline, your apps are updated each time your source code changes.
*   The right CI definition to build an application written in the framework of your choice. For example, an Express.js application which runs tests, updates npm packages and publishes the artifact.
*   CD definition which deploys to Azure service you selected.
*   Complete end to end traceability from code change to deployment. For example, if a bug is fixed you can track what code change fixed the bug and when that code change got deployed to production.
*   Application Insights integration for monitoring your application to: 
        Help you diagnose issues and understand how application is getting used by your end customers

> Step by Step

*Search for DevOps Project and create project*

![Create DevOps Project](/images/posts/devopsprj/createdp.JPG)

*Select App Framework*

![Select App Framework](/images/posts/devopsprj/app.JPG)


*Bring your own code*


![Bring your own code](/images/posts/devopsprj/owncode.JPG)

*External Git*

![External Git](/images/posts/devopsprj/extgit.JPG)

*Select Framework*

![Select Framework](/images/posts/devopsprj/framework.JPG)

*Select Service*

![Select Service](/images/posts/devopsprj/service.JPG)

*Select/ Create VSTS account*

![DRG](/images/posts/devopsprj/vsts.JPG)

*Deployment and Resource groups*

![DRG](/images/posts/devopsprj/depinprg.JPG)

Resource group for Web App

![RG1](/images/posts/devopsprj/rg1.JPG)

Resource group for VSTS

![RG2](/images/posts/devopsprj/rg2.JPG)


![dprpeview](/images/posts/devopsprj/dprpeview.JPG)


You can see the build and release progress

![build1](/images/posts/devopsprj/build1.JPG)

![build2](/images/posts/devopsprj/build2.JPG)

![res1](/images/posts/devopsprj/res1.JPG)

![res22](/images/posts/devopsprj/res2.JPG)

Once the deployment is completed, Web App and App insight data is available  
![dp3](/images/posts/devopsprj/dp3.JPG)

Web App

![web](/images/posts/devopsprj/web.JPG)

App Insight

![appins1](/images/posts/devopsprj/appinsight1.JPG)

![appins2](/images/posts/devopsprj/appin2.JPG)

> Watch video for more details

   [![Watch video for more details](https://docs.microsoft.com/en-us/vsts/build-release/_img/index/zero-to-devops-video.png)](https://sec.ch9.ms/ch9/03b8/487fba02-4077-465a-81a8-92cb1c7803b8/190ZerotoDevOps_high.mp4)
        


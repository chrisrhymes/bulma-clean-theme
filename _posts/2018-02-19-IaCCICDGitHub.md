---
layout: post
title: IaC Deployment using VSTS Release and GitRepo
description: "IaC Deployment using VSTS Release and GitRepo"
modified: 2018-02-19
tags: [IaC, DevOps, VSTS, CICD]
categories: [Cloud, DevOps]
author: Ajeet
---
In this post we will discuss, how to setup CD for IaC. IaC code is hosted in GitHub repo.

[Before we start please refer](http://www.azure365.co.in/devops/GitwithVSTS)

<!--more-->

*   Go to Build and Release menu, click on Release  in sub menu. Choose the "+" icon to create a new release definition.Create release definition dialog, select the Empty Process.

![j](/images/posts/iaccicd/crerls.JPG)

Give Environment a name and specify who is the owner of it.

![j](/images/posts/iaccicd/emptyprocess.JPG)

Add another environment by 

![j](/images/posts/iaccicd/envname.JPG)

Add artifacts from github repo

![j](/images/posts/iaccicd/addartifacts1.JPG)

To add github repo, we need to create service endpoint.

![j](/images/posts/iaccicd/serviceep.JPG)


![j](/images/posts/iaccicd/auth.JPG)

[Read More about service endpoint](https://go.microsoft.com/fwlink/?LinkId=615294)

Select repo and branch
![j](/images/posts/iaccicd/addfinal.JPG)

We can schdule the trigger

![j](/images/posts/iaccicd/sch.JPG)

Let's add deployment task, search for Azure Deployment.

![j](/images/posts/iaccicd/task2.JPG)

Provide Azure subscription (service endpoint) and resource group name.

![j](/images/posts/iaccicd/task3.JPG)

Create variables, if required in your template.

![j](/images/posts/iaccicd/task4.JPG)

Here, I am choosing URL of the file, as my templates are in github.

![j](/images/posts/iaccicd/task5.JPG)

Override template parameters: Provide values, which needs to be override, based on environments.

![j](/images/posts/iaccicd/task6.JPG)

Save the task

![j](/images/posts/iaccicd/task7.JPG)

Create release for deployment

![j](/images/posts/iaccicd/task8.JPG)

Select the environment, where you would like to have a deployment.  

![j](/images/posts/iaccicd/task9.JPG)

Click on create, this will create the Release.

![j](/images/posts/iaccicd/task10.JPG)

![j](/images/posts/iaccicd/task11.JPG)

Click on deploy

![j](/images/posts/iaccicd/task12.JPG)

click on deploy.
![j](/images/posts/iaccicd/task13.JPG)

As, I am using hosted agent, it will wait for agent availablity. 
![j](/images/posts/iaccicd/task14.JPG)

Click on logs to see the step by stpe progress

![j](/images/posts/iaccicd/task15.JPG)
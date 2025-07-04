---
layout: post
title: Include Pester Test as part of VSTS Build
description: "IaC Unit Test using Pester Test"
modified: 2018-03-29
tags: [devops, IaC, PesterTest]
categories: [DevOps]
author: Ajeet
---
In this post, I will walk you through how to include pester test as part of your CI pipeline in VSTS.

Read more about [IaC Unit Test using Pester Test](http://www.azure365.co.in/devops/IaCUnitTestPester)

<!--more-->

**1. Add Pester Test Runner task from VSTS market place**

![](/images/posts/iaccicd/pester1.JPG)


**2.  Mention the script folder and script file**

![](/images/posts/iaccicd/pester2.JPG)


**3.Pester support out put as NUnit. Configure Publish test result task to display test report in VSTS build dashboard.**

![](/images/posts/iaccicd/pester3.JPG)


**4. Execute the build**

![](/images/posts/iaccicd/pester4.JPG)


**5.  Test result in Build summary.**

![](/images/posts/iaccicd/pester5.JPG)


**5.  More details about test results.**

![](/images/posts/iaccicd/pester6.JPG)
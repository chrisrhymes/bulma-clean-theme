---
layout: post
title: Git with VSTS - Part 2- Git Repo
description: "Git and VSTS"
modified: 2017-08-02
tags: [VSTS, Git, DevOps]
categories: [DevOps]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---

Depending upon the requirement you can have one or more repo inside your project. You can create repos by using
	
	1. 	Web (VSTS)
	2.	CLI
	3.	Visual Studio
	4.	IntelliJ
	5. 	Xcode
	6.	Eclipse	
	
<!--more-->

## Create repo using Web

Navigate to code section -> click on project  -> New repository
![### New repository](/images/posts/gitwithvsts/createrepo.JPG)

Add a .gitignore file

![](/images/posts/gitwithvsts/repo1.JPG)

![](/images/posts/gitwithvsts/repo2.JPG)

A new empty git repo is now created in your team project. 

## Create local repo using CLI

1.	 [Download git for Windows] (https://git-scm.com/download/win)
2.	Open git bash or git cmd. Navigate to path where you would like to create repo.

```PowerShell
	git init .
```
## Cloning Repo

Get remote repo URL

![](/images/posts/gitwithvsts/gitclonerepo1.JPG)

Use following cmd to clone remote repo

```PowerShell
git remote add origin  <<URL>>
```

![](/images/posts/gitwithvsts/gitreporemote1.JPG)


*See git related post for  workflow, branches, authentication and pull request.*

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
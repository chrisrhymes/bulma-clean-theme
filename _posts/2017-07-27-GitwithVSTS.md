---
layout: post
title: Git with VSTS - Part 1
description: "Git and VSTS"
modified: 2017-07-27
tags: [VSTS, Git, DevOps]
categories: [DevOps]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---

VSTS or Team services offers 2 types of version control
	1. Git
	2. TFVC

**Git** is a distributed version control system. Each developer has a copy of the source repository on their dev machine. Developers can commit each set of changes on their dev machine and perform version control operations such as history and compare without a network connection. Branches are lightweight. When you need to switch contexts, you can create a private local branch. You can quickly switch from one branch to another to pivot among different variations of your codebase. Later, you can merge, publish, or dispose of the branch.

<!--more-->

**Team Foundation Version Control (TFVC)** is a centralized version control system. Typically, team members have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server.

Here is why; Git is so popular and attracting enterprises, individuals and communities

**Get social with powerful code reviews** Keep track of feedback with threaded discussions and comment status. Continuous integration for each change to a pull request. Merge how you want with custom messages, squash, and more. @mentions for people and work items keep everyone up-to-date.

**Track your code from idea to release** Create a branch right from your backlog or Kanban board. Easily track the build and release status for your code. Pull requests and commits are automatically linked and appear on work items.

**One solution for your cross platform team** Built-in continuous integration and support for Jenkins and others tools. Powerful integration in Visual Studio and Visual Studio Code. 
Extensions for Android Studio, Eclipse, IntelliJ, and all other JetBrains IDEs.

**Maintain quality with branch policies** Guarantee changes build before they get to master. Limit who can contribute to specific branches. Automatically include the right reviewers for every code change. Enforce best practices with required code reviewers.

**Free git repos** Scale your projects with unlimited free private git repositories.

**Extension Marketplace** Find extensions in our marketplace to integrate with many other services.

**Customizable Dashboards** Keep up with your team’s data and the progress of your projects at-a-glance.

**Branch Updates** View your commits history by pull requests and pushes to understand how code flows and find bad merges.

**Enterprise-Grade Security** Leading security with SOC compliance and multi-factor authentication.

**Active Directory** Azure Active Directory makes it easy to manage people and permissions, including support for on-prem Active Directory.

**Semantic Code Search** Find things fast. Search a single or multiple repositories and based on code constructs like classes, variables, etc.

**Web Hooks & API Integration** Build your own extensions using web hooks & REST APIs.

## Let's Start
Let's create a project in VSTS or Team Service.

![Go to Team Services](/images/posts/gitwithvsts/gitwithvsts1.JPG)

![Create new project](/images/posts/gitwithvsts/gitwithvsts_createprj.JPG)

Ensure that you choose git as version control. You have 3 option to choose work item process.

**Agile**:  Choose Agile when your team uses Agile planning methods, including Scrum, and track development and test activities separately.

**CMMI**: Choose CMMI when your team follows more formal project methods that require a framework for process improvement.

**Scrum**: Choose Scrum when your team practices Scrum. This process works great if you want to track product backlog items (PBIs) and bugs on the Kanban board, or break PBIs and bugs down into tasks on the task board. 

Once your project is created you will be able to see project default page. In this page you can  see lot option, which we are going to use soon.

![Default page](/images/posts/gitwithvsts/defaultpage.JPG)

Let's initialize the README file

![README File](/images/posts/gitwithvsts/defaultpage2.JPG)

Once its done you can see the updated default page with README file and a nice dashboard displaying  members,  activity, build and releases and work.

![Create new project](/images/posts/gitwithvsts/dashboard.JPG)

*See git related post for repos, workflow, branches, authentication and pull request.*

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---

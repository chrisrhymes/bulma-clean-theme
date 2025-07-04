---
layout: post
title: Learn Terraform - 1
description: "Terraform Learning Notes"
modified: 2019-11-27
tags: [Terraform, IaC]
categories: [DevOps]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---

There are a lot of blogs/articles available to learn the Terraform. Here, I
am sharing my learning notes and references.
I have been using ARM templates (simple and complex), for the last 4-5
years. I feel writing Terraform code is easy, helps to be lean and
manageable. Also, the most important thing it has in-built intelligence.
Like every other technology/ architecture, both Terraform and ARM
Templates have their pros and cons.
<!--more-->

1. **Multivendor**: The advantage of Terraform is it's vendor-neutral.
Whereas other cloud-native IaC tools ( ARM template or AWS cloud
formation) work well with the respective vendor but not with others.

2. **Syntex/ Language**: Azure ARM templates and AWS cloud formation
uses the JSON as its syntax language. Terraform uses the Hashicorp
Configuration Language (HCL), which is more human-readable as
compared to JSON.

3. **Native Support**: Though most of the cloud vendors support the
terraform, but there are a couple of features/ functions/
configurations which is only supported through the native tools.

4. **Modularity**: Terraform and ARM template follow the modularity
principle. Nested templates are the Azure way to modularize the
infrastructure code. But the nested templates are not accessible
through the local system by Azure Resource Manager. You need to
host them on external storage (e.g. Azure storage or GitHub etc.).
However, Terraform modules can be accessed locally.

5. **Predictability**: Terraform Plan feature helps you to predict the
deployment outcome upfront. This will helps to prevent any
unwanted actions that might cause service disruptions. ARM
templates 'validate' commands only helps you to validate the syntax 
and dependencies but not help you to understand the deployment
outcome.


---
Learn more about Terraform

---
[![Terraform Youtube Playlist](/images/others/learnterraform.jpg)](https://www.youtube.com/playlist?list=PLewiy-6D3jhpKr3B9UX7Jddt_t9tobhyu)

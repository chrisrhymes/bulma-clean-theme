---
layout: post
title: VSTS Build and Release Agents
description: "VSTS Build and Release Agents"
modified: 2018-03-05
tags: [IaC, DevOps, VSTS, CICD]
categories: [Cloud, DevOps]
author: Ajeet
---
To build your code or deploy your software you need at least one agent. As you add more code and people, you'll eventually need more.

When your build or deployment runs, the system begins one or more jobs. An agent is installable software that runs one build or deployment job at a time.

In this post we will discuss about VSTS Build agents.


<!--more-->
## Hosted Agent:

If your build and release definitions are in VSTS, then you've got a convenient option to build and deploy using a hosted agent. When you use a hosted agent, MS take care of the maintenance and upgrades. 

VSTS provide 240 minutes of free total compute time per month from a hosted agent to run a build or a release. Each build or release job within this free allocation cannot run for more than 30 minutes. To run more builds or releases concurrently, you can buy additional hosted pipelines from the Visual Studio Marketplace.

## Private Agent (Default Agent):
An agent that you set up and manage on your own to run build and deployment jobs is a private agent. You can use private agents in VSTS or Team Foundation Server (TFS). Private agents give you more control to install dependent software needed for your builds and deployments.

If you want to run builds and releases on your own machines (private agents), then you need private pipelines. MS provide one free private pipeline in each VSTS account. In addition, every active Visual Studio Enterprise subscriber in your account contributes a free private pipeline. You can buy additional private pipelines from the Visual Studio Marketplace. After you've done this, you can deploy your own private agents and use them with these private pipelines. You can register any number of private agents with your account for no additional charge.

## Private pipelines
If you want to run builds and releases on your own machines (private agents), then you need private pipelines. We provide one free private pipeline in each VSTS account. In addition, every active Visual Studio Enterprise subscriber in your account contributes a free private pipeline. You can buy additional private pipelines from the Visual Studio Marketplace. After you've done this, you can deploy your own private agents and use them with these private pipelines. You can register any number of private agents with your account for no additional charge.

## Hosted pipelines
If you want to run builds and releases on machines managed by Microsoft (hosted agents), then you need hosted pipelines. VSTS provide 240 minutes of free total compute time per month from a hosted agent to run a build or a release. Each build or release job within this free allocation cannot run for more than 30 minutes. To run more builds or releases concurrently, you can buy additional hosted pipelines from the Visual Studio Marketplace. With the first purchase of a hosted pipeline, the 240 minute limit on total build and release time as well as the 30 minute limit on a single job are waived. Each additional purchase of a hosted pipeline adds another hosted agent for running your builds and releases.

Read more:

[Hosted Agent](https://docs.microsoft.com/en-us/vsts/build-release/concepts/agents/hosted)

[Agent Pools](https://docs.microsoft.com/en-us/vsts/build-release/concepts/agents/pools-queues)

[Hosted Pipelines](https://docs.microsoft.com/en-us/vsts/build-release/concepts/licensing/concurrent-pipelines-ts#hosted-pipelines)

[Team Service Pricing](https://www.visualstudio.com/team-services/pricing/)


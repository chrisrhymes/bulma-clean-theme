---
layout: post
title: IaC Unit Test using Pester Test
description: "IaC Unit Test using Pester Test"
modified: 2018-03-26
tags: [devops, IaC, PesterTest]
categories: [DevOps]
author: Ajeet
---
A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. 

What about unit testing on IaC, after all it's a code. Yes we need to write unit test cases for them as well. Pester Test help us here.

In this post I will walk you through, how you can use Pester Testing framework to write unit test cases for IaC.

<!--more-->

# Pester Test
Pester is an open source unit testing framework developed specifically to test PowerShell code. It is a PowerShell module that is used to write tests for PowerShell code to confirm that what it does is what you expect. In a nutshell, Pester is the code that's written "on top of" your code to act as quality assurance. Fortunately, Pester itself is written in PowerShell, so you don't have to be a software developer to learn how to use it. 

Since Pester is just a PowerShell module, we can easily download and install it from the PowerShell Gallery. Downloading from the PowerShell Gallery will get you the latest version.

## Install Module

```JSON
 Install-Module -Name Pester
```

You can use any PS editor to write Pester test.

## Structure

```PowerShell
Describe 'Describe level'{
    context 'context level'{
        it 'it level'{            
        }
    }
}
```
sample template I am using is available @ [101-webapp-custom-deployment-slots](https://github.com/Azure/azure-quickstart-templates/blob/master/101-webapp-custom-deployment-slots/azuredeploy.json)

## Unit Test

```PowerShell
## Get template location
$here = Split-Path -Parent $MyInvocation.MyCommand.Path

Describe "Template: 101-webapp-custom-deployment-slots" -Tags Unit, azuredeploy {    
    Context "azuredeploy" {        
        It "Has a valid JSON template syntax" {        
            "$here\azuredeploy.json" | Should Exist
        }        
        It "Converts from azuredeploy.JSON and has the expected template schema" {
        $expectedProperties = '$schema',
                            'contentVersion',
                            'parameters', 
                            'variables',     
                            'resources',
                            'outputs'
        $templateProperties = (get-content "$here\azuredeploy.json" | ConvertFrom-Json -ErrorAction SilentlyContinue) | Get-Member -MemberType NoteProperty | % Name
        $templateProperties | Should Be $expectedProperties
        }
        It "parameters file Exist " {        
                "$here\$parmFile" | Should Exist
        }  
        It "Converts from parameter files and has the expected template schema" {
        $expectedProperties = '$schema',
                            'contentVersion',
                            'parameters'          
        $templateProperties = (get-content "$here\$paramFile" | ConvertFrom-Json -ErrorAction SilentlyContinue) | Get-Member -MemberType NoteProperty | % Name
        $templateProperties | Should Be $expectedProperties
            } 
        }
    }
    Context "azuredeploy Template Resources" {        
        It "Creates the expected Azure resources" {
            $expectedResources='Microsoft.Web/serverfarms',                                                                             'Microsoft.Web/sites',                                                                                 'Microsoft.Web/sites/slots'  
        $templateResources = (get-content "$here\Templates\azuredeploy.json" | ConvertFrom-Json -ErrorAction SilentlyContinue).Resources.type
        $templateResources | Should Be $expectedResources
        }
    } 
}
```

Save this file as **Filename.Test.ps1**

Execute to test locally

```PowerShell
Invoke-Pester .\Filename.Test.ps1
```
Integrate with VSTS CI pipeline
[Pester Unit Build Task](https://marketplace.visualstudio.com/items?itemName=petergroenewegen.PeterGroenewegen-Xpirit-Vsts-Build-Pester)

---
layout: post
title: Azure API Versions
description: "Azure API Versions"
modified: 2016-12-01
tags: [PowerShell]
categories: [Azure]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---

## Get list of Azure RM API versions

 {% highlight powershell %}
 ###### Resource API version play an important role in ARM template. Below script help to get list of available API versions for various providers. if you remove if statement, script will list the API versions for all the provider.
   $listProviderNameSpace=Get-AzureRmResourceProvider -ListAvailable
   foreach($provideNameSpace in $listProviderNameSpace.ProviderNamespace)
    {
       if(($provideNameSpace -eq "microsoft.compute") -or($provideNameSpace -eq "microsoft.storage") -or ($provideNameSpace -eq "microsoft.network"))
        {
            Write-Host $provideNameSpace
            $providerList = (Get-AzureRmResourceProvider -ProviderNamespace $provideNameSpace).ResourceTypes
            foreach($providerType in $providerList.ResourceTypeName)
            {     
                Write-Host $providerType
                ((Get-AzureRmResourceProvider -ProviderNamespace $provideNameSpace).ResourceTypes | Where-Object ResourceTypeName -eq $providerType).ApiVersions
            }
        }
   }
{% endhighlight %}

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
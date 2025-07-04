---
layout: post
title: PowerShell to find service availability across the regions
description: "PowerShell to find service availability across the regions"
modified: 2017-07-30
tags: [PowerShell]
categories: [Azure]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---
It's always good to have pre-flight validation check. Many time we have face the problem where end customer is deploying service/s which is not available to desired region. Output of the below script return the regions where the particular service.

<!--more-->

{% highlight powershell %}
$resources = Get-AzureRmResourceProvider -ProviderNamespace Microsoft.Compute
$resources.ResourceTypes.Where{($_.ResourceTypeName -eq 'virtualMachines')}.Locations
{% endhighlight %}

![PS](/images/posts/resoursregionps/psresrg.JPG)

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
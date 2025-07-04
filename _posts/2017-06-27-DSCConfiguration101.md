---
layout: post
title: PowerShell Desired State Configuration - Part 2
description: "DSC Configuration 101"
modified: 2016-12-01
tags: [DSC, Configuration Management, devops]
categories: [DevOps]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---

## PowerShell Desired State Configuration (DSC)

{% highlight powershell %}
#DSC Configuration
  [DSCResource()]
  Configuration LCMSetUp
  {
      param()
        LocalConfigurationManager
        {        
           ActionAfterReboot = 'ContinueConfiguration'
           RebootNodeIfNeeded = $True
           ConfigurationMode = 'ApplyAndAutoCorrect'
           ConfigurationModeFrequencyMins = 240
           RefreshMode = 'PUSH'
        }   
  }

  #Generate MOF File
  LCMSetUp -Outputpath "c:\DSC\LCMSetUp"

  #Update LCM Properties
  Set-DscLocalConfigurationManager -path "c:\DSC\LCMSetUp"  -force -verbose

  #GET DSC Local Configuration Manager
  Get-DSCLocalConfigurationManager 

#---------DSC Configuration to Install Windows Feature---------#

  #DSC Configuration
  [DSCResource()]
  Configuration WindowFeatureInstall
  {
      param()

      Node localhost
      {
          WindowsFeature IISInstall
          {
               Name="Web-Server"
               Ensure="Present"
              IncludeAllSubfeature = $true
          }
        WindowsFeature SMTP
         {
            Name = "SMTP-Server"          
            Ensure = "Present"
            IncludeAllSubFeature = $true
            DependsOn = "[WindowsFeature]IISInstall"
         }
         LocalConfigurationManager
         {        
           ActionAfterReboot = 'ContinueConfiguration'
           RebootNodeIfNeeded = $True
         }
       }
  }

   #Generate MOF File
   WindowFeatureInstall -Outputpath "c:\DSC\WFInstall"

   #Intall Configuration
   Start-DSCConfiguration -path "c:\DSC\WFInstall" -ComputerName localhost -force -verbose -wait
{% endhighlight %}

---
Please do let me know your thoughts/ suggestions/ question in ***disqus*** section.

---
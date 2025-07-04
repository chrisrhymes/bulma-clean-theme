---
layout: post
title: Azure SQL provisionig using CLI
description: "Azure SQL provisionig using CLI"
modified: 2017-07-04
tags: [Azure SQL, CLI, 70-533]
categories: [Azure]
author: Ajeet
google_analytics:  UA-101864870-1
google_verify: GKeGILLEWvsJwRfdYMqqoMDZKOBZPWIWpHP9K2uIXHI
production: true
---
 
The Azure CLI 2.0 is Azure's new command-line experience for managing Azure resources. You can use it in your browser with Azure Cloud Shell, or you can install it on macOS, Linux, and Windows and run it from the command line.

Learning Azure CLI is pretty simple specially if you are comfort with PowerShell. Following script block shows how to create SQL server with database using Azure CLI

<!--more-->

```PowerShell
# Set an admin login and password for your database
            export adminlogin=ServerAdmin
            export password=ChangeYourAdminPassword1

# other parameters
            export servername=clisqlserver1
            export myResourceGroup=clisqlrg
            export location=westeurope

# The ip address range that you want to allow to access your DB
            export startip=0.0.0.0
            export endip=0.0.0.0

# Create a resource group
            az group create   --name $myResourceGroup   --location $location

# Create a logical server in the resource group
            az sql server create   --name $servername \
              --resource-group $myResourceGroup \
              --location $location \
              --admin-user $adminlogin \
              --admin-password $password

# Configure a firewall rule for the server
            az sql server firewall-rule create  --resource-group $myResourceGroup \
              --server $servername   -n AllowYourIp  --start-ip-address $startip  --end-ip-address $endip

# Create a database in the server
            az sql db create  --resource-group $myResourceGroup \
                 --server $servername  --name mySampleDatabase \
                 --sample-name AdventureWorksLT   \
                 --service-objective S0

# You can list all the SQL Server as formatted output (tsv, json, jsonc, table) 
         az  sql db list -g $myResourceGroup   -s $servername  -o jsonc

# Cleanup the deployment
            az group delete --name myResourceGroup

```
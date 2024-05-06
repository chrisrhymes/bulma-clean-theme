---
layout: page
title: Upgrading to v1
menubar: docs_menu
show_sidebar: false
toc: true
---

## Introduction

Version 1 of Bulma Clean Theme uses version 1 of Bulma. Bulma v1 has been updated to use dart sass and Jekyll was updated to use dart sass from version 4.3 and up, so this is now the minimum supported version of Jekyll for this theme. 

## Changes to Bulma

Please read through the [Bulma migration guide](https://bulma.io/documentation/start/migrating-to-v1/) for any changes to Bulma that may affect your site.  

## GitHub pages deploy

 As stated above, the minimum supported version is now Jekyll <= 4.3. The standard build for GitHub pages works with Jekyll 3.9, so you will need to migrate to using a GitHub action to build and deploy your site. 

 Please read through the [Jekyll docs for GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/) for more information.
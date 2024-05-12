---
layout: page
title: Upgrading to v1
menubar: docs_menu
show_sidebar: false
toc: true
---

## Introduction

Version 1 of Bulma Clean Theme uses version 1 of Bulma. Bulma v1 has been updated to use dart sass and Jekyll was updated to use dart sass from version 4.3 and up, so this is now the minimum supported version of Jekyll for this theme. 

## Updating dependencies

One way of updating Jekyll and the theme is by using bundle. First update the versions in your Gemfile as follows:

```ruby
# Gemfile
gem "jekyll", "~> 4.3"
gem "bulma-clean-theme",  '1.0.0'
```

Then use bundle to update from your command line.

```bash
$ bundle update
```

## Using remote_theme

If you are using Jekyll Remote Theme, then you can [add a version number](https://github.com/benbalter/jekyll-remote-theme?tab=readme-ov-file#declaring-your-theme) in your _config.yml to specify which version you want to use.

```yaml
# _config.yml
remote_theme: chrisrhymes/bulma-clean-theme:v1.0.0
```

## Changes to Bulma

Please read through the [Bulma migration guide](https://bulma.io/documentation/start/migrating-to-v1/) for any changes to Bulma that may affect your site.  

### Dark mode

Bulma v1 has a concept of themes and [automatic dark mode](https://bulma.io/documentation/features/dark-mode/).

> Modern browsers come with a way to detect if a user has set their theme preference to light or dark by using the prefers-color-scheme keyword.

To disable this behaviour and force a theme, set the `force_theme:` in the _config.yml to either 'dark' or 'light'.

```yaml
# _config.yml
force_theme: light
```

## GitHub pages deploy

 As stated above, the minimum supported version is now Jekyll <= 4.3. The standard build for GitHub pages works with Jekyll 3.9, so you will need to migrate to using a GitHub action to build and deploy your site. 

 Please read through the [Jekyll docs for GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/) for more information.

### Additional gems

 The [GitHub pages gem](https://rubygems.org/gems/github-pages/versions/231) had a lot of additional gems included, which may not be included when you use GitHub actions to build your site. 
 
 If you are using any additional gems in your site, such as `jekyll-github-metadata`, then ensure you install them following their documentation.
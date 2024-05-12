---
layout: page
title: Configuration
subtitle: Getting Started
menubar: docs_menu
show_sidebar: false
toc: true
---

## General Configuration

Much of a Jekyll's configuration is held in the `_config.yml` file in the project root. 

For information on general Jekyll configuration, please check out the [Jekyll docs](https://jekyllrb.com/docs/configuration/).

Below are some specific options that you might want to set in your `_config.yml` when using Bulma Clean Theme.

## Lang

The html lang attribute is set to `en` by default but you can override this in the _config.yml file `lang: en`

## Direction
The html _dir_ attribute is set to `ltr` by default. It can be overridden in the _config.yml file like `direction: rtl`. 

## Google Analytics 

To enable Google Analytics add `google_analytics: UA-xxxxxxxx` to your `_config.yml` replacing the UA-xxxxxxxx with your Google Analytics property. 

```yaml
google_analytics: UA-xxxxxxxx
```

The Google Analytics implementation uses Google Analytics v4 and consent mode. Please see the [cookie banner](/bulma-clean-theme/docs/page-components/cookie-banner/) for more information.

## GitHub Sponsor

If you have a GitHub sponsors account set up, you can add your username to `gh_sponsor` in the `_config.yml` file and it will display a link to your profile on the right of the navbar.

```yaml
gh_sponsor: chrisrhymes
```

Further information on Sponsors feature available in the [Sponsors docs page](/bulma-clean-theme/docs/sponsors/).

## Disqus

Disqus comments are available for posts. To be able to use them, you need to set your disqus shortname in `_config.yml`. 
```
disqus.shortname=<example-com.disqus.com>  
```

Need help finding your Disqus Shortname?  [See this helpful post by Disqus on the matter.](https://help.disqus.com/en/articles/1717111-what-s-a-shortname)  

Then you need to set your Jekyll environment to production: 

```JEKYLL_ENV=production bundle exec jekyll build```. 

Post comments are enabled by default if disqus is enabled. If you want to disable comments on a specific post, set the following in the post's front matter: 

```markdown
comments: false
```

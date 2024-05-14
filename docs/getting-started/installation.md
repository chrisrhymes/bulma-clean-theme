---
layout: page
menubar: docs_menu
title: Installation
subtitle: Getting Started
show_sidebar: false
toc: true
---

## Use the Gem with Jekyll

{% include notification.html message="V1.x of this theme requires Jekyll <= 4.3 to be compatible with Bulma v1." %}

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "bulma-clean-theme",  '1.0.0'
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: bulma-clean-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install bulma-clean-theme

## GitHub Pages 

### v0.x of Bulma Clean Theme

If you are deploying to GitHub pages, then you can also install the [GitHub Pages gem](https://github.com/github/pages-gem) and use `remote_theme` instead of `theme` in your `_config.yml`. 

Ensure you specify the version number at the end of the remote_theme, otherwise it will use the default version of the theme. 

```yaml
# _config.yml
remote_theme: chrisrhymes/bulma-clean-theme@v0.14.0
```

### v1.x of Bulma Clean Theme

{% include notification.html message="v1.x does not work with the GitHub pages default build process. " status="is-warning" %}

When using v1.x of this theme, use GitHub actions to deploy your site to GitHub pages.

Please read the [upgrade guide](/bulma-clean-theme/docs/getting-started/upgrading-to-v1/) for more information.
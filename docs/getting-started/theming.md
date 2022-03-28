---
layout: page
title: Theming
subtitle: Getting Started
menubar: docs_menu
toc: true
show_sidebar: false
---

## Bulma

Bulma Clean Theme uses the Bulma frontend framework. Check out the [Bulma docs](https://bulma.io/documentation/) for more information.

## Setting the Primary Colour

To overwrite the primary theme colour, create a new file called `assets/css/app.scss`. Copy and paste the below into the `app.scss` file.

```
---
---
$primary: #333333;
// Import Main CSS file from theme
@import "main";
```

To change the primary theme colour, set the sass variable `$primary` to the colour you want. Ensure this is set before the `@import "main";` line.

## Customising styles

Bulma has many sass variables that allows you to fully customise your site as you wish and make it your own design.

You can overwrite any of the [Bulma initial variables](http://versions.bulma.io/0.7.0/documentation/overview/variables/) in this way as long as they are declared before the `@import "main";`.

You can also add any custom css you wish in the `app.scss` file.

## Theme Color Meta Tag

If you want to update the theme color meta tag then set `theme_color: '#333333'` in your `_config.yml` file. 

## Overriding theme defaults

If you want to further customise your site then you can create `_includes` or `_layouts` directories and create files with the same name as the default theme files and overwrite them as you please. 

A word of warning though, this may make it more difficult to upgrade to future versions of the theme. 

Please see the Jekyll documentation for [Overriding theme defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) for more information.
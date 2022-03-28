---
layout: page
title: Top Navigation
subtitle: Navigation
menubar: docs_menu
toc: true
show_sidebar: false
---

## Creating Top Navigation

For the top navigation, create a `navigation.yml` file in the `_data` directory with the following format with the pages you want to include in the top navigation. You can also add items to a dropdown menu.

```yaml
- name: Page Name
  link: /page-1/
- name: Blog
  link: /blog/
  dropdown: 
    - name: Page 2
      link: /page-2/
```

For the current page to have an active class, ensure the `link:` format matches your [permalink](https://jekyllrb.com/docs/permalinks/#extensionless-permalinks) format. The above example will work with a `permalink: pretty` setting in your `_config.yml`.

## Fixed Navbar

To have a fixed or sticky navbar on the top or bottom of your site, you can set `fixed_navbar: top` or `fixed_navbar: bottom` respectively in your `_config.yml`.
---
layout: page
title: Footer Navigation
subtitle: Navigation
menubar: docs_menu
toc: true
show_sidebar: false
redirect_from: 
  - /page-5/
---

## Footer

To add some footer links, create a yaml file in the `_data` directory using the following format.

```yaml
- name: Blog
  link: /blog/
- name: About
  link: /about/
- name: Privacy Policy
  link: /privacy-policy/
```

Then add the name of your yaml file (without the .yml extension) into the `footer_menu` setting in the `_config.yml`.

```yaml
footer_menu: example_footer_menu
```

## Hiding the footer

If you would like to hide the footer on a particular page then set `hide_footer: true` in the page's front matter.
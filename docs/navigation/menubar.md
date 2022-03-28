---
layout: page
title: Menubar
subtitle: Navigation
menubar: docs_menu
toc: true
show_sidebar: false
redirect_from: 
  - /page-3/
---

## What is the Menubar

The menubar is a menu in a column on the left of the page. The menubar gets its content from a data file in your site's `_data` directory. Set the name of your data file in the page's menubar setting in the front matter. 

If you have a file `_data/example_menu.yml` then set the menubar to `example_menu`.

```yaml
show_sidebar: false
menubar: example_menu
```

You will probably want to disable `show_sidebar`. Otherwise there will be little room for the page content. 

## Creating a menubar data file

Create a data file in the `_data` directory and use the following format.

```yaml
- label: Example Menu
  items:
    - name: Home
      link: /
    - name: Pages
      link: #
      items:
        - name: Page With Sidebar 
          link: /page-1/
        - name: Page Without Sidebar
          link: /page-2/
        - name: Page With Menubar
          link: /page-3/
    - name: Blog
      link: /blog/
```

For the current page to have an active class, ensure the `link:` format matches your [permalink](https://jekyllrb.com/docs/permalinks/#extensionless-permalinks) format. The above example will work with `permalink: pretty` setting in your `_config.yml`.

## Multiple menus

You may make multiple menus in the same file, separated by labels.

```yaml
- label: Menu Label
  items:
    - name: Example item
      link: /example-item/
- label: Second Menu Label
  items:
    - name: Parent Item
      link: /parent-item/
      items:
        - name: Sublink 
          link: /sublink/
        - name: Sublink 2
          link: /sublink2/
- label: Third Menu Label
  items:
    - name: Another example item
      link: /another-example-item/
```
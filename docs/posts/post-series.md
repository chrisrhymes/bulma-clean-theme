---
layout: page
title: Post Series
subtitle: Posts
menubar: docs_menu
show_sidebar: false
toc: true
---

## Series of Posts

You can make a post a part of a series of posts, linking to the other posts in the series, by creating a `series` data file and then setting the series in each of the post's front matter.

The current post in the list is highlighted to help give context of where you are in the series.

## Blog Series Data File

Start by creating a yml file in the _data directory, for example `my_blog_series.yml`. Give the series a title and, optionally, a description.

## Sections

Next add sections. Each section can have a label (optional) and items. Each item is the title of an existing blog post. If the title is not found then the link will be empty.

If you just want one list without labels, then omit the label and just add the items.

```yaml
title: The series title
sections:
  - items:
      - title: Why use a static site generator
      - title: Getting started with Bulma Clean Theme for Jekyll
```

Here is a full example with multiple sections with labels.

```yaml
title: The series title
description: The series description text
sections:
  - label: The first section
    items:
      - title: Why use a static site generator
      - title: Getting started with Bulma Clean Theme for Jekyll
  - label: Another section
    items:
      - title: Introducing some new layouts to Bulma Clean Theme
      - title: Creating a docs site with Bulma Clean Theme
      - title: Creating a post series
```

## Update your posts

Finally, add the series setting to your front matter in each post you want the series to show in.

```yaml
series: my_blog_series
```
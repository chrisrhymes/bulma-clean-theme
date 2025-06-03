---
layout: page
title: Creating a Links page
subtitle: Links Pages
menubar: docs_menu
toc: true
show_sidebar: false
---

## Introduction

A links page is designed to provide an overview of your most important links. It is ideal to link to from your social media page where you can only create one link. 

[View the demo links page](/bulma-clean-theme/links/)

## Creating the page

Create a new markdown file and assign the layout of `links` in the front matter. 

You can provide an optional background_image. If you don't then it will default to the dark background colour. 

Set an avatar and avatar_alt text for the image at the top of the page. Ideally this should match your social media profile image. 

The title will be your name or organisation, with the subtitle being optional text to explain the page. 

The links are grouped by sections to allow you to group them into related links. 

Each link needs a name, link, image and image alt text. You can optionally set the image_large to true to change the layout to have a larger background image for the link to help it stand out against other standard links. 

See the below example for how the front matter should be formatted.

```yaml
layout: links
title: Your name here
subtitle: An example links page
avatar: https://picsum.photos/id/64/300/300
avatar_alt: An image of a person
background_image: https://picsum.photos/id/66/1600/2000

link_sections:
  - title: The section title
    links: 
      - name: Read the docs
        link: /docs/
        image: https://picsum.photos/id/69/300/300
        image_alt: An example image
      - name: Read the Blog
        link: /blog/
        image: https://picsum.photos/id/70/300/300
        image_alt: An example image
  - title: Another section title
    links: 
      - name: |-
          An example with a larger image link.
          
          This can have a bit more text than the standard links.
        link: /docs/
        image: https://picsum.photos/id/84/600/600
        image_alt: An example image
        image_large: true
      - name: Read the Blog
        link: /blog/
        image: https://picsum.photos/id/72/300/300
        image_alt: An example image
```
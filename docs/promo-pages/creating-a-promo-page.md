---
layout: page
title: Creating a promo page
subtitle: Promo Pages
menubar: docs_menu
toc: true
show_sidebar: false
---

## Introduction

A promo page is designed as a standalone landing page to promote something, such as a new product. The example promo page has been designed to promote a book, but it can be used for any product as it is very customisable. 

[View promo page demo](/bulma-clean-theme/promo-page/)

## Creating a promo page

To create a promo page, set the layout as `promo-page` in the page's front matter.

```yaml
title: My promo page title
layout: promo-page
```

## Snippet

The snippet appears in the hero. It gives you a chance to write a short description about what you are promoting. It can be written in markdown format as per the below example.

```yaml
title: My promo page title
layout: promo-page
snippet: |-
    This is my snippet about my promo.

    This is some more detail.
```

## Hero link

The hero link is your main call to action on the page. 

This could link to a product page, or where you are selling your product, (such as Amazon, eBay, etc.). Set the hero_link to where you want the visitor to be sent to, then set the hero_link_text to what the button text should say.

```yaml
title: My promo page title
layout: promo-page
hero_link: 'https://my-hero-link.example'
hero_link_text: Buy now!
```

## Hero image

Unlike standard pages, the `hero_image` on a promo page doesn't cover the whole hero as a background. Instead, this is used to show an image of the product you are promoting.

Ensure you set the `hero_image_alt` text for improved accessibility to explain what the image contains. 

You can also set the image ratio to best suit your needs. The default is `is-4by3` but can be set to any of bulma's [image ratio classes](https://bulma.io/documentation/elements/image/).

```yaml
title: My promo page title
layout: promo-page
hero_image: https://picsum.photos/id/171/800/1000
hero_image_alt: The hero image alt text
hero_image_ratio: is-4by5
```

## Reviews

Reviews work the same as for [product reviews](/bulma-clean-theme/docs/products/product-reviews/). Set the `product_code` in the promo page's front matter and it will then display the reviews for the product. 

```yaml
title: My promo page title
layout: promo-page
product_code: ABC123
```

## Newsletter

{% include notification.html message="The default newsletter.html include file does not work. It is a placeholder only!" 
status="is-danger" 
icon="fas fa-exclamation-triangle" %}
 

You can insert your own newsletter sign-up form by creating a new html file in `_includes/newsletter.html`. 

You then need to paste in your own sign-form from your provider of choice, such as [mailchimp](https://mailchimp.com/features/custom-forms/), etc. into the `_includes/newsletter.html` file.

## About section

The about section allows you to provide a bit more background information. For example, if you were selling a book, then you could write about the author. 

The heading is set using the `about_title`.

The image is set using the about_image, with the alternative text set using `about_image_alt`. 

```yaml
about_image: https://i.pravatar.cc/400?img=24
about_image_alt: The about image alt text
about_title: About the author
```

The main content of the page, i.e. the content not in the front matter, will be used to populate the content for the about section.
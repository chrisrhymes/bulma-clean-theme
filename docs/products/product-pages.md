---
layout: page
title: Product Pages
subtitle: Products
menubar: docs_menu
show_sidebar: false
toc: true
---

## Products Directory

Start by creating a `_products` directory to hold your product pages.

## Product Pages

 Create a new page for each product, such as `product1.md`. In the front matter for this page you can set the standard settings, such as your title, subtitle, description (for meta-description), hero_image, as well as the additional product settings such as price, product_code, image, features, and rating. 

```yaml
title: Product 1 Name
subtitle: Product 1 tagline here
description: This is a product description
hero_image: /img/hero-img.jpg
product_code: ABC124
layout: product
image: https://via.placeholder.com/640x480
price: £1.99 + VAT
features:
    - label: Great addition to any home
      icon: fa-location-arrow
    - label: Comes in a range of styles
      icon: fa-grin-stars
    - label: Available in multiple sizes
      icon: fa-fighter-jet
rating: 3
```

The text you write for the page content will be displayed as the product description. 

[View example Product page](/bulma-clean-theme/products/product2/)

## Product Collections 

Next, add the following to your `_config.yml` to use collections to process the product pages and output them as individual pages. 

```yaml
collections:
  products: 
    output: true
    layout: product
    image: https://via.placeholder.com/800x600
    show_sidebar: false
```

You can also set default product page values here if you like, such as the layout or image. 

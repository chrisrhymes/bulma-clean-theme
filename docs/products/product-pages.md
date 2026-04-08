---
layout: page
title: Product Pages
subtitle: Products
menubar: docs_menu
show_sidebar: false
toc: true
---

## Products Directory

The default collection name for products is `products`, so create a `_products` directory to hold your product pages.

## Custom Collection Directory

**Added in v1.0.4**

You can override the default and create a folder with your own collection name. For example, using a collection of `books` would require you to create a folder called `_books`.

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
buttons:
    - url: https://example.com/product/ABC124
      text: Buy on Amazon
      class: is-primary
      icon: fa-shopping-cart
    - url: https://example.com/item/123
      text: Buy on eBay
      class: is-link
```

The text you write for the page content will be displayed as the product description. 

### Buttons

You can add one or more buttons to your product pages by including the `buttons` array in your product's front matter. Each button can have the following properties:

- `url`: (Required) The URL to your e-shop or product purchase page
- `text`: (Optional) Button text (defaults to "Buy it")
- `class`: (Optional) Bulma button class for styling (e.g., `is-primary`, `is-link`, `is-success`)
- `icon`: (Optional) Font Awesome icon class (e.g., `fa-shopping-cart`)
- `image`: (Optional) HTTP link to a custom PNG image for the button (displays image instead of button)

Buttons are displayed side by side, right-aligned, and appear below the product features section.

**Example with multiple standard buttons:**
```yaml
buttons:
    - url: https://example.com/product/ABC124
      text: Buy on Amazon
      class: is-primary
      icon: fa-shopping-cart
    - url: https://example.com/item/123
      text: Buy on eBay
      class: is-link
```

**Example with custom icon image:**
```yaml
buttons:
    - url: https://example.com/product/ABC124
      image: https://example.com/custom-button.png
      text: Buy it
```

### Related Blog Posts

Product pages can automatically display related blog posts. The feature matches posts by their tags against the product's `product_code`. Any blog post that includes the product code in its `tags` will appear as a card in the "Related Blog Posts" section below the product description.

Related posts are enabled by default when `product_code` is set. To disable them, add the following to the product's front matter:

```yaml
show_related_posts: false
```

Each post card displays:
- Post image (if available, shown with 16:9 aspect ratio)
- Post title and date
- Post description, summary, or excerpt (truncated to 180 characters)
- A "Read more" link

Cards are displayed in a responsive grid — 1 column on mobile, 2 on tablet, and 3 on desktop.

Hidden posts (`hidden: true` in post front matter) are automatically excluded from the list.

**Example blog post tagged with a product code:**
```yaml
---
title: "New features for Product 1"
tags: ABC124
image: /img/blog-post.jpg
description: A short summary of the post.
---
```

[View example Product page](/bulma-clean-theme/products/product2/)

## Product Collections 

Next, add the following to your `_config.yml` to use collections to process the product pages and output them as individual pages. 

```yaml
collections:
  products: 
    output: true
    layout: product
    image: https://picsum.photos/id/10/600/480
    show_sidebar: false
```

You can also set default product page values here if you like, such as the layout or image. 

{% include notification.html message="If you use a custom collection name then update `products` to your custom collection name. In the example above for the `_books` folder use `books` as the collection name." %}

For more information on collections, please refer to the [Jekyll documentation](https://jekyllrb.com/docs/collections/). 

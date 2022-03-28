---
layout: page
title: Category Page
subtitle: Products
menubar: docs_menu
show_sidebar: false
toc: true
---

## Category Page

To create a category page listing your products you will need to create a product category page. 

Create a page, for example `products.md`, with the `layout: product-category` in the front matter. You can set the sort order of the products using `sort: title` to sort by the title, or by any setting in your product pages, such as price, rating or any custom front matter tags you wish to set. 

```yaml
title: Products
subtitle: Check out our range of products
layout: product-category
show_sidebar: false
sort: title
```

[View example Category page](/bulma-clean-theme/products/)
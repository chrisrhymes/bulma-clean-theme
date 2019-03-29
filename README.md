# bulma-clean-theme

This is a clean and simple Jekyll Theme built with the [Bulma](https://bulma.io/) framework, providing a modern looking site to start with. 

## Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Pages](#pages)
    * [Posts](#posts)
    * [Navigation](#navigation)
    * [Colours and Styles](#colours-and-styles)
    * [Sidebar Visibility](#sidebar-visibility)
    * [Menubar](#menubar)
    * [Tabs](#tabs)
    * [Google Analytics](#google-analytics)
* [Contributing](#contributing)
* [Development](#development)
* [Licence](#licence)


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "bulma-clean-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: bulma-clean-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install bulma-clean-theme

## Usage

### Pages 

Create your pages as individual markdown files and use the `layout: page` for normal pages. Set the pages title and subtitle in the frontmatter and it will appear in the hero.

**New in 0.2** 
Heros can now display a background image if you provide a `hero_image: /path/to/image.jpg` setting in your page frontmatter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your sites `_config.yml`

You can also set the height of the hero by providing a bulma hero height class in your frontmatter, such as `hero_height: is-fullwidth`. If you do not provide this, it will revert to is-medium 

### Posts

If you want posts, create a `_posts` directory to store your posts as per normal Jekyll usage, with the `layout: post`. Next create a `blog` directory with an index.html file that has `layout: blog`

**New in 0.2** It will now display an image in the blog page if you set `image: /path/to/image.jpg` in your post's or page's frontmatter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your sites `_config.yml`

You can also set the height of the hero by providing a bulma hero height class in your frontmatter, such as `hero_height: is-fullwidth`. If you do not provide this, it will revert to is-medium


### Navigation

For the top navigation, create a navigation.yml file in `_data` directory with the following format with the pages you want to include in the top navigation. You can now also add items to a dropdown menu.

```yaml
- name: Page 1
  link: /page-1/
- name: Blog
  link: /blog/
  dropdown: 
    - name: Page 2
      link: /page-2/
```

For the current page to have an active class, ensure the `link:` format matches your [permalink](https://jekyllrb.com/docs/permalinks/#extensionless-permalinks) format. The above example will work with `permalink: pretty` setting in your `_config.yml`

### Colours and Styles

To overwrite the primary theme colour, set a sass variable in `assets/css/app.scss` before importing `main`

```
---
---
$primary: #333333;
// Import Main CSS file from theme
@import "main";
```

You can overwrite any of the [Bulma initial variables](http://versions.bulma.io/0.7.0/documentation/overview/variables/) in this way as long as they are declared before the `@import "main"'`

### Sidebar Visibility

**New in 0.2**

If you want to show the sidebar with latest posts then set `show_sidebar: true` in the pages frontmatter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your sites `_config.yml`

### Menubar

**New in 0.3**

The menubar gets its content from a data file in your site's `_data` directory. Simply set the name of your data file in the page's menubar setting in the frontmatter. 

```yml
show_sidebar: false
menubar: example_menu
```

You will probably want to disable the show_sidebar otherwise there will be little room for the page content. 

#### Creating a menubar data file

Create a data file in the _data directory and use the following format (if using yml)

```yml
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

For the current page to have an active class, ensure the `link:` format matches your [permalink](https://jekyllrb.com/docs/permalinks/#extensionless-permalinks) format. The above example will work with `permalink: pretty` setting in your `_config.yml`

#### Multiple menus

You may make multiple menus in the same file, separated by the label

```yml
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

### Tabs

**New in 0.4**

The tabs gets its content from a data file in your site's `_data` directory. Simply set the name of your data file in the page's menubar setting in the frontmatter. 

```yml
title: Page with tabs
subtitle: Demo page with tabs
layout: page
show_sidebar: false
menubar: example_menu
tabs: example_tabs
```

Tabs can be used in conjunction with menubar and/or sidebar if you wish. 

#### Creating a tabs data file

Create a data file in the _data directory and use the following format (if using yml)

```yml
alignment: is-left
style: is-boxed
size: is-large
items:
  - name: Tabs
    link: /page-4/
    icon: fa-smile-wink
  - name: Sidebar
    link: /page-1/
    icon: fa-square
  - name: No Sidebar
    link: /page-2/
    icon: fa-ellipsis-v
  - name: Menubar
    link: /page-3/
    icon: fa-bars
```

#### Settings

You can control the alignment, style and size of the tabs by using the relevant [Bulma tabs classes](https://bulma.io/documentation/components/tabs/). 

#### Active Tab Highlighting

It will automatically mark the active tab based on the current page.

#### Icons

You can add icons to your tab by passing in the [Font Awesome icon class](https://fontawesome.com/icons?d=gallery).

If you don't wish to show icons then simply omit the option from your yaml file.


### Google Analytics 

**New in 0.2**

To enable Google Analytics add `google_analytics: UA-xxxxxxxx` to your `_config.yml` replacing the UA-xxxxxxxx with your Google Analytics property

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chrisrhymes/bulma-clean-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


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
  link: page-1
- name: Blog
  link: blog
  dropdown: 
    - name: Page 2
      link: page-2
```

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

### Sidebar Visibility - New in 0.2

If you want to show the sidebar with latest posts then set `show_sidebar: true` in the pages frontmatter, or in the [defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) in your sites `_config.yml`

### Google Anaytics - New in 0.2

To enable Google Analytics add `google_analytics: UA-xxxxxxxx` to your `_config.yml` replacing the UA-xxxxxxxx with your Google Analytics property

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chrisrhymes/bulma-clean-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


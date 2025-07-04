# blogv2 Jekyll Site

This is a modern Jekyll site styled with Tailwind CSS and DaisyUI, inspired by Azure DevOps and MLOps design.

## Contents

* [Installation](#installation)
* [Documentation](#documentation)
* [Upgrading to v1](#upgrading-to-v1)
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

### GitHub pages

### v1.0

To deploy to GitHub pages using v1.x you will need to use GitHub Actions. Please see the [upgrade guide](https://www.csrhymes.com/bulma-clean-theme/docs/getting-started/upgrading-to-v1/) for more information.

### v0.x

If you are deploying to GitHub pages using their default build process, then you can install v0.x of the [GitHub Pages gem](https://github.com/github/pages-gem) and use `remote_theme` instead of `theme` in your `_config.yml`. 

**Note that the GitHub Pages gem requires Jekyll version 3.9 and version 0.x of Bulma Clean Theme**

```yaml
# With GitHub Pages Gem
remote_theme: chrisrhymes/bulma-clean-theme@v0.14.0
```

## Documentation

Check out the demo site for the [Documentation](https://www.csrhymes.com/bulma-clean-theme/docs/)

## Upgrading to v1

There are several breaking changes for v1. Please read the [upgrade guide](https://www.csrhymes.com/bulma-clean-theme/docs/getting-started/upgrading-to-v1/) for more information.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chrisrhymes/bulma-clean-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your development environment:
1. Install Ruby dependencies:
   ```bash
   bundle install
   ```
2. Install Node.js packages:
   ```bash
   npm install
   ```
3. Build Tailwind CSS:
   ```bash
   npm run build:css
   ```
4. Serve locally with Jekyll:
   ```bash
   bundle exec jekyll serve
   ```
5. For continuous CSS rebuilds, in a separate terminal:
   ```bash
   npm run watch:css
   ```

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

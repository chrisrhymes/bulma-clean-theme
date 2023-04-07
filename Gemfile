# frozen_string_literal: true

source "https://rubygems.org"
gemspec

group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.6"
    gem "jekyll-sitemap"
    gem "jekyll-paginate"
    gem "jekyll-seo-tag"
    gem "jekyll-redirect-from"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
  end

# Please add the following to your Gemfile to avoid polling for changes:
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# To get Jupyter Notebook support
gem "jekyll-jupyter-notebook"
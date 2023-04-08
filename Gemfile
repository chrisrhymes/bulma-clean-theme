# frozen_string_literal: true

source "https://rubygems.org"
gemspec

gem "webrick"

group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.6"
    gem "jekyll-sitemap"
    gem "jekyll-paginate"
    gem "jekyll-seo-tag"
    gem "jekyll-redirect-from"
    #gem "jekyll-github-metadata"
    #gem "github-pages"
    gem 'jekyll-font-awesome-sass'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
  end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock jekyll-sass-converter to 2.x on Linux-musl
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end

# Adding `jekyll-compose` extension. See: https://github.com/jekyll/jekyll-compose
gem 'jekyll-compose','~> 0.12.0', group: [:jekyll_plugins]

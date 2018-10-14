# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "bulma-clean-theme"
  spec.version       = "0.1.3"
  spec.authors       = ["chrisrhymes"]
  spec.email         = ["csrhymes@gmail.com"]

  spec.summary       = "Clean and simple theme using Bulma"
  spec.homepage      = "https://www.github.com/chrisrhymes/bulma-clean-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_posts|blog|LICENSE|README|package|node_modules)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end

# frozen_string_literal: true

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "canvas_color"
  spec.version       = "0.0.1"
  spec.authors       = ["Mark Severson", "Simon Williams"]
  spec.email         = ["markse@instructure.com", "simon@instructure.com"]
  spec.summary       = %q{Instructure color gem}

  spec.files         = Dir.glob("{lib,test}/**/*")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 2.2"
  spec.add_development_dependency "rake"
end

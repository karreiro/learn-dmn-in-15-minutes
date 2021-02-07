# frozen_string_literal: true

require 'jekyll'

desc 'Build static content; Usage: `rake build`'
task :build do
  sh 'bundle exec jekyll build'
end

desc 'Start development server; Usage: `rake start`'
task :start do
  sh 'bundle exec jekyll serve --incremental'
end

# == Aliases ==
task b: :build
task s: :start

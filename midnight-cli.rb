require 'time'
require File.join(File.dirname(__FILE__), 'midnight', 'lib', 'midnight.rb')
a = Midnight.parse(ARGV[0]).to_s
puts(a)

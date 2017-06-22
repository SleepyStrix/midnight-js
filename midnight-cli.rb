require 'time'
require 'Midnight'
#puts("Midnight CLI started");

a = Midnight.parse(ARGV[0]).to_s
puts(a);
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


Image.destroy_all
Altar.destroy_all
User.destroy_all

@admin = User.create!(username: 'Tina', email: 'tina@email.com', password: '1234567')

puts "#{User.count} users created"

Altar.create!(name: 'Cyberella Shrine', user: @admin, privacy: true)
Altar.create!(name: 'Holy Techspec', user: @admin, privacy: false)
altar1 = Altar.create!(name: 'Hipnotic Sanctuary', user: @admin, privacy: false)
Altar.create!(name: 'Crypto Spiritual', user: @admin, privacy: false)

@altars = Altar.all

puts "#{Altar.count} altars created"

pp altar1

@image1 = Image.create!(name: 'flower1', image_type: 1, top:'25', left:'35', altar_id: altar1.id)
@image2 = Image.create!(name: 'buddha1', img_url:'https://i.imgur.com/iRGDCuu.png', image_type: 2, top:'75', left:'15', altar_id: altar1.id)

puts "#{Image.count} images created"
pp @image1
# @altarImages = Image.all.filter()

# @altars.first.images << image1

# @altars.second.images = [@image1, @image2]
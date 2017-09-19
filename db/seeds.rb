100.times do
  Menu.create(
    name: Faker::Food.dish,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
  )
end

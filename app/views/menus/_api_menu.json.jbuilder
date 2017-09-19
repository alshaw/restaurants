json.extract! api_menu, :id, :name, :description, :price, :created_at, :updated_at
json.url api_menu_url(api_menu, format: :json)
json.author_name 'Allie Shaw'

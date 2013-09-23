json.array!(@voxeljsons) do |voxeljson|
  json.extract! voxeljson, :json
  json.url voxeljson_url(voxeljson, format: :json)
end

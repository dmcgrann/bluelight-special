class SaleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :latitude, :longitude, :days, :notes, :user_id
end

class SaleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :days, :notes, :user_id
end

class SaleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :days, :notes
end

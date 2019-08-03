class SaleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :days, :notes
  belongs_to :user, serializer: UserSerializer
end

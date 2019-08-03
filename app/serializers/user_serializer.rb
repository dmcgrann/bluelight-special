class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_one :sale, serializer: SaleSerialzer
end

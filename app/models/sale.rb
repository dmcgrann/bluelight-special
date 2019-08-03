class Sale < ApplicationRecord
  belongs_to :user, serializer: UserSerializer
end

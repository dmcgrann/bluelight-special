class User < ApplicationRecord
  has_secure_password
  has_one :sale

  validates :email, :presence => true
  validates :email, :uniqueness => true
  validates :password, :presence => true

end

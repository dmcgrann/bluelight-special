class User < ApplicationRecord
  has_secure_password
  has_many :sales

  validates :email, :presence => true
  validates :email, :uniqueness => true
  validates :password, :presence => true

end

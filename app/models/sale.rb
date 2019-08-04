class Sale < ApplicationRecord
  belongs_to :user

  validates :address, :presence => true
  validates :days, :presence => true

end

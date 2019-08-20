class Sale < ApplicationRecord
  belongs_to :user

  before_validation :geocode, if: :address_changed?

  validates :address, presence: true
  validate :found_address_presence

  def found_address_presence
    if latitude.blank? || longitude.blank?
      errors.add(:sale, "We couldn't find the address")
    end
  end

  geocoded_by :address do |obj, results|
    if geo = results.first
      obj.latitude = geo.latitude
      obj.longitude = geo.longitude
      obj.country = geo.country
      obj.city = geo.city
      obj.postalcode = geo.postal_code
      obj.address = geo.address
    else
      obj.address = nil
    end
  end

end

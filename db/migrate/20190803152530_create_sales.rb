class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|

      t.string :address
      t.string :days
      t.string :notes
      t.integer :user_id
      t.float :latitude
      t.float :longitude
      t.string :country
      t.string :city
      t.integer :postalcode

      t.timestamps
    end
  end
end

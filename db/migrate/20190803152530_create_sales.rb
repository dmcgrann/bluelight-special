class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.string :address
      t.string :days
      t.string :notes

      t.timestamps
    end
  end
end

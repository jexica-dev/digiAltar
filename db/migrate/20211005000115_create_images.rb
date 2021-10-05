class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :name
      t.string :img_url
      t.integer :image_type
      t.string :top
      t.string :left
      t.references :altar, null: false, foreign_key: true

      t.timestamps
    end
  end
end

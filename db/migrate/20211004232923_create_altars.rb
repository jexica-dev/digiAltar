class CreateAltars < ActiveRecord::Migration[6.1]
  def change
    create_table :altars do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.boolean :privacy

      t.timestamps
    end
  end
end

class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :content
      t.string :autor
      
      t.timestamp
    end
  end
end

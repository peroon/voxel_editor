class CreateVoxeljsons < ActiveRecord::Migration
  def change
    create_table :voxeljsons do |t|
      t.text :json

      t.timestamps
    end
  end
end

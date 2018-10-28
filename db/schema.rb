# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_19_132121) do

  create_table "advices", force: :cascade do |t|
    t.string "titulo_consejo"
    t.text "consejo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "recipe_id"
    t.index ["recipe_id"], name: "index_advices_on_recipe_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "comentario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "recipe_id"
    t.integer "user_id"
    t.index ["recipe_id"], name: "index_comments_on_recipe_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "comments_recipes", id: false, force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.integer "comment_id", null: false
    t.index ["comment_id", "recipe_id"], name: "index_comments_recipes_on_comment_id_and_recipe_id"
    t.index ["recipe_id", "comment_id"], name: "index_comments_recipes_on_recipe_id_and_comment_id"
  end

  create_table "days", force: :cascade do |t|
    t.string "dia"
    t.text "descripcion"
    t.integer "contador_calorias"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "plan_id"
    t.index ["plan_id"], name: "index_days_on_plan_id"
  end

  create_table "days_recipes", id: false, force: :cascade do |t|
    t.integer "day_id", null: false
    t.integer "recipe_id", null: false
    t.index ["day_id", "recipe_id"], name: "index_days_recipes_on_day_id_and_recipe_id"
    t.index ["recipe_id", "day_id"], name: "index_days_recipes_on_recipe_id_and_day_id"
  end

  create_table "glossaries", force: :cascade do |t|
    t.string "palabra_clave"
    t.string "receta"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "picture"
    t.integer "recipe_id"
    t.index ["recipe_id"], name: "index_images_on_recipe_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "nombre"
    t.float "calorias"
    t.boolean "vegetariano"
    t.string "precio"
    t.string "tipo_ingrediente"
    t.text "consejo_ingrediente"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "caracteristica"
  end

  create_table "ingredients_recipes", id: false, force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.integer "ingredient_id", null: false
    t.index ["ingredient_id", "recipe_id"], name: "index_ingredients_recipes_on_ingredient_id_and_recipe_id"
    t.index ["recipe_id", "ingredient_id"], name: "index_ingredients_recipes_on_recipe_id_and_ingredient_id"
  end

  create_table "kitchens", force: :cascade do |t|
    t.text "descripcion"
    t.text "consejos"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "favoritos"
    t.index ["user_id"], name: "index_kitchens_on_user_id"
  end

  create_table "kitchens_recipes", id: false, force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.integer "recipe_id", null: false
    t.index ["kitchen_id", "recipe_id"], name: "index_kitchens_recipes_on_kitchen_id_and_recipe_id"
    t.index ["recipe_id", "kitchen_id"], name: "index_kitchens_recipes_on_recipe_id_and_kitchen_id"
  end

  create_table "plans", force: :cascade do |t|
    t.string "tipo_plan"
    t.string "nombre_plan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "kitchen_id"
    t.index ["kitchen_id"], name: "index_plans_on_kitchen_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "nombre"
    t.text "receta"
    t.boolean "vegetariano"
    t.float "duracion_preparacion"
    t.float "numero_comensales"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "publico"
    t.text "guarniciones"
    t.float "cantidades"
  end

  create_table "users", force: :cascade do |t|
    t.string "nombre"
    t.string "nombre_usuario"
    t.string "correo"
    t.string "contraseña"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

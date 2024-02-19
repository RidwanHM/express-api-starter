/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sfh4b9czoxk0ptd")

  collection.name = "vending_machines"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sfh4b9czoxk0ptd")

  collection.name = "tbane_stops"

  return dao.saveCollection(collection)
})

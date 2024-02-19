/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5k2y2qqphk8dnf1")

  collection.name = "Stop"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5k2y2qqphk8dnf1")

  collection.name = "Products"

  return dao.saveCollection(collection)
})

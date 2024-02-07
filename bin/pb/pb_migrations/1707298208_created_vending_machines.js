/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sfh4b9czoxk0ptd",
    "created": "2024-02-07 09:30:08.228Z",
    "updated": "2024-02-07 09:30:08.228Z",
    "name": "vending_machines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yw1lvtww",
        "name": "Location",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "t0j6awck",
        "name": "products",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5k2y2qqphk8dnf1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sfh4b9czoxk0ptd");

  return dao.deleteCollection(collection);
})

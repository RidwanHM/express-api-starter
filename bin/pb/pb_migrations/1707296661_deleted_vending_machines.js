/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u25nm05spnozlte");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "u25nm05spnozlte",
    "created": "2024-02-07 09:02:48.182Z",
    "updated": "2024-02-07 09:02:48.182Z",
    "name": "vending_machines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gridtodi",
        "name": "Noroff",
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
})

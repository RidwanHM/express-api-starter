/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5k2y2qqphk8dnf1",
    "created": "2024-02-06 10:10:43.209Z",
    "updated": "2024-02-06 10:10:43.209Z",
    "name": "Products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4xordja7",
        "name": "name",
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
        "id": "yrnvnhnc",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("5k2y2qqphk8dnf1");

  return dao.deleteCollection(collection);
})

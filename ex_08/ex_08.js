webac = db.getSiblingDB('webac');

var cursor = webac.products.aggregate([
    {$match: {type: "Furniture"} },
    {$group: {_id: 0, count: {$sum: 1}, sum: {$sum: "$price"} } }]);

while ( cursor.hasNext() ) {
    printjson(cursor.next());
}
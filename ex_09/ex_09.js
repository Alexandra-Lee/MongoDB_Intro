webac = db.getSiblingDB('webac');
var cursor = webac.owners.aggregate([ {$lookup: 
    {from: 'products', localField: 'products', foreignField: '_id', as: 'product'}}, 
    {$match: {name: "Martin"}},
]);
    

while ( cursor.hasNext() ) {
    printjson(cursor.next());
}
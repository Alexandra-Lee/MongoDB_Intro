webac = db.getSiblingDB('webac');

cursor = webac.products.find({ material: { $regex: /.*wood*/i }}, {name: 1, _id: 0});

while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}
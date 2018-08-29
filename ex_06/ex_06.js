webac = db.getSiblingDB('webac');

cursor = webac.products.find({price: { $gt: 199, $lt:450 } } );

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
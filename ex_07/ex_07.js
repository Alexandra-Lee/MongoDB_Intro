webac = db.getSiblingDB('webac');

cursor = webac.products.find({_id: { $in: [1, 5, 10, 20] } } ) ;

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
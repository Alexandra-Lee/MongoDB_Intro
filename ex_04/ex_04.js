webac = db.getSiblingDB('webac');

cursor = webac.products.find().sort({ type: -1, price: 1});

while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}
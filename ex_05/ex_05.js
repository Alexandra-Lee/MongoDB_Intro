webac = db.getSiblingDB('webac');

cursor = webac.products.find().skip(4).limit(10);

while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}
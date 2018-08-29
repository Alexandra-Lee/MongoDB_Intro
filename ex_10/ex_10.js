var webac = db.getSiblingDB('webac');

webac.products.insertOne(
    { _id: 31, name: "Platypus", price: 42000, material: "Heavy Metal", type: "Mammal" }
 );

 webac.owners.updateOne(
    {name: "Martin"},
    {$addToSet: {products: 31}});
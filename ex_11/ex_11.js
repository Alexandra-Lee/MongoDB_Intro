var webac = db.getSiblingDB('webac');

webac.products.deleteMany(
    {_id: {$in: [8, 9, 14, 16, 21, 23, 31]} });

webac.owners.deleteOne({name: "Martin"});    
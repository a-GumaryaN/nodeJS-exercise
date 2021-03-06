const mongodb = require('mongodb').MongoClient;

// const url = "mongodb://localhost:27017/";

const log = console.log;

// mongodb.connect(url , (err, db) => {
//     if (err) throw(err);
//     else {
//         const dbo = db.db("nodejsExercise");
//         dbo.createCollection('cutomers' , (err)=>{
//             if (err) throw (err);
//             else {
//                 log('created...');
//                 db.close();
//             }
//         })
//     }
// });


exports.insert = (url,dbName, collectionName, insertArray) => {
    return new Promise((resolve, reject) => {

        mongodb.connect(url + dbName, (err, db) => {
            if (err) return reject(`error in connect to database in insert methode=> ${err}`);
            else {
                const dbo = db.db();
                dbo.collection(collectionName).insertMany(insertArray, (err, result) => {
                    if (err) return reject(`error in connect to database in insert methode=> ${err}`);
                    else {
                        return resolve(`user added to database succesfully=> ${result.ops}`);
                    }
                })

            }
            db.close();
        });
    });
}


exports.find = (url,dbName, collectionName, findQuery) => {
    return new Promise((resolve, reject) => {

        mongodb.connect(url + dbName, (err, db) => {
            if (err) return reject(err);
            else {
                const dbo = db.db();
                dbo.collection(collectionName).find(findQuery).toArray((err, result) => {
                    if (err) return reject(err);
                    else{
                        return resolve(result);
                    }
                });
            }
            db.close();
        });
    });
}
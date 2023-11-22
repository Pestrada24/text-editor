import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


import { MongoClient } from 'mongodb';


export const getDb = async () => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection('jate');
    const result = await collection.find({}).toArray();
    return result;
  } finally {
    await client.close();
  }
};


export const getDb = async () => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection('jate');
    const result = await collection.find({}).toArray();
    return result;
  } finally {
    await client.close();
  }
}

initdb();

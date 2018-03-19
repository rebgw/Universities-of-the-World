import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyB799scvfDY0vXGSQmFVYRgeSVtCP0ZceI',
  authDomain: 'universities-of-the-world.firebaseapp.com',
  databaseURL: 'https://universities-of-the-world.firebaseio.com',
  projectId: 'universities-of-the-world',
  storageBucket: 'universities-of-the-world.appspot.com',
  messagingSenderId: '301526515197'
});

export const db = app.database();
export const unisRef = db.ref('unis');
export const testRef = db.ref('test');
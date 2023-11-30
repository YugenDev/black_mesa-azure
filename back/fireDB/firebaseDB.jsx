
//agregar objeto a la coleccion users
import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    id: 1,
    numeroCuenta: 57875967,
    bolsillos: [],
    gastos: [],
    idUsuario: 1
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


//leer todos los datos de la coleccion users
import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
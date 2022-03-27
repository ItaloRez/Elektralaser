import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, 
    getDocs, doc, updateDoc, arrayUnion, getDoc, deleteDoc,
    orderBy,query   
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDelP3tOmRFPxi8BolezF9aRSBzE7J3Tms",
    authDomain: "elektralaser-624a7.firebaseapp.com",
    projectId: "elektralaser-624a7",
    storageBucket: "elektralaser-624a7.appspot.com",
    messagingSenderId: "277230859339",
    appId: "1:277230859339:web:e42c84f55f9721ad5ec9ce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function writeData(data) {
    const resp = addDoc(collection(db, "clientes"), data)
    return resp
}

export function readData() {
    const resp = getDocs(query(collection(db, "clientes"), orderBy("nome", "asc")))
    return resp
}

export function editData(id, data) {

    const resp = updateDoc(doc(db, "clientes", id), {
        sessoes: arrayUnion(data)
    })
    return resp
}

export function lerSessoes(id) {
    const resp = getDoc(doc(db, "clientes", id))
    return resp
}

export function deleteClient(id) {
    const resp = deleteDoc(doc(db, "clientes", id))
    return resp
}
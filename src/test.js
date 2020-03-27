import firebase from 'firebase/app';
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('9qai3yo35dNqtEndRMwf').collection('cartItems').doc('CclihZrB36ZSFVnQis58');
// ===
firestore.doc('/users/9qai3yo35dNqtEndRMwf/cartItems/CclihZrB36ZSFVnQis58');
/// ===
firestore.collection('/users/9qai3yo35dNqtEndRMwf/cartItems');
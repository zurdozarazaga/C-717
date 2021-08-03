import firebase from "firebase/app";
import 'firebase/firestore';
import { toast } from 'react-toastify';

// Modal values addded to Firebase
const setData = async (values) => {erro
  const db = firebase.firestore();
  try {
    await db.collection('Elementos').add(values);
    toast.success('Elemento Agregado!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.log(`se produzco un error ${error}`);
    toast.error('Se produzco un error al guardar el Elemento!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export default setData;

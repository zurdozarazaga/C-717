import firebase from "firebase/app";
import 'firebase/firestore';
import { toast } from 'react-toastify';

const onDeleteElement = async (elementoId) => {
  const db = firebase.firestore();
  try {
    if (window.confirm('¿Desea eliminar el elemento?')) {
      await db.collection('Elementos').doc(elementoId).delete();
      console.log('elemento eliminado');
      toast.success('Elemento Eliminado Exitosamente!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    console.error(error);
    toast.error('Se produzco un error al eliminar el Elemento!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  };
};

export default onDeleteElement;

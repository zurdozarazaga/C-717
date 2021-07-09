import firebase from "firebase/app";
import 'firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const traerTodos = () => async (dispatch) => {
  const db = firebase.firestore();
  try {
    await db.collection('Elementos').onSnapshot((data) => {
      const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(arrayData);
      dispatch({
        type: 'traer_elementos',
        payload: arrayData,
      });
    });
  } catch (error) {
    console.log(error);
  };
};


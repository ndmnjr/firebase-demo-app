import firebase from 'firebase/compat/app';

export const signIn = async(email, password) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        return {result};
    }
    catch (e) {
        throw new Error('Error signing in');
    }
}
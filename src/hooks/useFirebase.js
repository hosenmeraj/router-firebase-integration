import { useState } from "react"
import App from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(App)
const provider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return {
        user,
        signWithGoogle
    }
}
export default useFirebase;
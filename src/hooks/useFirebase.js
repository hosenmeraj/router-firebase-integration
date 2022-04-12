import { useEffect, useState } from "react"
import App from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

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
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    return {
        user,
        handleSignOut,
        signWithGoogle
    }
}
export default useFirebase;
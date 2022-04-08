import './App.css';
import app from './firebase-init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider()

  //for google authenticator
  //sign in
  const handleGoogleSign = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  // sign out
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleGoogleSignOut}>sign Out</button>
          :
          <>
            <button onClick={handleGoogleSign}>google signIn</button>
            <button onClick={handleGitHubSignIn}>Github SignIn</button>
          </>
      }
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;

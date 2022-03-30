import { signInWithEmailAndPassword, sendSignInLinkToEmail, GoogleAuthProvider, FacebookAuthProvider,signInWithPopup ,createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../config/firebase_config'

const provider = new FacebookAuthProvider();

 export const handlesignin = (e,email,password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('signin succeful');
        // props.setislogin(true)
        // setError(null)
        // navigate('/p/products');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setError(errorMessage);
        alert(errorMessage);
        console.log(error)
      });
  }

  export const handlegooglesignin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
      // alert('signin succeful');

      // props.setislogin(true)
      // setError(null)
      // navigate('/p/dashboard');
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user))
      // console.log(user);
    }).catch((error) => {
      alert("you are blocked by admin");
    }
    )
  }

export const handlesignup = (e, email, password) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      alert("signup successful");
      const  user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  // navigate("/signin")
}

export const handlefacebooksignin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert('facebook doen');
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });



}
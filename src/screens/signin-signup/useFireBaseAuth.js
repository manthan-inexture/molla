import { signInWithEmailAndPassword, sendSignInLinkToEmail, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase_config'
import { useSelector, useDispatch } from 'react-redux'
import { adduser } from "../../redux/users/actions";
import { spinneractive, spinnernotactive } from "../../redux/users/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useNavigate
} from "react-router-dom"
const provider = new FacebookAuthProvider();

const useFireBaseAuth = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.getuserdata)
  const islogin = useSelector((state) => state)
  // console.log(islogin);

  const handlesignin = (e, email, password) => {
    e.preventDefault();
    dispatch(spinneractive())
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert('signin succeful');
        toast.info("signin Successful", {
          closeButton: false,
          autoClose: 1000,
        });
        const credential = userCredential.user;
        const user = {
          userid: credential.uid,
          email: email,
          password: password,
          accessToken: credential.accessToken,
          emailVerified: credential.emailVerified
        }
        dispatch(adduser(user))
        localStorage.setItem("islogin", true);
        dispatch(spinnernotactive())
        navigate('/shop');
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(spinnernotactive())
        alert(errorMessage);
        // toast.error("field")
        console.log(error)
      });
  }

  const handlegooglesignin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
      const credential = userCredential.user;
      const user = {
        userid: credential.uid,
        email: credential.email,
        password: "Null",
        accessToken: credential.accessToken,
        emailVerified: credential.emailVerified
      }
      toast.info("signin Successful", {
        closeButton: false,
        autoClose: 1000,
      });
      dispatch(adduser(user))
      localStorage.setItem("islogin", "true");
      navigate('/shop');
    }).catch((error) => {
      alert("you are blocked by admin");
      console.log(error.message)
      console.log(error);
    }
    )
  }

  const handlesignup = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("signup successful");
        const credential = userCredential.user;
        const user = {
          userid: credential.uid,
          email: email,
          password: password,
          accessToken: credential.accessToken,
          emailVerified: credential.emailVerified
        }
        toast.info("signup Successful", {
          closeButton: false,
          autoClose: 1000,
        });
        dispatch(adduser(user))
        localStorage.setItem("islogin", "true");
        navigate('/shop');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    // navigate("/signin")
  }

  const handlefacebooksignin = () => {
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
  return { handlesignin, handlegooglesignin, handlesignup, handlefacebooksignin }
}
export default useFireBaseAuth



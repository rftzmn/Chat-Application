import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Nav = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <div>
        

        <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          logout
        </button>
      </div>
    </div>
  )
}

export default Nav
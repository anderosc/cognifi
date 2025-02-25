import styles from "./navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'


function NavBar() {
  let navigate = useNavigate()

  return (
    <div className={styles.navbar}>
        <div className={styles.first}>
            <img onClick={() => navigate("/home")} className={styles.logo} src="/logo.png" alt="" />
            <p onClick={() => navigate("/home")}>Cognifi</p>
        </div>
        <div className={styles.right}>
          <p onClick={() => navigate("/home")}>Home</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => navigate("/games")}>Games</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
          <Link to="/login"><button className={styles.play}>Log In</button></Link>
        </div>
    </div>
  )
}

export default NavBar
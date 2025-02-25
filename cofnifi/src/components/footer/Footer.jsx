import styles from './footer.module.css'

function Footer() {
  return (
    <div>
        <div className={styles.container}>
            
                <div className={styles.column}>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div className={styles.column}>
                    <p>Home</p>
                    <p>Contact Us</p>
                    <p>Games</p>
                    <p>Blog</p>
                </div>

            </div>
            © 2025 Andero Schütz
    </div>
  )
}

export default Footer
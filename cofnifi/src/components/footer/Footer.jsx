import { useState } from 'react';
import styles from './footer.module.css'

function Footer() {
  const [scale, setScale] = useState(1); 
  const audio = new Audio("/footer/heart.mp3")
  const [heartClicked, setHeartCliked] = useState(0);

  function clicked() {
    if(heartClicked === 5){
      return;
    }
    setScale(1.5); 
    audio.play()
    setHeartCliked(prev => prev + 1);
    console.log(heartClicked)
    setTimeout(() => setScale(1), 200); 
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className={styles.column}>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
        <div>
          <p>⬆ Back to Top</p>
        </div>
        <div className={styles.wrapper}>
          <img
            onClick={clicked}
            src="/footer/heart.png"
            alt="heart"
            className={styles.heart}
            style={{ transform: `scale(${scale})`, transition: 'transform 0.2s ease' }}
          />
          <div className={styles.beat}>342</div>
        </div>
      </div>
      © 2025 Andero Schütz
    </div>
  )
}

export default Footer;

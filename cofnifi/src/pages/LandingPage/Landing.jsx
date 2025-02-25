import styles from "./landing.module.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className={styles.page}>
        <div className={styles.first}>
                <div className={styles.box}>
                    <div className={styles.inside} >
                        <div className={styles.boxWhite}>
                            <img className={styles.firstboximg} 
                            src="/landingpage/brain.png" alt="" />
                                <div className={styles.boxinside}>
                                    <h1>Ditch the Brain Rot – Start Thinking Again</h1>
                                    <h3>Endless scrolling isn’t helping you</h3>
                                    <p>Swap mindless doomscrolling for something that actually benefits you. 
                                        Our brain-training exercises keep your mind active, sharp, and engaged. 
                                        Take a break from the noise and challenge yourself with something meaningful!</p>  
                                </div>        
                        </div>
                        <div className={styles.other}>
                            <p>Ready to challenge your brain?</p> 
                            <Link to="/signup"> <button>SIGN UP</button></Link>
                        </div>
                    </div>
                </div>



            <div className={styles.box}>
                <div className={styles.inside} > 
                    <div className={styles.boxWhite}>
                        <img className={styles.firstboximg} 
                        src="/landingpage/person.png" alt="" />
                            <div className={styles.boxinside}>
                                <h1>Boost Your Productivity</h1>
                                <h3>Sharper mind for a more efficient you</h3>
                                <p>Our cognitive exercises are designed to enhance focus, memory, and problem-solving skills—helping 
                                    you become more productive in both your personal and professional life. Train your brain to work 
                                    smarter, not harder!</p>                              
                            </div> 
                    </div>
                    <div className={styles.other}>
                        <p>Boost your cognitive skills now</p> 
                        <Link to="/signup"> <button>SIGN UP</button></Link>
                    </div>
                </div>
            </div>
                
            <div className={styles.box}>
                <div className={styles.inside} >
                    <div className={styles.boxWhite}>
                        <img className={styles.firstboximg} 
                        src="/landingpage/growthgraph.png" alt="" />
                            <div className={styles.boxinside}>
                                <h1>Personalized Growth</h1>
                                <br />
                                <h3>Exercises tailored for you</h3>
                                <p>Our mental challenges are designed to fit your individual needs, 
                                    ensuring maximum benefits. Track your progress and see how your 
                                brain develops over time with each session.</p>
                            </div>
                    </div>
                    <div className={styles.other}>
                        <p>Take the first step towards sharper focus.</p> 
                        <Link to="/signup"> <button>SIGN UP</button></Link>
                    </div>
                    </div>
            </div>
        </div>

        <div className={styles.second}>g</div>

        <div className={styles.third}></div>

        <div className={styles.fourth}></div>

        <div className={styles.fifth}></div>
    </div>
  )
}

export default Landing
import { useState } from 'react';
import { FiGithub, FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from './Header.module.scss';

function Header() {

  const [isCopied, setIsCopied] = useState(false);

  const myEmail = 'alhassandafiri06@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email.', err);
    });
  };

  return(
    <section className={styles.headerSection}>
      <div className={styles.headerContent}>

        <img
        src='src/assets/images/pfp.png'
        alt='a photo of me'
        className={styles.profilePhoto}
        />

      <div className={styles.headerTextContent}>
        <h1 className={styles.headerName}>
          Al-Hassan Dafiri  
          
          <span className={styles.headerIcons}>

            <a href='https://github.com/alhassandafiri' target='_blank'>
              <FiGithub className={styles.githubIcon}/>
            </a>

            <a href='https://www.linkedin.com/in/alhassandafiri/' target='_blank'>
              <SlSocialLinkedin className={styles.linkedinIcon}/>
            </a>

            <div className={styles.mailContainer}>
              <button onClick={handleCopyEmail} className={styles.iconButton} aria-label="Copy email address">
                <FiMail className={styles.mailIcon}/>
              </button>
      
              {isCopied && <span className={styles.copiedPopup}>Email copied to clipboard</span>}
            </div>

          </span>
        </h1>

        <p className={styles.headerDescription}>
          computer science student{' '} <span className={styles.headerUniversity}>@ the university of salford</span>
        </p>
      </div>
    </div>
    </section>
  )
}
  

export default Header
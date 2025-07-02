import styles from '../../../assets/styles/Footer.module.scss';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return(
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
        © {currentYear} Al-Hassan Dafiri
        </p>
      </div>
    </footer>
  )
}

export default Footer;
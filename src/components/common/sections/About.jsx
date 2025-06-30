import styles from '../../../assets/styles/About.module.css';


function About() {
  return(
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
          <p className={styles.aboutDescription}>
            I am an aspiring software engineer with a passion for building and designing fullstack web applications as well as solving complex problems. I am eager to learn more and am constantly looking for challenges.
          </p>
      </div>
    </section>
  )
}

export default About;
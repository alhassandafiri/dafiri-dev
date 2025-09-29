import styles from './About.module.scss';


function About() {
  return(
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
          <p className={styles.aboutDescription}>
            I’m a Computer Science student and aspiring software engineer who loves turning ideas into working products. My focus is on fullstack web applications, from building scalable backends to crafting clean, intuitive interfaces. I thrive on tackling tricky problems, picking up new tools fast, and pushing myself with projects that stretch what I know.
          </p>
      </div>
    </section>
  )
}

export default About;
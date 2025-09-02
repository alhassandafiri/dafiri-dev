// src/components/common/sections/Skills.jsx

import styles from '../../../assets/styles/Skills.module.scss';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React.js',
    'Laravel',
    'PHP',
    'Python',
    'Java',
    'Tailwind',
    'SCSS',
    'CSS Modules',
    'PostgreSQL',
    'SQL',
    'Git'

  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContent}>
        <h2 className={styles.skillsTitle}>~ skills</h2>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <span className={styles.skillName}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
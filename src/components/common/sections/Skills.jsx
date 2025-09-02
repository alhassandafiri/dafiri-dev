import { useState, useRef, useEffect, useCallback } from 'react';
import styles from '../../../assets/styles/Skills.module.scss';
import { SiJavascript, SiReact, SiLaravel, SiPhp, SiPython, SiTailwindcss, SiSass, SiPostgresql, SiGit, SiCss3 } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', icon: SiJavascript }, { name: 'React.js', icon: SiReact },
    { name: 'Laravel', icon: SiLaravel }, { name: 'PHP', icon: SiPhp },
    { name: 'Python', icon: SiPython }, { name: 'Java', icon: FaJava },
    { name: 'Tailwind CSS', icon: SiTailwindcss }, { name: 'SCSS', icon: SiSass },
    { name: 'CSS Modules', icon: SiCss3 }, { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'SQL', icon: FiDatabase }, { name: 'Git', icon: SiGit },
  ];

  const duplicatedSkills = [...skillsData, ...skillsData];

  const carouselRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const autoScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (carousel && !isDragging) {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 0.5;
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll);
  }, [isDragging]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [autoScroll]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const carousel = carouselRef.current;
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContent}>
        <h2 className={styles.skillsTitle}>~ skills</h2>
        <div 
          className={`${styles.carouselContainer} ${isDragging ? styles.active : ''}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.carouselTrack}>
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <skill.icon className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
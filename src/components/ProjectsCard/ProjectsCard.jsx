import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { RiProgress4Fill, RiProgress8Fill, RiProgress8Line   } from "react-icons/ri";
import styles from './ProjectsCard.module.scss';

const ProjectsCard = ({ title, description, technologies, githubLink, liveLink, progress }) => {

  const getIconAndStyle = (progressValue) => {
    if (progressValue === 100) {
      return {IconComponent: RiProgress8Line, colourClass: 'progressDone', tooltipText: 'Completed'};
    }
    if (progressValue > 0) {
      return {IconComponent: RiProgress4Fill, colourClass: 'inProgress', tooltipText: 'In Progress'};
    }

    return {IconComponent: RiProgress8Fill, colourClass: 'notStarted', tooltipText: 'In Planning'};
  }


  const {IconComponent, colourClass, tooltipText} = getIconAndStyle(progress);


  return (
    <div className={styles.card}>
      <div>
        <div className={styles.cardHeader}>
          <h3>{title}</h3>
          
          <div className={styles.iconGroup}>
            {githubLink && (
              <a href={githubLink} target='_blank' rel='noopener noreferrer' className={styles.iconLink}>
                <FiGithub />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target='_blank' rel='noopener noreferrer' className={styles.iconLink}>
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <div className={styles.cardBody}>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.technologiesContainer}>
          {technologies.map((tag) => (
            <span key={tag} className={styles.technologiesTag}>
              {tag}
            </span>
          ))}
        </div>
        
      </div>
      {typeof progress === 'number' && (
        <div className={styles.progressSection}>
          <IconComponent className={`${styles.progressIcon} ${styles[colourClass]}`}/>
          
          <span className={styles.tooltip}>{tooltipText}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
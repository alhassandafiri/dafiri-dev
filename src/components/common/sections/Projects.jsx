import styles from '../../../assets/styles/Projects.module.scss';
import { projectsData } from '../../../data/data';
import ProjectsCard from './ui/ProjectsCard';

const Projects = () => {
  return(
    <section className={styles.projectsSection}>
          <div className={styles.projectsContent}>
              <h2 className={styles.projectsTitle}>
              ~ projects / currently working on
              </h2>
              <div className={styles.projectsGrid}>
                {
                  projectsData.map((project) => (
                    <ProjectsCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    progress={project.progress}
                    />
                  ))
                }
              </div>
          </div>
    </section>
  )
}

export default Projects;
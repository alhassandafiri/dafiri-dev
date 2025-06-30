import styles from '../../../assets/styles/Projects.module.css';
import ProjectsCard from './ui/ProjectsCard'

const projectsData = [
  {
  title: 'Portfolio Website',
  description: 'A clean, minimalist portfolio built with React and CSS Modules to showcase my skills and projects. Designed to be fully responsive and performant.',
  technologies: ['React', 'Vite', 'CSS Modules'],
  githubLink: 'https://github.com/alhassandafiri',
  liveLink: 'http://localhost:5173/',
  progress: 50
},

{
  title: 'Currency Conversion Calculator',
  description: 'A modern website that allows you to view the current currency exchange rate with over 200 supported currencies.',
  technologies: ['React', 'Tailwind', 'AWS', 'Yahoo APIs'],
  githubLink: 'https://github.com/alhassandafiri',
  liveLink: 'http://localhost:5173/',
  progress: 0
},
];


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
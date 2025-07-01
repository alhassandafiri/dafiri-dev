import styles from '../../../assets/styles/Timeline.module.css';

const timelineData = [{

  year: '2024 - present',
  title: 'placeholder',
  description: 'Developed and maintained responsive websites for various clients, focusing on React, Next.js, and modern CSS practices.'
},
{
  year: '2022',
  title: 'university of placeholder',
  description: 'completed my bachelor of placeholder at university of placeholder'
},
{
  year: '2021',
  title: 'university of placeholder',
  description: 'completed my bachelor of placeholder at university of placeholder'
},
{
  year: '2021',
  title: 'university of placeholder',
  description: 'completed my bachelor of placeholder at university of placeholder'
},
];


function Timeline() {
  return(
    <section className={styles.timelineSection}>
      <div className={styles.timelineContent}>
        <h2 className={styles.timelineTitle}>
        ~ timeline
        </h2>

        <div className={styles.timelineContainer}>
          {timelineData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineItemContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                <p className={styles.timelineItemDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  )
}

export default Timeline
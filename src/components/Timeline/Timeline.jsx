import styles from './Timeline.module.scss';
import { timelineData } from '../../data/data'

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
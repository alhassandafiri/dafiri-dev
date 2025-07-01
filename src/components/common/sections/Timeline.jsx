import styles from '../../../assets/styles/Timeline.module.css';

const timelineData = [
{
  year: 'April 2025 - Present',
  title: 'Open Source Contributions',
  description: 'contributed to multiple open source projects'
},
{
  year: 'September 2024 - May 2025',
  title: 'First Year',
  description: 'top of class in multiple modules'
},
{
  year: 'May 2024 -  July 2024',
  title: 'Volunteering at Web Development for good',
  description: 'created multiple web pages and optimised functionality by 20%'
},
{
  year: 'September 2023 - May 2024',
  title: 'Foundation Year at University',
  description: 'achieved top marks in multiple modules and a first class'
},
{
  year: 'September 2022 - June 2023',
  title: 'High School',
  description: 'graduated top of my class with a 4.00 GPA'
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
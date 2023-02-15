import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
          <h1 className={styles.title}>about</h1>
          <p className={styles.subtitle}>Lorem Ipsum.</p>
        </div>
      );
}

export default About;
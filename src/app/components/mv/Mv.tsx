import styles from "./mv.module.scss";

const Mv = () => {
  return (
    <div className={styles.mv}>
      <div className={styles.mv__contents}>
        <h2 className={styles.mv__title}>D.suke</h2>
        <span className={styles.mv__jobName}>I am a web developer.</span>
      </div>
    </div>
  );
};

export default Mv;

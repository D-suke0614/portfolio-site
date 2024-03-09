import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <span>&copy;2024 - D.suke</span>
      </div>
    </footer>
  );
};

export default Footer;

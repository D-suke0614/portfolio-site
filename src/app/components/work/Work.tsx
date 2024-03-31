import styles from "./work.module.scss";
import Image from "next/image";
import Section from "../section/Section";

const Work = () => {
  return (
    <Section title="work" sectionId="work" bg="gray">
      <div className={styles.work__cards}>
        <div className={styles.work__card}>
          <Image
            className="w-full h-fit"
            width={200}
            height={150}
            src={"/MyLogo_simple.svg"}
            alt=""
          />
          <div className={styles.work__card__content}>
            <h3 className="font-bold">Portfolio Site</h3>
            <p>ポートフォリオサイトです。</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;

import styles from "./about.module.scss";
import Section from "../section/Section";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const SNS_ICONS = [
  { url: "https://twitter.com/0614d_suke", icon: <BsTwitterX /> },
  { url: "https://zenn.dev/d_suke0614", icon: <SiZenn /> },
  { url: "https://github.com/D-suke0614", icon: <FaGithub /> },
];

const About = () => {
  return (
    <Section sectionId="about" title="About" bg="gray">
      <div className={styles.about}>
        <div className={styles.about__left}>
          <Image
            className={styles.about__image}
            src={"/my_pic.png"}
            alt="about-image"
            width={180}
            height={180}
          />
        </div>
        <div className={styles.about__right}>
          <div className={styles.about__nameSpace}>
            <h3 className={styles.about__name}>d.suke</h3>
            <div className={styles.about__snsSpace}>
              {SNS_ICONS.map((item) => (
                <Link
                  href={item.url}
                  key={item.url}
                  className={styles.about__sns}
                  target="_blank"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.about__content}>
            <p>
              フロントエンドエンジニア<br></br>
              LP制作からWordpressのテーマ実装、SPA開発など幅広く手掛けてきました
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

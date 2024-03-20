import styles from "./section.module.scss";
import clsx from "clsx";

const Section = ({
  children,
  title,
  sectionId,
  bg = "white",
}: Readonly<{
  children: React.ReactNode;
  title: string;
  sectionId: string;
  bg: "gray" | "white";
}>) => {
  return (
    <section
      className={clsx(styles.section, {
        "bg-gray-50": bg === "gray",
        "bg-white": bg === "white",
      })}
    >
      <h3 id={sectionId} className={styles.section__title}>
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;

import styles from "./section.module.scss";
import clsx from "clsx";

const Section = ({
  children,
  title,
  bg = "white",
}: Readonly<{
  children: React.ReactNode;
  title: string;
  bg: "gray" | "white";
}>) => {
  return (
    <section
      className={clsx(styles.section, {
        "bg-gray-50": bg === "gray",
        "bg-white": bg === "white",
      })}
    >
      <h3 className={styles.section__title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;

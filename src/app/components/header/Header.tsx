import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

type HeaderItem = {
  id: string;
  title: string;
};

const HEADER_ITEMS: HeaderItem[] = [
  { id: "about", title: "About" },
  { id: "skill", title: "Skill" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>
          <Link className={styles.header__logoLink} href={"#"}>
            <Image src={"./logo.svg"} width={64} height={64} alt="D.suke" />
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navItems}>
            {HEADER_ITEMS.map((headerItem: HeaderItem) => (
              <li key={headerItem.id} className={styles.header__navItem}>
                <Link href={headerItem.id}>{headerItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

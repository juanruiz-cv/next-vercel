import ActiveLink from "../../ActiveLink/activeLink.component";
import styles from "./navbar.module.css";
import menuItems from "../../../constans/menu";
const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ href, text }) => (
        <>
          <ActiveLink key={href} href={href} text={text} />
        </>
      ))}
    </nav>
  );
};

export default Navbar;

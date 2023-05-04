import { FC, ReactNode } from "react";
import styles from "./whiteLayout.module.css";

type Props = {
  children: ReactNode;
};

const WhiteLayout: FC<Props> = ({ children }) => {
  return (
    <div className={`${styles["container-white"]}`}>
      <h3>White-Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default WhiteLayout;

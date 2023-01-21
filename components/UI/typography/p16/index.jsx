import styles from "./index.module.css";
const P16 = ({ children, color }) => {
  return (
    <p className={styles["p"]} style={{ color: `var(${color})` }}>
      {children}
    </p>
  );
};

export default P16;

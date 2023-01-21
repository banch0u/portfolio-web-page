import styles from "./index.module.css";
const BigPara = ({ children, color }) => {
  return (
    <p className={styles["p"]} style={{ color: `var(${color})` }}>
      {children}
    </p>
  );
};

export default BigPara;

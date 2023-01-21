import styles from "./index.module.css";
const P18 = ({ children, color }) => {
  return (
    <p className={styles["p"]} style={{ color: `var(${color})` }}>
      {children}
    </p>
  );
};

export default P18;

import styles from "./index.module.css";
const BigParaMobile = ({ children, color }) => {
  return (
    <p className={styles["p"]} style={{ color: `var(${color})` }}>
      {children}
    </p>
  );
};

export default BigParaMobile;

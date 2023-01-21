import styles from "./index.module.css";
const H1 = ({ children, color }) => {
  return (
    <h1 className={styles["h1"]} style={{ color: `var(${color})` }}>
      {children}
    </h1>
  );
};

export default H1;

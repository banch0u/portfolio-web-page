import styles from "./index.module.css";
const H2 = ({ children, color }) => {
  return (
    <h2 className={styles["h2"]} style={{ color: `var(${color})` }}>
      {children}
    </h2>
  );
};

export default H2;

import styles from "./index.module.css";
const H3 = ({ children, color }) => {
  return (
    <h3 className={styles["h3"]} style={{ color: `var(${color})` }}>
      {children}
    </h3>
  );
};

export default H3;

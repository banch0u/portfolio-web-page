import styles from "./index.module.css";
const H4 = ({ children, color }) => {
  return (
    <h4 className={styles["h4"]} style={{ color: `var(${color})` }}>
      {children}
    </h4>
  );
};

export default H4;

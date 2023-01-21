import styles from "./index.module.css";
const H6 = ({ children, color }) => {
  return (
    <h6 className={styles["h6"]} style={{ color: `var(${color})` }}>
      {children}
    </h6>
  );
};

export default H6;

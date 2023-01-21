import styles from "./index.module.css";
const H5 = ({ children, color }) => {
  return (
    <h5 className={styles["h5"]} style={{ color: `var(${color})` }}>
      {children}
    </h5>
  );
};

export default H5;

import styles from "./index.module.css";
const Cta = ({ children, color }) => {
  return (
    <h1 className={styles["cta"]} style={{ color: `var(${color})` }}>
      {children}
    </h1>
  );
};

export default Cta;

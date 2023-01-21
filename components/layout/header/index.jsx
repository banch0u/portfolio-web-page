import Container from "@/components/UI/container";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/images/Xfolio.svg";
import styles from "./index.module.css";
const Header = () => {
  return (
    <Container>
      <nav className={styles["navigation"]}>
        <ul>
          <li>
            <Link href={""} className={styles["logo"]}>
              <Image src={Logo} alt={"Logo"} />
            </Link>
          </li>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Home</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

import Container from "@/components/UI/container";
import P16 from "@/components/UI/typography/p16";
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
            <Link href={""}>
              <P16 color={"--whiteSecondary"}>Home</P16>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <P16 color={"--whiteSecondary"}>Services</P16>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <P16 color={"--whiteSecondary"}>Projects</P16>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <P16 color={"--whiteSecondary"}>About</P16>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <P16 color={"--whiteSecondary"}>Blog</P16>
            </Link>
          </li>
        </ul>
        <Link href={""} className={styles["btn"]}>
          Let’s talk
        </Link>
      </nav>
    </Container>
  );
};

export default Header;

import Container from "../UI/container";
import H1 from "../UI/typography/h1";
import styles from "./index.module.css";
import pp from "../../assets/images/pp.png";
import Image from "next/image";
const Hero = () => {
  return (
    <Container>
      <div className={styles["container"]}>
        <div>
          <H1 color={"--whitePrimary"}>
            Hello, I'm Vusal, creative designer based in India.
          </H1>
        </div>
        <div>
          <Image src={pp} />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

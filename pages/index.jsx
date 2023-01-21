import Header from "@/components/layout/header";
import BigPara from "@/components/UI/typography/bigPara";
import BigParaMobile from "@/components/UI/typography/BigParaMobile";
import Cta from "@/components/UI/typography/cta";
import H1 from "@/components/UI/typography/h1";
import H2 from "@/components/UI/typography/h2";
import H3 from "@/components/UI/typography/h3";
import H4 from "@/components/UI/typography/h4";
import H5 from "@/components/UI/typography/h5";
import H6 from "@/components/UI/typography/h6";
import P16 from "@/components/UI/typography/p16";
import P18 from "@/components/UI/typography/p18";
import Wrapper from "@/components/UI/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Cta color={"--whitePrimary"}>Hello</Cta>
      <H1 color={"--whitePrimary"}>Hello</H1>
      <H2 color={"--whitePrimary"}>Hello</H2>
      <H3 color={"--whitePrimary"}>Hello</H3>
      <H4 color={"--whitePrimary"}>Hello</H4>
      <H5 color={"--whitePrimary"}>Hello</H5>
      <H6 color={"--whitePrimary"}>Hello</H6>
      <P18 color={"--whitePrimary"}>Hello</P18>
      <P16 color={"--whitePrimary"}>Hello</P16>
      <BigPara color={"--whitePrimary"}>Hello</BigPara>
      <BigParaMobile color={"--whitePrimary"}>Hello</BigParaMobile>
    </Wrapper>
  );
};

export default Home;

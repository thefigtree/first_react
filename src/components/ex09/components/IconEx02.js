import { faBars, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Wrap = styled.div`
  width: 380px;
  height: 700px;
  background-color: red;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: black;
  position: relative;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 20px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
`;
const Menu = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
`;
const Section = styled.div`
  width: 100%;
  height: 470px;
  background-color: black;
  position: relative;
`;
const Box = styled.div`
  width: 75%;
  height: 320px;
  background-color: coral;
  border-radius: 25%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const BoxBox = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: white; */
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InBox = styled.div`
  width: 80%;
  height: 5px;
  background-color: green;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
`;

const InInBox = styled.div`
  width: 80%;
  height: 50px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  position: relative;
`;

export const IConEx02 = () => {
  return (
    <div>
      <Wrap>
        <Header>
          <Logo>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                fontSize: "20px",
              }}
            ></FontAwesomeIcon>
          </Logo>
          <Menu>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "20px" }}
            ></FontAwesomeIcon>
          </Menu>
        </Header>
        <Section>
          <Box></Box>
          <BoxBox>
            <h2
              style={{
                textAlign: "center",
                fontSize: 30,
                color: "white",
                marginTop: 20,
              }}
            >
              Blue bird
            </h2>
            <h3
              style={{
                textAlign: "center",
                fontSize: 15,
                color: "white",
                marginTop: 10,
              }}
            >
              Pick Dreams
            </h3>
            <InBox></InBox>
            <InInBox></InInBox>
          </BoxBox>
        </Section>
        <Footer></Footer>
      </Wrap>
    </div>
  );
};

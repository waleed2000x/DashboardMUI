import styled from "styled-components";

import Cart from "../../assets/images/Cart.svg";
import ApartmentCubes from "../../assets/images/ApartmentCubes.svg";
import GraphBlack from "../../assets/images/GraphBlack.svg";
import EllipseBlue from "../../assets/images/EllipseBlue.png";
import EllipseBlack from "../../assets/images/EllipseBlack.png";
import EllipseWhite from "../../assets/images/EllipseWhite.png";
const Parent = styled.div`
  display: flex;
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
`;
const ShoppingCart = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 200px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 20px;
  img {
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: 15px;
    z-index: 1;
  }
`;
const Apartments = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 200px;
  background-color: #3699ff;
  border-radius: 15px;
  margin-top: 20px;
  img {
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: 15px;
  }
`;
const SalesStats = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 200px;
  background-color: #212121;
  border-radius: 15px;
  margin-top: 20px;
  img {
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: 15px;
  }
`;
const Icon = styled.div`
  position: relative;
  width: 80%;
  height: 50px;
  z-index: 2;
  img {
    position: absolute;
    left: 0px;
    color: #ffffff;
    font-size: 40px;
    border-radius: 0px;
  }
`;
const Title = styled.div`
  width: 80%;
  color: #464e5f;
  margin-top: 10px;
  z-index: 2;
`;
const Detail = styled.div`
  width: 80%;
  color: #ffffff;
  z-index: 2;
`;

export default function SectionB() {
  return (
    <Parent>
      <Card>
        <ShoppingCart>
          <img src={EllipseWhite} alt="blue circle" />
          <Icon>
            <img src={Cart} />
          </Icon>
          <Title>Shopping Cart</Title>
          <Detail style={{ color: "#b5b5c3" }}>
            Lands, Houses, Ranchos, Farms
          </Detail>
        </ShoppingCart>
        <Apartments>
          <img src={EllipseBlue} alt="blue circle" />
          <Icon>
            <img src={ApartmentCubes} />
          </Icon>
          <Title>Apartments</Title>
          <Detail>Flats, Shared Rooms, Duplex</Detail>
        </Apartments>
        <SalesStats>
          <img src={EllipseBlack} alt="blue circle" />
          <Icon>
            <img src={GraphBlack} />
          </Icon>
          <Title>Shopping Cart</Title>
          <Detail>Lands, Houses, Ranchos, Farms</Detail>
        </SalesStats>
      </Card>
    </Parent>
  );
}

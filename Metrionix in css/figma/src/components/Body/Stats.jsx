import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

import Cart from "../../assets/images/Cart.svg";
import WeeklyDail from "../../assets/images/WeeklyDail.svg";
import Puzzle from "../../assets/images/Puzzle.svg";
import Telegram from "../../assets/images/Telegram.svg";
import AlltimeSales from "../../assets/images/AlltimeSales.svg";
import AvgBid from "../../assets/images/AvgBid.svg";
import Commision from "../../assets/images/Commision.svg";
import BugReports from "../../assets/images/BugReports.svg";
import WeeklySales from "../../assets/images/WeeklySales.svg";
import AddUser from "../../assets/images/Add-user.svg";
import ItemOrders from "../../assets/images/ItemOrders.svg";
import Plurk from "../../assets/images/Plurk.svg";
import Circles from "../../assets/images/Circles.png";
import CircleTop from "../../assets/images/VectorTop.png";
import CircleRightsm from "../../assets/images/CircleRight-sm.png";
import CircleRightBiggest from "../../assets/images/CircleRightBiggest.png";
import CircleTopLeftCut from "../../assets/images/CircleTopRightCut.png";
import SalesStatBottom from "../../assets/images/SalesStatBottom.png";

const Parent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const SalesStat = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 20px;
  overflow-x: auto;
`;

const WeeklyStats = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 20px;
  overflow-x: auto;
`;

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 30px;
  margin-top: 30px;
  z-index: 3;
`;
const Dail = styled.div`
  z-index: 2;
`;
const TitleWeekly = styled.div`
  color: #464e5f;
  font-weight: bolder;
  font-size: 20px;
`;
const Sales = styled.div`
  color: #80808f;
  font-size: 15px;
`;

const StatBoxes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 40%;
  width: 100%;
  overflow-x: auto;
`;
const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  padding: 10px;
  flex-wrap: wrap;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 7px;
  font-size: larger;
  & > * {
    color: #3699ff;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;
const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubHead = styled.div``;
const HeadFor = styled.div`
  font-size: small;
  color: #b5b5c3;
`;
const Trending = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 20px;
  overflow-x: auto;
`;
const LowerLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  margin-top: 40px;
`;
const TrendItems = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  height: 80%;
  width: 90%;
`;
const TrendingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background-color: #f3f6f9;
  border-radius: 10px;
  img {
    width: 40px;
    height: 40px;
    background-color: #f3f6f9;
    border-radius: 10px;
  }
  & > * {
    color: #00c0f1;
    font-size: 30px;
  }
`;
const Details = styled.div``;
const Price = styled.div`
  height: max-content;
  width: max-content;
  padding: 5px;
  background-color: aqua;
  color: #80808f;
  background-color: #f3f6f9;
  border-radius: 6px;
  font-weight: 600;
  font-size: small;
`;
const BlueTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  background-color: #3699ff;
  height: 55%;
  border-radius: 15px;
  img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
const Heading = styled.div`
  margin-top: 25px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;
const Button = styled.div`
  margin-top: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 6px;
    color: #ffffff;
    background-color: #55a7fa;
    height: 35px;
    width: 80px;
    padding: 7px;
    border: none;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    & > * {
      font-size: 20px;
    }
  }
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
  width: 100%;
  z-index: 1;
  margin-bottom: 25px;
  /* overflow-x: auto; */
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #f3f6f9;
  width: 120px;
  height: 120px;
  margin: 20px;
  border-radius: 10px;
  p {
    width: 100%;
    margin-left: 10px;
    color: #80808f;
    font-size: 15px;
  }
  & > * {
    margin-left: 10px;
    color: #3699ff;
    font-weight: bolder;
    font-size: x-large;
  }
`;
export default function Stats() {
  return (
    <Parent>
      <SalesStat>
        <BlueTop>
          <Heading>Sales Stat</Heading>
          <Button>
            <button>
              Export
              <RiArrowDropDownLine />
            </button>
          </Button>
          <img src={SalesStatBottom} />
        </BlueTop>
        <Bottom>
          <Boxes>
            <img src={WeeklySales} />
            <p>Weekly Stats</p>
          </Boxes>
          <Boxes>
            <img src={AddUser} />
            <p>New Users</p>
          </Boxes>
          <Boxes>
            <img src={ItemOrders} />
            <p>Item Orders</p>
          </Boxes>
          <Boxes>
            <img src={BugReports} />
            <p>Item Orders</p>
          </Boxes>
        </Bottom>
      </SalesStat>
      {/*  ==================================== */}
      <WeeklyStats>
        {/* Top big one */}
        <img
          src={CircleTop}
          style={{ position: "absolute", right: "60px", top: "0px" }}
        />
        {/* Right smallest */}
        <img
          src={CircleRightsm}
          style={{ position: "absolute", right: "0px", top: "50px" }}
        />
        {/* Left Biggest */}
        <img
          src={Circles}
          style={{ position: "absolute", left: "0px", top: "80px" }}
        />
        {/* Right Biggest */}
        <img
          src={CircleRightBiggest}
          style={{ position: "absolute", right: "0px", top: "130px" }}
        />
        {/* Circle Top Right Cut */}
        <img
          src={CircleTopLeftCut}
          style={{ position: "absolute", left: "10px", top: "0px" }}
        />

        <Headings>
          <TitleWeekly>Weekly Sales Stats</TitleWeekly>
          <Sales>890,344 Sales</Sales>
        </Headings>
        <Dail>
          <img src={WeeklyDail} />
        </Dail>
        <StatBoxes>
          <StatBox>
            <Icon style={{ backgroundColor: "#E1F0FF" }}>
              <img src={Cart} />
            </Icon>
            <Prices>
              <SubHead>$2,034</SubHead>
              <HeadFor>Author Sales</HeadFor>
            </Prices>
          </StatBox>

          <StatBox>
            <Icon style={{ backgroundColor: "#FFE2E5" }}>
              <img src={Commision} />
            </Icon>
            <Prices>
              <SubHead>$2,034</SubHead>
              <HeadFor>Commision</HeadFor>
            </Prices>
          </StatBox>

          <StatBox>
            <Icon style={{ backgroundColor: "#D7F9EF" }}>
              <img src={AvgBid} />
            </Icon>
            <Prices>
              <SubHead>$2,034</SubHead>
              <HeadFor>Average Bid</HeadFor>
            </Prices>
          </StatBox>

          <StatBox>
            <Icon style={{ backgroundColor: "#EEE5FF" }}>
              <img src={AlltimeSales} />
            </Icon>
            <Prices>
              <SubHead>$2,034</SubHead>
              <HeadFor>Alltime Sales</HeadFor>
            </Prices>
          </StatBox>
        </StatBoxes>
      </WeeklyStats>
      <Trending>
        <Headings>
          <TitleWeekly>Trending</TitleWeekly>
        </Headings>
        <LowerLabels>
          <TrendItems>
            <TrendingIcon>
              <img src={Plurk} alt="Plurk" />
            </TrendingIcon>
            <Details>
              <SubHead>Top Authors</SubHead>
              <HeadFor>Most Successfull fellas</HeadFor>
            </Details>
            <Price>+82$</Price>
          </TrendItems>

          <TrendItems>
            <TrendingIcon>
              <img src={Telegram} />
            </TrendingIcon>
            <Details>
              <SubHead>Top Authors</SubHead>
              <HeadFor>Most Successfull Fellas</HeadFor>
            </Details>
            <Price>+280$</Price>
          </TrendItems>

          <TrendItems>
            <TrendingIcon>
              <img src={Puzzle} />
            </TrendingIcon>
            <Details>
              <SubHead>Top Authors</SubHead>
              <HeadFor>Most Successfull Fellas</HeadFor>
            </Details>
            <Price>+4500$</Price>
          </TrendItems>
        </LowerLabels>
      </Trending>
    </Parent>
  );
}

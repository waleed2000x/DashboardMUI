import styled from "styled-components";
import { FaUserPlus } from "react-icons/fa";
import CupnGreen from "../../assets/images/CupnGreen.png";
import Yellow from "../../assets/images/Yellow.png";
import NikeNBlue from "../../assets/images/NikeNBlue.png";
import Candy from "../../assets/images/Candy.png";
const Parent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`;
const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
`;
const Leaders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
`;
const Headings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30px;
`;
const Heading = styled.div`
  color: #464e5f;
  font-weight: bolder;
  font-size: 20px;
`;
const Details = styled.div`
  color: #80808f;
  font-size: 15px;
`;
const LeadingItem = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin-top: 25px;
  flex-wrap: wrap;
  overflow-x: auto;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 70px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const NameDetails = styled.div``;
const Name = styled.div`
  font-size: larger;
  font-weight: 800;
`;
const Detail = styled.div`
  color: #b5b5c3;
`;
const MadeBy = styled.div`
  display: flex;
  color: #b5b5c3;
  p {
    color: #8950fc;
    font-weight: 600;
  }
`;
const SoldItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Numbers = styled.div`
  font-weight: 700;
  font-size: medium;
`;
const Sale = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #b5b5c3;
  font-size: small;
`;
//========================================
const NewArrivals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
`;
const Top = styled.div`
  display: flex;
  margin-top: 30px;
  width: 90%;
`;
const MemberButton = styled.div`
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background-color: #1bc5bd;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-weight: 600;
    font-size: small;
    & > * {
      font-size: large;
      padding: 5px;
    }
  }
`;
const Table = styled.div``;

export default function SectionA() {
  return (
    <Parent>
      <Sections>
        <Leaders>
          <Top>
            <Headings>
              <Heading>Market Leaders</Heading>
            </Headings>
          </Top>
          <LeadingItem>
            <Image>
              <img src={CupnGreen} alt="cupcake" />
            </Image>
            <NameDetails>
              <Name>Cup & Green</Name>
              <Detail>Study the types</Detail>
              <MadeBy>
                By:<p>CoreAd</p>
              </MadeBy>
            </NameDetails>
            <SoldItems>
              <Numbers>24,900</Numbers>
              <Sale>Sales</Sale>
            </SoldItems>
          </LeadingItem>
          <LeadingItem>
            <Image>
              <img src={Yellow} alt="cupcake" />
            </Image>
            <NameDetails>
              <Name>Yellow</Name>
              <Detail>Study the types</Detail>
              <MadeBy>
                By:<p>KeenThemes</p>
              </MadeBy>
            </NameDetails>
            <SoldItems>
              <Numbers>70,380</Numbers>
              <Sale>Sales</Sale>
            </SoldItems>
          </LeadingItem>
          <LeadingItem>
            <Image>
              <img src={NikeNBlue} alt="cupcake" />
            </Image>
            <NameDetails>
              <Name>Nike & Blue</Name>
              <Detail>Study the types</Detail>
              <MadeBy>
                By:<p>Invision Inc.</p>
              </MadeBy>
            </NameDetails>
            <SoldItems>
              <Numbers>7,200</Numbers>
              <Sale>Sales</Sale>
            </SoldItems>
          </LeadingItem>
          <LeadingItem>
            <Image>
              <img src={Candy} alt="cupcake" />
            </Image>
            <NameDetails>
              <Name>Red Boots</Name>
              <Detail>Study the types</Detail>
              <MadeBy>
                By:<p>Figma Studio</p>
              </MadeBy>
            </NameDetails>
            <SoldItems>
              <Numbers>7,200</Numbers>
              <Sale>Sales</Sale>
            </SoldItems>
          </LeadingItem>
        </Leaders>

        <NewArrivals>
          <Top>
            <Headings>
              <Heading>New Arrivals</Heading>
              <Details>More than 400+ new members</Details>
            </Headings>
            <MemberButton>
              <button>
                <FaUserPlus />
                New Member
              </button>
            </MemberButton>
          </Top>
          <Table></Table>
        </NewArrivals>
      </Sections>
    </Parent>
  );
}

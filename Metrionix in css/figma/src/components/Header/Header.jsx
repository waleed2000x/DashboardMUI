import HeaderTop from "./HeaderTop";
import SubHeader from "./SubHeader";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  width: 100%;
  height: 0.3px;
  background-color: lightgray;
  margin-left: 3px;
`;
export default function Header() {
  return (
    <Parent>
      <HeaderTop />
      <Line />
      <SubHeader />
    </Parent>
  );
}

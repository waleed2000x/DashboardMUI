import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import Logs from "../../assets/images/Logs.svg";
import System from "../../assets/images/System.svg";
import Console from "../../assets/images/Console.svg";
import Config from "../../assets/images/Config.svg";
import Report from "../../assets/images/Report.svg";
import Actions from "../../assets/images/Actions.svg";
import Logo from "../../assets/images/Logo.png";
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f1e2e;
  width: 140px;
  min-height: 120vh;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageLogo = styled.div`
  width: 100%;
  height: 100px;
  background-color: #181824;
  margin-bottom: 15px;
  color: white;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 5px;
  margin: 15px 0px 15px 0px;
  font-size: 25px;
  color: #3a3a5d;
  &:hover {
    background-color: #181824;
    color: #3699ff;
  }
  p {
    font-size: 12px;
    color: white;
  }
`;

export default function Sidebar() {
  return (
    <Parent>
      <Main>
        <PageLogo>
          <img src={Logo} />
        </PageLogo>
        <Icons>
          <Icon>
            <FiSettings />
            <p>Export</p>
          </Icon>
          <Icon>
            <img src={Actions} />
            <p>Actions</p>
          </Icon>
          <Icon>
            <img src={Report} />
            <p>Report</p>
          </Icon>
          <Icon>
            <img src={Config} />
            <p>Config</p>
          </Icon>
          <Icon>
            <img src={Console} />
            <p>Console</p>
          </Icon>
          <Icon>
            <img src={System} />
            <p>System</p>
          </Icon>
          <Icon>
            <img src={Logs} />
            <p>Logs</p>
          </Icon>
        </Icons>
      </Main>
    </Parent>
  );
}

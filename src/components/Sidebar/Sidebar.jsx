import styled from "styled-components";
import Logo from "../../images/Logo.svg";
// import Action from "../../images/Action.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import LayersIcon from "@mui/icons-material/Layers";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MonitorIcon from "@mui/icons-material/Monitor";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Typography } from "@mui/material";
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  background-color: #1f1e2e;
`;
const LogoMain = styled.div`
  width: 100%;
`;
const SideItems = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const SideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  padding: 10px 0px 10px 0px;
  margin-top: 15px;
  border-radius: 7px;

  & > * {
    color: #3a3a5d;
  }
  &:hover {
    background-color: #181824;
    & > * {
      color: #3699ff;
    }
  }
`;
const Icon = styled.div``;
export default function Sidebar() {
  return (
    <Parent>
      <LogoMain>
        <img src={Logo} alt="Logo" />
      </LogoMain>
      <SideItems>
        <SideItem>
          <Icon>
            <SettingsIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Export</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <LayersIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Action</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <AssessmentIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Reports</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <WaterDropIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Config</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <MonitorIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Console</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <GppGoodIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">System</Typography>
        </SideItem>
        <SideItem>
          <Icon>
            <DynamicFeedIcon fontSize="large" />
          </Icon>
          <Typography variant="body2">Console</Typography>
        </SideItem>
      </SideItems>
    </Parent>
  );
}

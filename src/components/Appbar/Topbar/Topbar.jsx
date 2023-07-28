import { Button, IconButton } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CountryFlag from "./CountryFlag";
import { useState } from "react";

const Parent = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
`;

const ListItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  button {
    color: #6c7293;
  }
  button:hover {
    background-color: #f5f5f9;
    color: #3699ff;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  height: 80%;

  button {
    width: 45px;
    height: 45px;
    border-radius: 6px;
    & > * {
      color: #6c7293;
    }

    &:hover > * {
      color: #3699ff;
    }
  }
`;

export default function Topbar() {
  const named = "Alierds";
  const nameRender = named.slice(0, 4) + "..";
  const a = named.split("");
  const firstChar = a[0];
  const [name, setName] = useState(firstChar);
  const nameButton = () => {
    name === nameRender ? setName(firstChar) : setName(nameRender);
  };
  return (
    <Parent>
      <ListItems>
        <Button variant="text">Dashboard</Button>
        <Button variant="text">Components</Button>
        <Button variant="text">Apps</Button>
        <Button variant="text">Crud</Button>
        <Button variant="text">Pages</Button>
      </ListItems>
      <Icons>
        <IconButton variant="icon" size="small">
          <SearchIcon />
        </IconButton>
        <IconButton variant="icon">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton variant="icon">
          <SettingsIcon />
        </IconButton>
        <IconButton variant="icon">
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton variant="icon">
          <ContentCopyOutlinedIcon style={{ transform: "rotate(180deg)" }} />
        </IconButton>
        <IconButton variant="icon">
          <CountryFlag />
        </IconButton>
        <IconButton
          variant="text"
          onClick={nameButton}
          style={{ backgroundColor: "#E1F0FF", fontSize: "14px" }}
          size="small"
        >
          {name}
        </IconButton>
      </Icons>
    </Parent>
  );
}

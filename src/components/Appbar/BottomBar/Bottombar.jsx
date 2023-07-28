import { Button, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
const Parent = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-between;
  border-top: 0.5px solid #959cb6;
`;
const LeftItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  height: 100%;
  width: 30%;
  p {
    color: #959cb6;
  }
`;
const ActiveItem = styled.div``;
const RightItems = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 30%;
  justify-content: space-evenly;
  button {
    color: #959cb6;
    &:hover {
      background-color: #f5f5f9;
      color: #000000;
    }
  }
`;

export default function Bottombar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let date = d.getDate();
  let month = months[d.getMonth()];
  return (
    <Parent>
      <LeftItems>
        <ActiveItem>
          <Typography variant="subtitle1">Dashboard</Typography>
        </ActiveItem>
        <Typography variant="body1" fontSize="15px">
          #XRS-45670
        </Typography>
        <Button variant="text" style={{ backgroundColor: "#E1F0FF" }}>
          Add New
        </Button>
      </LeftItems>
      <RightItems>
        <Button variant="text" size="medium">
          Today
        </Button>
        <Button variant="text" size="medium">
          Month
        </Button>
        <Button variant="text" size="medium">
          Year
        </Button>
        <Button variant="text" size="medium" disabled>
          {month + " " + date}
        </Button>
        <IconButton style={{ borderRadius: "6px", color: "#3699FF" }}>
          <NoteAddOutlinedIcon />
        </IconButton>
      </RightItems>
    </Parent>
  );
}

import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 90vw;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  width: 30vw;
`;
const MainNav = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
`;
const Buttons = styled.div`
  display: flex;
  list-style: none;
  width: 70%;
  justify-content: space-around;
  button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    font-size: 13px;
    text-align: center;
    color: #3699ff;
    background-color: #e1f0ff;
    cursor: pointer;
  }
`;
const Button = styled.div`
  padding: 7px;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  color: #959cb6;
  height: 20px;
  cursor: pointer;
`;
//=======================================
const Timeline = styled.div`
  display: flex;
  list-style: none;
  width: 40%;
  align-items: center;
  justify-content: space-around;
  button {
    padding: 7px;
    border-radius: 5px;
    border: none;
    font-size: 12px;
    text-align: center;
    color: #3699ff;
    background-color: #7c91fd1a;
    cursor: pointer;
  }
`;
export default function SubHeader() {
  const currentDate = new Date();
  const monthNames = [
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

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  return (
    <Parent>
      <List>
        <MainNav>
          <Button>Dashboard</Button>
        </MainNav>
        <Buttons>
          <Button>#XRS-45670</Button>
          <button>Add New</button>
        </Buttons>
      </List>
      <Timeline>
        <Button>Today</Button>
        <Button>Month</Button>
        <Button>Year</Button>
        <button>
          Today: {`${currentMonth} ${currentDay}`} <FaCalendarAlt />
        </button>
        <Button>
          <FiFilePlus style={{ fontSize: "20px", color: "#3699FF" }} />
        </Button>
      </Timeline>
    </Parent>
  );
}

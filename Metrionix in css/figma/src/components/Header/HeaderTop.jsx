import styled from "styled-components";
import { FaRegClone } from "react-icons/fa";
import { FiSettings, FiBell, FiShoppingCart, FiSearch } from "react-icons/fi";
import USA from "../../assets/images/Add-user.svg";
const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  width: 90vw;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  width: 40vw;
  overflow-y: auto;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-around;
  }
  li {
    padding: 7px;
    border-radius: 5px;
    font-size: 15px;
    text-align: center;
    color: #959cb6;
    &:hover {
      background-color: #f5f5f9;
      color: #3699ff;
      cursor: pointer;
    }
  }
`;
const AccessIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #959cb6;
  & :hover {
    cursor: pointer;
  }
`;
const Flag = styled.div`
  height: 25px;
  img {
    height: 13px;
    width: 17px;
  }
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #e1f0ff;
  color: #3699ff;
  border-radius: 3px;
  cursor: pointer;
`;

export default function HeaderTop() {
  return (
    <Parent>
      <Navigation>
        <ul>
          <li>Dashboard</li>
          <li>Components</li>
          <li>App</li>
          <li>Crud</li>
          <li>Pages</li>
        </ul>
      </Navigation>
      <AccessIcons>
        <Icon>
          <FiSearch />
        </Icon>
        <Icon>
          <FiSettings />
        </Icon>
        <Icon>
          <FiBell />
        </Icon>
        <Icon>
          <FiShoppingCart />
        </Icon>
        <Icon>
          <FaRegClone />
        </Icon>
        <Icon>
          <Flag>
            <img src={USA} alt="flag" />
          </Flag>
        </Icon>
        <User>S</User>
      </AccessIcons>
    </Parent>
  );
}

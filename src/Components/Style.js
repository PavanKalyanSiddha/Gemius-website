import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  weight: 500px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 40px;
  padding: 10px 20px;
`;
export const ContainerComponent = styled.div`
  padding: 5px 20%;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  font-size: 40px;
  align-items: center;
  img {
    vertical-align: middle;
    height: 300px;
    weight: 300px;
  }
  span {
    vertical-align: middle;
    padding: 0px 20px;
  }
`;
export const SecondaryContainer = styled.div`
  dispaly: flex;
  font-weight: 500;
  background-color: yellow;
  text-align: center;
  padding: 40px;
  color: #414042;
  margin: 50px 0px;
  font-size: 18px;
`;
export const ButtonContainer = styled.button`
  background-color: #414042;
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  margin: 30px;
  :hover {
    background-color: gray;
  }
`;

export const clickSpan = css`
  span {
    background-color: black;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    transition: all linear 0.3s;
    :nth-child(1) {
      top: 0;
    }
    :nth-child(2) {
      top: 43%;
    }
    :nth-child(3) {
      bottom: 0px;
    }
  }
`;
export const unClickedSpan = css`
  span {
    background-color: black;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    transition: all linear 0.3s;
    :nth-child(1) {
      top: 0px;
      transform: rotate(-45deg) translate(-10px, 7px);
    }
    :nth-child(2) {
      top: 43%;
      transform: rotate(45deg) translate(0px, 2px);
    }
    :nth-child(3) {
      display: none;
    }
  }
`;
export const HeaderListIcon = styled.div`
  @media (max-width: 800px) {
    height: 25px;
    cursor: pointer;
    position: relative;
    width: 30px;
    top: 20px;
    transition: all linear 0.2s;
    ${(props) => (props.click ? clickSpan : unClickedSpan)}
  }
`;

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 30px 20px;
  grid-gap: 20px;
  text-align: center;
  b {
    cursor: pointer;
    :hover {
      border-bottom: 5px solid black;
    }
  }
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  text-align: center;
  padding: 20px 20%;
`;

export const StoriesGridItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 2px;
  img {
    height: 100px;
    height: 100px;
  }

  div {
    border-bottom: 5px solid #414042;
  }
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px 10%;
`;

export const MediaGridItem = styled.div`
  box-shadow: 1px 1px 2px 2px gray;
  border-radius: 5px;
  padding: 60px 30px;
  font-weight: 500;
  text-align: center;
  :hover {
    box-shadow: none;
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 100px;
  padding: 30px 100px;
  background-color: black;
  text-align: left;
  color: white;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const FooterGridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

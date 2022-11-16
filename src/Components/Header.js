import React, { useState } from "react";
import history from "./history";
import {
  HeaderContainer,
  HeaderListIcon,
  ComponentContainer,
  Gridcontainer,
} from "./Style";

const Header = () => {
  const [clickMenu, setClickMenu] = useState(true);

  const handleMenuIconClick = () => {
    setClickMenu(!clickMenu);
  };
  return (
    <ComponentContainer>
      <HeaderContainer>
        <div
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        >
          Gemius
        </div>
        <HeaderListIcon onClick={handleMenuIconClick} click={clickMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HeaderListIcon>
      </HeaderContainer>
      <Gridcontainer>
        <b
          onClick={() => {
            history.push("/philosopy");
            window.location.reload();
          }}
        >
          PHILOSOPY
        </b>
        <b
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        >
          TEAM
        </b>
        <b
          onClick={() => {
            history.push("/work");
            window.location.reload();
          }}
        >
          WORK
        </b>
        <b
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        >
          PRODUCTIONS{" "}
        </b>
        <b
          onClick={() => {
            history.push("/careers");
            window.location.reload();
          }}
        >
          CAREERS
        </b>
        <b
          onClick={() => {
            history.push("/contactus");
            window.location.reload();
          }}
        >
          CONTACT US
        </b>
      </Gridcontainer>
    </ComponentContainer>
  );
};

export default Header;

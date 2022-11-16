import React from "react";
import { FooterContainer, FooterGridItem, StoriesGridItem } from "./Style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGridItem>
        <h2>REACH US</h2>
        <h1>GEMIUS</h1>
        GEMIUS INDIA
        <br /> SURAT:
        <br /> M/97,
        <br /> SOMESHWARA ENCLAVE, VESU, SURAT 395007 MUMBAI: PLOT NO.33, HMG
        HOUSE, ANDHERI EAST, MUMBAI 400093 TEL.: +91 823 888 4900 hi@gemius.co
        www.gemius.co
      </FooterGridItem>
      <FooterGridItem>
        {" "}
        <h2>ADDITIONAL LINKS</h2>- Philosophy <br />
        - Team <br />
        - Work <br /> 
        - Clients <br />
        - Blog <br />
        - Contact Us<br />
      </FooterGridItem>
      <FooterGridItem>
        {" "}
        <h2>FACEBOOK</h2>
        {/* <StoriesGridItem>
            <img src="https://img.icons8.com/color/2x/facebook-circled.png" alt="" />
          </StoriesGridItem> */}
      </FooterGridItem>
      <FooterGridItem>
        {" "}
        <h2>INSTAGRAM</h2>{" "}
        {/* <StoriesGridItem>
            <img src="https://img.icons8.com/color/2x/instagram-new.png" alt="" />
          </StoriesGridItem> */}
      </FooterGridItem>
    </FooterContainer>
  );
};

export default Footer;

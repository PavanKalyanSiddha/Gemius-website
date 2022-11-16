import React, { useEffect, useState } from "react";
import { Details } from "./Details";
import MainLayout from "./mainLayout";
import {
  ContainerComponent,
  SecondaryContainer,
  ButtonContainer,
  StoriesGrid,
  StoriesGridItem,
  MediaGrid,
  MediaGridItem,
} from "./Style";

const Container = () => {
  const [dataIdx, setDataidx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataidx(dataIdx + 1 > Details.length - 1 ? 0 : dataIdx + 1);
    }, 3000);

    // clearInterval(interval)
  }, [dataIdx]);
  return (
    <MainLayout>
      <ContainerComponent>
        <img src={Details[dataIdx].image} alt="" />

        <span>{Details[dataIdx].discription}</span>
        {/* <div>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/man-drinking-coffee.jpg"
            alt="image"
          />

          <span>
            Kadak <br></br> Campaign For The <br></br> Kadak Tea Of Inida!
          </span>
        </div> */}
        {/* <div>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/man-drinking-coffee.jpg"
            alt="image"
          />

          <span>
            Kadak <br></br> Campaign For The <br></br> Kadak Tea Of Inida!
          </span>
        </div> */}
      </ContainerComponent>

      <SecondaryContainer>
        <div>
          We are a creative agency dedicated to delivering optimised marketing{" "}
          <br></br> services as per the need of individual Clients. Having a
          deep-seated <br></br> background in design & content, we at Gemius
          focus on weaving stories for <br></br> our Clients, which are
          supplemented with impeccable art, for them <br></br> to set a mark on
          their industry.
        </div>
        <ButtonContainer> OUR PHILOSOPY</ButtonContainer>
      </SecondaryContainer>
      <SecondaryContainer style={{ backgroundColor: "transparent" }}>
        <h1>WE TELL STORIES.</h1>
        <StoriesGrid>
          <StoriesGridItem>
            <img src="https://img.icons8.com/ios/512/light-on.png" alt="" />

            <div> BRAND DEVELOPMENT </div>
          </StoriesGridItem>
          <StoriesGridItem>
            <img src="https://img.icons8.com/ios/512/settings.png" alt="" />
            <div> BRAND STRATEGY </div>
          </StoriesGridItem>
          <StoriesGridItem>
            <img src="https://img.icons8.com/ios/512/telegram.png" alt="" />

            <div> BRANDED CONTENT </div>
          </StoriesGridItem>
          <StoriesGridItem>
            <img src="https://img.icons8.com/ios-filled/512/link.png" alt="" />
            <div> DIGITAL GROWTH </div>
          </StoriesGridItem>
          <StoriesGridItem>
            <img
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/512/external-record-multimedia-kiranshastry-lineal-kiranshastry.png"
              alt=""
            />
            <div>
              {" "}
              MEDIA & <br></br> PR{" "}
            </div>
          </StoriesGridItem>
        </StoriesGrid>
        <ButtonContainer> OUR WORK </ButtonContainer>
      </SecondaryContainer>

      <SecondaryContainer style={{ backgroundColor: "transparent" }}>
        <h1>MEDIA FEATURES</h1>
        <h3 style={{ fontWeight: 300 }}>
          Captivating audiences through an art of storytelling
        </h3>
      </SecondaryContainer>
      <MediaGrid>
        <MediaGridItem>Agency Reporter</MediaGridItem>
        <MediaGridItem>Adgully</MediaGridItem>
        <MediaGridItem>Brand Equity</MediaGridItem>
        <MediaGridItem>Media News 4 U</MediaGridItem>
        <MediaGridItem>Social Samosa</MediaGridItem>
        <MediaGridItem>Exchange 4 Media</MediaGridItem>
      </MediaGrid>
    </MainLayout>
  );
};

export default Container;

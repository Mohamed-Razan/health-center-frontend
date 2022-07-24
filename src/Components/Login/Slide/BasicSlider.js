import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import pic1 from "../../../Assets/pic1.jpg"
import pic2 from "../../../Assets/pic2.jpg"
import pic3 from "../../../Assets/pic3.jpg"
import pic4 from "../../../Assets/pic4.jpg"
import pic5 from "../../../Assets/pic5.jpg"

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const BasicSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "65vh"
      }}
    >
      <OverlayContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 10,
            pointerEvents: "none",
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          }}
        >
          <h1
            style={{
              margin: 0,
              padding: 0,
              textTransform: "uppercase",
              width: "90%",
              textAlign: "center",
              fontSize: "3.5rem",
              color: "white",
            }}
          >Welcome to Health Center</h1>
        </div>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: pic1,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: pic2,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: pic3,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: pic4,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: pic5,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default BasicSlider;

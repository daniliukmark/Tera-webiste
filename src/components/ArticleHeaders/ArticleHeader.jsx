import { useEffect, useState } from "react";
import bgHandImage from "src/assets/promo_campaign.png";
import bgWatermarkImage from "src/assets/logoWatermark.webp";
const image = new Image();
image.src = bgWatermarkImage;
function ArticleHeader() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let WatermarkBgList;
  WatermarkBgList = Array.from({ length: 30 }, (_, index) => {
    let animationLength = Math.floor(Math.random() * (51 - 43 + 1) + 43);
    const heightsList = new Map();
    const widthsList = new Map();
    widthsList.set("small", (image.naturalWidth / image.naturalHeight) * 80);
    widthsList.set("medium", (image.naturalWidth / image.naturalHeight) * 120);
    widthsList.set("large", (image.naturalWidth / image.naturalHeight) * 80);
    heightsList.set("small", 80);
    heightsList.set("medium", 120);
    heightsList.set("large", 120);

    return (
      <>
        <style>
          {`

@keyframes x-slide-motion {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: calc(${
      windowWidth < 800
        ? (image.naturalWidth / image.naturalHeight) * 80
        : windowWidth < 1400
        ? (image.naturalWidth / image.naturalHeight) * 120
        : (image.naturalWidth / image.naturalHeight) * 120
    } * 60px) 0px;
  }
}

      `}
        </style>
        <div
          key={index}
          style={{
            zIndex: 0,
            width: "120%",
            opacity: 0.05,
            background: `url("${bgWatermarkImage}")`,
            marginBottom: "10px", // Add margin between elements
            animation: `x-slide-motion ${animationLength}s infinite ease-in-out`,
            ...(windowWidth < 800 && {
              height: `${heightsList.get("small")}px`,
              backgroundSize: `auto ${heightsList.get("small")}px`,
            }),
            ...(windowWidth > 800 &&
              windowWidth < 1400 && {
                height: `${heightsList.get("medium")}px`,
                backgroundSize: `auto ${heightsList.get("medium")}px`,
              }),
            ...(windowWidth > 1400 && {
              height: `${heightsList.get("large")}px`,
              backgroundSize: `auto ${heightsList.get("large")}px`,
            }),
          }}
        />
      </>
    );
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          ...(windowWidth < 800 && { height: "350px" }),
          ...(windowWidth > 800 && windowWidth < 1400 && { height: "500px" }),
          ...(windowWidth > 1400 && { height: "800px" }),
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            ...(windowWidth > 1400 && { zIndex: "-6" }),

            position: "absolute",
            backgroundColor: "var(--green)",
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            right: "0px",
            bottom: "0px",
            maxWidth: "1300px",
            width: "100%",
            height: "100%",
            background: `no-repeat url("${bgHandImage}")`,
            backgroundPosition: "100% 100%",
            ...(windowWidth < 800 && { right: "-20%", width: "200%" }),
            ...(windowWidth < 600 && { right: "-40%", width: "200%" }),
            ...(windowWidth < 400 && { right: "-60%", width: "200%" }),

            ...(windowWidth < 800 && {
              backgroundSize: "450px",
            }),
            ...(windowWidth > 800 &&
              windowWidth < 1400 && {
                backgroundSize: "600px",
              }),
            ...(windowWidth > 1400 && {
              backgroundSize: "1000px",
            }),
          }}
        />

        <div
          style={{
            ...(windowWidth > 1400 && { zIndex: "-6" }),

            position: "absolute",
            top: "-40px",
            width: "100%",
            height: "100%",
          }}
        >
          {WatermarkBgList}
        </div>

        <div
          style={{
            zIndex: "2",
            width: "100%",
            display: "flex",
            justifyContent: "start",

            ...(windowWidth < 800 && { maxWidth: "500px" }),
            ...(windowWidth > 800 &&
              windowWidth < 1400 && { maxWidth: "800px" }),
            ...(windowWidth > 1400 && { maxWidth: "1300px" }),
          }}
        >
          <h1
            style={{
              color: "white",

              zIndex: 2,
              width: "100%",
              fontFamily: " Cabin, sans-serif",
              ...(windowWidth < 400 && {
                maxWidth: "600px",
                padding: "0px 10px",
                fontSize: "30px",
              }),
              ...(windowWidth < 800 &&
                windowWidth > 400 && { maxWidth: "600px", fontSize: "40px" }),
              ...(windowWidth > 800 &&
                windowWidth < 1400 && { maxWidth: "700px", fontSize: "60px" }),
              ...(windowWidth > 1400 && {
                maxWidth: "1000px",
                fontSize: "80px",
              }),
            }}
          >
            <i>
              Prisidėk Prie Komandos, <br /> Gauk Prizų <br />
              Ir Viskas Tai Nemokamai!
            </i>
          </h1>
        </div>
      </div>
    </>
  );
}

export default ArticleHeader;

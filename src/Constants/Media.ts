import { generateMedia } from "styled-media-query";

export const MediaSize = generateMedia({
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  iPad: "768px",
  toshiba: "800px",
  laptopS: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktop: "2560px",
  changeTest: "850px",
  sapeetTablet: "992px" // 62em
});

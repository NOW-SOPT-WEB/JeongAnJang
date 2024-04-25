import { css } from "styled-components";
import mixin from "./mixin";

const colors = {
  white: "#FFFFFF",
  black: "#222222",
  gray: "#F8F8F8",
  pink: "#FFE9F1",
  red: "#FFEDED",
  blue: "#EDF1FF",
};

const fonts = {
  title: css`
    font-family: "SUIT";
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
  heading: css`
    font-family: "SUIT";
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
  body: css`
    font-family: "SUIT";
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
};

const theme = { mixin, colors, fonts };

export default theme;

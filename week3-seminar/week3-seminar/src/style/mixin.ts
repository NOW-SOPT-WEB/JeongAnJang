import { css } from "styled-components";

interface MixinProps {
  direction: string;
  align: string;
  justify: string;
}

const mixin = {
  flexCenter: ({ direction = "column" }: MixinProps) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: center;
    justify-content: center;
  `,
};

export default mixin;

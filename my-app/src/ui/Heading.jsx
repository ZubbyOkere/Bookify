import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 10px;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 30px;
      font-weight: 400;
    `}
    line-height: 40px;
`;

export default Heading;

import styled from "styled-components";

interface SubTitleProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

const CommonSubTitle = (props: SubTitleProps) => {
  const { children, customStyle } = props;
  return <SubTitle style={customStyle}>{children}</SubTitle>;
};

export default CommonSubTitle;

const SubTitle = styled.h2`
  font-size: 2rem;
`;

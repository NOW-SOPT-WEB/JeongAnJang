import styled from "styled-components";

interface SubTitleProps {
  children: React.ReactNode;
}

const CommonSubTitle = ({ children }: SubTitleProps) => {
  return <SubTitle>{children}</SubTitle>;
};

export default CommonSubTitle;

const SubTitle = styled.h2`
  font-size: 2rem;
`;

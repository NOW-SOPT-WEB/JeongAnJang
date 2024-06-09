import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Wrapper>
      <CommonButton type="button" {...rest}>
        {children}
      </CommonButton>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.inlineFlexBox({ align: "center", justify: "center" })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 2rem;
  border-radius: 9.9rem;

  background-color: pink;
`;

const CommonButton = styled.button`
  border: none;
  color: black;
  background-color: pink;
`;

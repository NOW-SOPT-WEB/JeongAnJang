import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: InputProps) => {
  const { onChange } = props;
  return (
    <>
      <CommonInput type="text" onChange={onChange} />
    </>
  );
};

export default Input;

export const CommonInput = styled.input`
  ${({ theme }) =>
    theme.mixin.flexBox({ align: "center", justify: "space-between" })};
  height: 3.5rem;
  outline: none;
  padding: 0;
  color: black;

  input::placeholder {
    color: gray;
  }
`;

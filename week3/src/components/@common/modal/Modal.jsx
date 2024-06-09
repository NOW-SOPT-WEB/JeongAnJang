import * as S from "./Modal.style.js";

const Modal = ({ children }) => {
  return <>{children}</>;
};

const Content = ({ children }) => {
  return <S.Content>{children}</S.Content>;
};

const Close = ({ children, onClick }) => {
  return <S.Close onClick={onClick}>{children}</S.Close>;
};

const BackDrop = ({ children }) => {
  return <S.BackDrop>{children}</S.BackDrop>;
};

Modal.Content = Content;
Modal.Close = Close;
Modal.BackDrop = BackDrop;

export default Modal;

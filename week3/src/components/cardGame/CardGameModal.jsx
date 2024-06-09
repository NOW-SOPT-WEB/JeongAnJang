import Modal from "../@common/modal/Modal";

const CardGameModal = (props) => {
  const { resetGame } = props;

  return (
    <Modal>
      <Modal.BackDrop />
      <Modal.Content>
        <Modal.Close onClick={resetGame}>x</Modal.Close>
        <h1>게임 끝!!! </h1>
      </Modal.Content>
    </Modal>
  );
};

export default CardGameModal;

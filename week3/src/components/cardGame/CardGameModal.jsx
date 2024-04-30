import Modal from "../@common/modal/Modal";

const CardGameModal = () => {
  return (
    <Modal>
      <Modal.BackDrop />
      <Modal.Content>
        <Modal.Close>x</Modal.Close>
      </Modal.Content>
    </Modal>
  );
};

export default CardGameModal;

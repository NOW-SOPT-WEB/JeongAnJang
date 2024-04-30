import styled from "styled-components";
import cover from "../../assets/cover.png";
const Card = (props) => {
  const { card, handleChoice, flipped } = props;

  const handleClick = () => {
    if (!flipped) {
      handleChoice(card);
    }
  };

  return (
    <CardContainer className="card">
      <div>
        <FrontImage src={card.src} alt="card front" $flipped={flipped} />
        <BackImage
          src={cover}
          onClick={handleClick}
          alt="card back"
          $flipped={flipped}
        />
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.article`
  position: relative;
`;

const CardImage = styled.img`
  width: 60%;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
`;

const FrontImage = styled(CardImage)`
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
  cursor: pointer;

  ${({ $flipped }) =>
    $flipped &&
    `
    transform: rotateX(0deg);
    transition-delay: 0.2s;
  `}
`;

const BackImage = styled(CardImage)`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
  cursor: pointer;

  ${({ $flipped }) =>
    $flipped &&
    `
    transform: rotateY(90deg); 
    transition-delay: 0s;
  `}
`;

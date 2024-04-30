import cover from "../../assets/cover.png";
import * as S from "./Card.style.js";

const Card = (props) => {
  const { card, handleChoice, flipped } = props;

  const handleClick = () => {
    if (!flipped) {
      handleChoice(card);
    }
  };

  return (
    <S.CardContainer className="card">
      <div>
        <S.FrontImage src={card.src} alt="card front" $flipped={flipped} />
        <S.BackImage
          src={cover}
          onClick={handleClick}
          alt="card back"
          $flipped={flipped}
        />
      </div>
    </S.CardContainer>
  );
};

export default Card;

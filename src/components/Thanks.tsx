import { ReactElement } from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  }
}

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  verySatisfied: ReactElement;

}

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  verySatisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco</h2>
      <p>Sua avaliação é muito importante para nossa empresa. Finaliza sua avaliação e ganhe um cupom de 10% de desconto na sua próxima compra.</p>
      <p>Para concluir sua avaliação clique no botão de "Enviar" abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>
        <p className="review-data">
          <span>Sua satisfação com a compra:</span>
          {emojiData[data.review as keyof typeof emojiData]}
        </p>
        <p className="review-data">
          <span>Seu comentário:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks
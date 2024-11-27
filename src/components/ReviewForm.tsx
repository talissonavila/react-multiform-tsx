import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

type ReviewProps = {
  data: {
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const ReviewForm = ({ data, updateFieldHandler }: ReviewProps) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(event) => updateFieldHandler("review", event.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(event) => updateFieldHandler("review", event.target.value)}
          />
          <BsEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(event) => updateFieldHandler("review", event.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onChange={(event) => updateFieldHandler("review", event.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
        name="comment" 
        id="comment"
        placeholder="Conte como foi sua experiência comprando conosco"
        required
        value={data.comment || ""}
        onChange={(event) => updateFieldHandler("comment", event.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm;

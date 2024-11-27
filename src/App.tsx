import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import Steps from "./components/Steps";

import './App.css';

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((previousState) => {
      return { ...previousState, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data}/>
  ]

  const { currentComponent, currentStep, changeStep, isLastStep } = useForm(formComponents);


  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra. Utilize o formulário abaixo para avalia ela.</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button type="submit" >
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button" >
              <span>Enviar</span>
              <FiSend />
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

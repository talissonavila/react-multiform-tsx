import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import Steps from "./components/Steps";

import './App.css'

function App() {
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]

  const { currentComponent, currentStep, changeStep } = useForm(formComponents);


  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra. Utilize o formulário abaixo para avalia ela.</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit" >
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

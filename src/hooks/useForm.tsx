import { FormEvent, ReactElement, useState } from "react";

export function useForm (steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);


    function changeStep (step_index: number, event?: FormEvent) {
        if (event) event.preventDefault();

        if (step_index < 0 || step_index >= steps.length) return;

        setCurrentStep(step_index);
    }

    return {
        changeStep,
        currentComponent: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
    };
}

import { simulationFormSteps } from '@/data/simulation'
import { useState } from 'react'
import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  //função que avança o formulario
  const handleNextStep = () => {
    //se estiver no ultimo passo, não avança mais
    if (currentStepIndex + 1 > totalSteps - 1) {
      return
    }
    setCurrentStepIndex((prev) => prev + 1)
  }

  //voltar um passo no formulario
  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return
    }
    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <div>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0} //esconde o botão de voltar no primeiro passo
      />
    </div>
  )
}

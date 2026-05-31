interface StepProgressProps {
  currentStep: number //passo que o usuário está atualmente
  totalSteps: number //total de passos no formulário, para calcular a porcentagem de progresso
}

export const StepProgress = ({
  currentStep,
  totalSteps,
}: StepProgressProps) => {
  const progress = (currentStep / totalSteps) * 100 //calcula a porcentagem de progresso com base no passo atual e no total de passos

  return (
    <div className="mb-4">
      <p className="text-muted-foreground mb-2 text-sm">
        Passo {currentStep} de {totalSteps}
      </p>
      <div className="bg-border w-hull h-1 overflow-hidden rounded-full">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

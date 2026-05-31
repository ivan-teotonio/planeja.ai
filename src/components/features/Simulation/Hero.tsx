//todos os components relacionados ao formulário de simulação, como o header, o formulário em si, etc, vão ficar aqui
import PiggyBankImage from '@/assets/images/piggy-bank.png'

export function SimulationFormHero() {
  return (
    <div className="mb-8 text-center">
      <div className="flex flex-col items-center sm:flex-row">
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Vamos planejar seu futuro
        </h1>
        <img
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className="h-16 w-16 sm:-ml-3 sm:-mt-2"
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Responda algumas perguntas para criarmos um plano financeiro
        personalizado
      </p>
    </div>
  )
}

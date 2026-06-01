import { PageHero } from '@/components/shared/PageHero'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulation'
import { ExternalLink, PiggyBank, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function HistoricoPage() {
  const { getAllSimulations, deleteSimulation } = useSimulationStorage()
  const [simulacoes, setSimulacoes] = useState(() => getAllSimulations())
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    deleteSimulation(id)
    setSimulacoes(getAllSimulations())
  }

  const handleVerDetalhes = (id: string) => {
    navigate(`/resultado/${id}`)
  }

  const formatDate = (id: string) => {
    const date = new Date()
    return date.toLocaleDateString('pt-BR')
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Acompanhe o histórico dos seus planos financeiros."
      />

      {simulacoes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <PiggyBank size={48} className="text-muted-foreground mb-4" />
          <p className="text-foreground text-lg font-semibold">
            Nenhuma simulação ainda
          </p>
          <p className="text-muted-foreground text-sm">
            Crie uma nova simulação para começar
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {simulacoes.map((sim) => (
            <div
              key={sim.id}
              className="bg-card flex flex-col gap-4 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <PiggyBank size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">
                    {sim.goalName}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {formatDate(sim.id)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8">
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                    Custo da Meta
                  </p>
                  <p className="text-foreground font-semibold">
                    R$ {sim.goalAmount}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                    Prazo
                  </p>
                  <p className="text-foreground font-semibold">
                    {sim.goalDeadline} meses
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                    Economia Mensal
                  </p>
                  <p className="text-foreground font-semibold">
                    R${' '}
                    {calcMonthlySavings(sim).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDelete(sim.id)}
                  className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-500/10"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  onClick={() => handleVerDetalhes(sim.id)}
                  className="text-primary hover:bg-primary/10 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={16} />
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

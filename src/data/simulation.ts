import {
  CalendarClock,
  CreditCard,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'

import type { FormStepProps } from '@/components/features/Simulation/FormStep'

export const simulationFormSteps = [
  {
    id: 'income',
    icon: PiggyBank,
    title: 'Renda mensal bruta',
    question:
      'Quanto é depositado na sua conta todo mês (somando todas as fontes)?',
    inputProps: {
      placeholder: 'Ex: R$ 5.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Custo fixo de vida',
    question:
      'Quanto você gasta por mês com moradia, alimentação, transporte, etc?',
    inputProps: {
      placeholder: 'Ex: R$ 3.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'debts',
    icon: Landmark,
    title: 'Dívidas / parcelas',
    question:
      'Você tem algum valor comprometido com parcelas ou empréstimos mensalmente?',
    inputProps: {
      placeholder: 'Ex: R$ 1.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalName',
    icon: Goal,
    title: 'Nome da meta',
    question: 'Qual o objetivo que você deseja alcançar?',
    inputProps: {
      placeholder: 'Ex: Viagem para Europa',
      maxLength: 50,
    },
  },
  {
    id: 'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question: 'Quanto dinheiro você precisa para alcançar essa meta?',
    inputProps: {
      placeholder: 'Ex: R$ 20.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo desejado',
    question: 'Em quantos meses você planeja atingir esse objetivo?',
    inputProps: {
      placeholder: 'Ex: 24 meses',
      suffix: 'meses',
      min: 1,
      max: 120,
    },
    submitButtonProps: {
      label: 'Gerar simulação',
      emojiIcon: '✨',
    },
  },
] satisfies FormStepProps[]

export type SimulationFormProps = Record<
  (typeof simulationFormSteps)[number]['id'], //pega o id de cada passo do formulário e usa como chave
  string //o valor de cada campo do formulário é uma string
>

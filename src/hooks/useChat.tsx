import type { SimulationRecord } from '@/data/simulation'
import type { ChatMessage } from '@/services/aiService'
import { sendChatMessage } from '@/services/aiService'
import { useEffect, useRef, useState } from 'react'

const CHAT_STORAGE_KEY = 'chat-history'

const buildSimulationContext = (simulation: SimulationRecord) => {
  return `
    - Renda mensal: ${simulation.income}
    - Gastos fixos: ${simulation.expenses}
    - Dívidas: ${simulation.debts}
    - Meta: ${simulation.goalName}
    - Custo da meta: ${simulation.goalAmount}
    - Prazo: ${simulation.goalDeadline} meses
  `
}

export const useChat = (
  simulationId: string,
  simulation: SimulationRecord | null,
) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const storage = localStorage.getItem(`${CHAT_STORAGE_KEY}-${simulationId}`)
    return storage ? (JSON.parse(storage) as ChatMessage[]) : []
  })

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    localStorage.setItem(
      `${CHAT_STORAGE_KEY}-${simulationId}`,
      JSON.stringify(messages),
    )
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, simulationId])

  const sendMessage = async () => {
    if (!input.trim() || !simulation) return

    const userMessage: ChatMessage = { role: 'user', content: input.trim() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const context = buildSimulationContext(simulation)
      const response = await sendChatMessage(input.trim(), context, messages)
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
      }
      setMessages([...updatedMessages, assistantMessage])
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, input, setInput, isLoading, error, sendMessage, bottomRef }
}

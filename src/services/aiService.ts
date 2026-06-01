// interface GeminiResponse {
//   candidates: {
//     content: {
//       parts: { text: string }[]
//     }
//   }[]
// }

// export interface InsightData {
//   feasibility: {
//     status: 'viable' | 'needs_adjustment' | 'unfeasible'
//     content: string
//   }
//   diagnosis: {
//     content: string
//   }
//   suggestions: {
//     items: string[]
//   }
//   extraIncome: {
//     items: string[]
//   }
//   investment: {
//     items: string[]
//   }
//   motivation: {
//     content: string
//   }
// }

// const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY)
// const MODEL_NAME = 'gemini-flash-latest'
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

// const callGeminiAPI = async (prompt: string) => {
//   const response = await fetch(GEMINI_API_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       contents: [{ parts: [{ text: prompt }] }],
//     }),
//   })

//   if (!response.ok) {
//     throw new Error(`Erro na requisição: ${response.status}`)
//   }

//   return (await response.json()) as GeminiResponse
// }

// export const getInsight = async (prompt: string) => {
//   const response = await callGeminiAPI(prompt)
//   const json = response.candidates[0].content.parts[0].text
//   return JSON.parse(json) as InsightData
// }

interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[]
    }
  }[]
}

export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: {
    content: string
  }
  suggestions: {
    items: string[]
  }
  extraIncome: {
    items: string[]
  }
  investment: {
    items: string[]
  }
  motivation: {
    content: string
  }
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY)
//const MODEL_NAME = 'gemini-flash-latest'
const MODEL_NAME = 'gemini-3-flash-preview'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

const callGeminiAPI = async (prompt: string) => {
  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`)
  }

  return (await response.json()) as GeminiResponse
}

export const getInsight = async (prompt: string) => {
  const response = await callGeminiAPI(prompt)
  const json = response.candidates[0].content.parts[0].text
  return JSON.parse(json) as InsightData
}

export const sendChatMessage = async (
  question: string,
  simulationContext: string,
  history: ChatMessage[],
): Promise<string> => {
  const historyText = history
    .map((m) => `${m.role === 'user' ? 'Usuário' : 'Educador'}: ${m.content}`)
    .join('\n')

  const prompt = `Você é um educador financeiro simpático e didático.
O usuário fez uma simulação financeira com os seguintes dados:

${simulationContext}

Histórico da conversa:
${historyText}

Agora o usuário pergunta: "${question}"

Responda de forma clara, objetiva e encorajadora em português do Brasil.
Máximo de 3 parágrafos. Não use markdown.`

  const response = await callGeminiAPI(prompt)
  return response.candidates[0].content.parts[0].text
}

// // import { useInsight } from '@/hooks/useInsight'
// // import Skeleton from 'react-loading-skeleton'
// // import 'react-loading-skeleton/dist/skeleton.css'
// // import { Content } from '../Insights/Context'
// // import { Error } from '../Insights/Error'

// // interface AIInsightCardProps {
// //   simulationId: string
// // }

// // export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
// //   const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
// //   console.log(insight)

// //   return (
// //     <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
// //       <div className="mb-3 flex items-center gap-1.5">
// //         <span>✨</span>
// //         <span className="text-primary text-xs font-semibold uppercase tracking-widest">
// //           Insight Financeiro Personalizado
// //         </span>
// //       </div>

// //       {isLoading && (
// //         <div className="flex">
// //           <Skeleton
// //             count={10.5}
// //             baseColor="var(--color-skeleton-base)"
// //             highlightColor="var(--color-skeleton-highlight)"
// //             className="mb-3 flex rounded-lg"
// //             containerClassName="flex-1"
// //             inline
// //           />
// //         </div>
// //       )}
// //       {!isLoading && error && (
// //         <Error
// //           simulationId={simulationId}
// //           message={error}
// //           onRetry={() => {
// //             fetchInsight(simulationId)
// //           }}
// //         />
// //       )}
// //       {!isLoading && insight && !error && <Content insight={insight} />}
// //     </div>
// //   )
// // }

// import 'react-loading-skeleton/dist/skeleton.css'

// import { SendHorizontal } from 'lucide-react'
// import Skeleton from 'react-loading-skeleton'

// import { useChat } from '@/hooks/useChat'
// import { useInsight } from '@/hooks/useInsight'
// import { useSimulationStorage } from '@/hooks/useSimulationStorage'

// import { Content } from '../Insights/Content'
// import { Error } from '../Insights/Error'

// interface AIInsightCardProps {
//   simulationId: string
// }

// export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
//   const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
//   const { getFormData } = useSimulationStorage()
//   const simulation = getFormData(simulationId)
//   const {
//     messages,
//     input,
//     setInput,
//     isLoading: chatLoading,
//     error: chatError,
//     sendMessage,
//     bottomRef,
//   } = useChat(simulationId, simulation)

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && !chatLoading) {
//       sendMessage()
//     }
//   }

//   return (
//     <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
//       <div className="mb-3 flex items-center gap-1.5">
//         <span>✨</span>
//         <span className="text-primary text-xs font-semibold uppercase tracking-widest">
//           Insight Financeiro Personalizado
//         </span>
//       </div>

//       {isLoading && (
//         <div className="flex">
//           <Skeleton
//             count={10.5}
//             baseColor="var(--color-skeleton-base)"
//             highlightColor="var(--color-skeleton-highlight)"
//             className="mb-3 flex rounded-lg"
//             containerClassName="flex-1"
//             inline
//           />
//         </div>
//       )}
//       {!isLoading && error && (
//         <Error
//           simulationId={simulationId}
//           message={error}
//           onRetry={() => fetchInsight(simulationId)}
//         />
//       )}
//       {!isLoading && insight && !error && <Content insight={insight} />}

//       {!isLoading && insight && !error && (
//         <div className="border-border mt-6 border-t pt-6">
//           <p className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest">
//             💬 Converse com o Educador Financeiro
//           </p>

//           <div className="mb-4 flex max-h-72 flex-col gap-3 overflow-y-auto">
//             {messages.length === 0 && (
//               <p className="text-muted-foreground text-sm">
//                 Tem alguma dúvida sobre sua simulação? Pergunte aqui!
//               </p>
//             )}
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
//                     msg.role === 'user'
//                       ? 'bg-primary text-primary-foreground'
//                       : 'bg-muted text-foreground'
//                   }`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//             {chatLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2.5 text-sm">
//                   Digitando...
//                 </div>
//               </div>
//             )}
//             {chatError && (
//               <p className="text-destructive text-sm">{chatError}</p>
//             )}
//             <div ref={bottomRef} />
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Digite sua pergunta..."
//               disabled={chatLoading}
//               className="border-border text-foreground placeholder:text-muted-foreground focus:border-primary flex-1 rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors"
//             />
//             <button
//               onClick={sendMessage}
//               disabled={chatLoading || !input.trim()}
//               className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center rounded-xl px-4 py-2.5 transition-colors disabled:opacity-50"
//             >
//               <SendHorizontal size={18} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

//novo

// import 'react-loading-skeleton/dist/skeleton.css'

// import { SendHorizontal } from 'lucide-react'
// import Skeleton from 'react-loading-skeleton'

// import { useChat } from '@/hooks/useChat'
// import { useInsight } from '@/hooks/useInsight'
// import { useSimulationStorage } from '@/hooks/useSimulationStorage'

// import { Content } from '../Insights/Content'
// import { Error } from '../Insights/Error'

// interface AIInsightCardProps {
//   simulationId: string
// }

// export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
//   const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
//   const { getFormData } = useSimulationStorage()
//   const simulation = getFormData(simulationId)
//   const {
//     messages,
//     input,
//     setInput,
//     isLoading: chatLoading,
//     error: chatError,
//     sendMessage,
//     bottomRef,
//   } = useChat(simulationId, simulation)

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter' && !chatLoading) {
//       sendMessage()
//     }
//   }

//   return (
//     <div className="bg-card order-2 flex flex-col rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
//       <div className="mb-3 flex items-center gap-1.5">
//         <span>✨</span>
//         <span className="text-primary text-xs font-semibold uppercase tracking-widest">
//           Insight Financeiro Personalizado
//         </span>
//       </div>

//       {isLoading && (
//         <div className="flex">
//           <Skeleton
//             count={10.5}
//             baseColor="var(--color-skeleton-base)"
//             highlightColor="var(--color-skeleton-highlight)"
//             className="mb-3 flex rounded-lg"
//             containerClassName="flex-1"
//             inline
//           />
//         </div>
//       )}
//       {!isLoading && error && (
//         <Error
//           simulationId={simulationId}
//           message={error}
//           onRetry={() => fetchInsight(simulationId)}
//         />
//       )}
//       {!isLoading && insight && !error && (
//         <>
//           <div className="lg:scrollbar-thin lg:max-h-93 lg:overflow-y-auto lg:pr-2 lg:[scrollbar-color:var(--border)_transparent]">
//             <Content insight={insight} />
//           </div>

//           <div className="border-border mt-6 border-t pt-6">
//             <p className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest">
//               💬 Converse com o Educador Financeiro
//             </p>

//             <div className="mb-4 flex max-h-72 flex-col gap-3 overflow-y-auto">
//               {messages.length === 0 && (
//                 <p className="text-muted-foreground text-sm">
//                   Tem alguma dúvida sobre sua simulação? Pergunte aqui!
//                 </p>
//               )}
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
//                       msg.role === 'user'
//                         ? 'bg-primary text-primary-foreground'
//                         : 'bg-muted text-foreground'
//                     }`}
//                   >
//                     {msg.content}
//                   </div>
//                 </div>
//               ))}
//               {chatLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2.5 text-sm">
//                     Digitando...
//                   </div>
//                 </div>
//               )}
//               {chatError && (
//                 <p className="text-destructive text-sm">{chatError}</p>
//               )}
//               <div ref={bottomRef} />
//             </div>

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Digite sua pergunta..."
//                 disabled={chatLoading}
//                 className="border-border text-foreground placeholder:text-muted-foreground focus:border-primary flex-1 rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors"
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={chatLoading || !input.trim()}
//                 className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center rounded-xl px-4 py-2.5 transition-colors disabled:opacity-50"
//               >
//                 <SendHorizontal size={18} />
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

//mais novo ainda
import 'react-loading-skeleton/dist/skeleton.css'

import { SendHorizontal } from 'lucide-react'
import Skeleton from 'react-loading-skeleton'

import { useChat } from '@/hooks/useChat'
import { useInsight } from '@/hooks/useInsight'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

import { Content } from '../Insights/Content'
import { Error } from '../Insights/Error'

interface AIInsightCardProps {
  simulationId: string
}

export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
  const { getFormData } = useSimulationStorage()
  const simulation = getFormData(simulationId)
  const {
    messages,
    input,
    setInput,
    isLoading: chatLoading,
    error: chatError,
    sendMessage,
    bottomRef,
  } = useChat(simulationId, simulation)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !chatLoading) {
      sendMessage()
    }
  }

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="flex">
          <Skeleton
            count={10.5}
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
            className="mb-3 flex rounded-lg"
            containerClassName="flex-1"
            inline
          />
        </div>
      )}

      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => fetchInsight(simulationId)}
        />
      )}

      {!isLoading && insight && !error && (
        <div>
          <Content insight={insight} />

          <div className="border-border mt-6 border-t pt-6">
            <p className="text-primary mb-4 text-xs font-semibold uppercase tracking-widest">
              💬 Converse com o Educador Financeiro
            </p>

            <div className="mb-4 flex max-h-72 flex-col gap-3 overflow-y-auto">
              {messages.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  Tem alguma dúvida sobre sua simulação? Pergunte aqui!
                </p>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2.5 text-sm">
                    Digitando...
                  </div>
                </div>
              )}
              {chatError && (
                <p className="text-destructive text-sm">{chatError}</p>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua pergunta..."
                disabled={chatLoading}
                className="border-border text-foreground placeholder:text-muted-foreground focus:border-primary flex-1 rounded-xl border bg-transparent px-4 py-2.5 text-sm outline-none transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={chatLoading || !input.trim()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center rounded-xl px-4 py-2.5 transition-colors disabled:opacity-50"
              >
                <SendHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

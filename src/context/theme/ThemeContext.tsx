import { createContext } from 'react'

export type Theme = 'light' | 'dark'

//tipos que estão provndo para outro componente
interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

///criando o contexto, passando o tipo do valor que ele vai fornecer
//pode ser undefined ou ThemeContextValue, porque no começo ele não tem valor nenhum, só depois que o provider é renderizado que ele vai ter um valor
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
)

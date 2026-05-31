import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'
import type { Theme } from './ThemeContext'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null

    if (localStorageTheme) {
      return localStorageTheme
    }
    //pegar preferencia do usuario DO SISTEMA OPERACIONAL, se ele tem preferencia por tema escuro ou claro
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    return systemPrefersDark ? 'dark' : 'light'
  })

  //useffect para alterar o incode do thema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  //função que faz alternancia entre os themas
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

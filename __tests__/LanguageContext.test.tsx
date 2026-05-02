import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'

const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <button onClick={() => setLanguage('hi')}>Switch to Hindi</button>
      <span data-testid="tagline">{t.footer.tagline}</span>
    </div>
  )
}

describe('LanguageContext', () => {
  it('provides default language and allows switching', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    
    const button = screen.getByText('Switch to Hindi')
    fireEvent.click(button)
    
    expect(screen.getByTestId('lang')).toHaveTextContent('hi')
  })
})

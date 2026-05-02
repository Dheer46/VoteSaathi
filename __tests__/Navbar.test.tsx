import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

// Mock useLanguage hook
jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      nav: {
        journey: 'Journey',
        timeline: 'Timeline',
        assistant: 'Assistant',
        actions: 'Actions'
      }
    },
    language: 'en',
    setLanguage: jest.fn()
  })
}))

// Mock translations
jest.mock('@/lib/translations', () => ({
  languages: [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' }
  ]
}))

describe('Navbar', () => {
  it('renders navbar brand', () => {
    render(<Navbar />)
    expect(screen.getByText('VoteSaathi')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Journey')).toBeInTheDocument()
    expect(screen.getByText('Timeline')).toBeInTheDocument()
    expect(screen.getByText('Actions')).toBeInTheDocument()
    expect(screen.getByText('Assistant')).toBeInTheDocument()
  })

  it('toggles language menu when clicked', () => {
    render(<Navbar />)
    const globeButton = screen.getByText('EN')
    fireEvent.click(globeButton)
    expect(screen.getByText('हिन्दी')).toBeInTheDocument()
  })
})

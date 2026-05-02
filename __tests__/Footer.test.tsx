import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

// Mock useLanguage hook
jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      footer: {
        description: 'Mock Description',
        links: 'Mock Links',
        resources: 'Mock Resources',
        explore: 'Mock Explore',
        tagline: 'Mock Tagline',
        madeWith: 'Mock Made With',
        legal: {
          privacy: 'Privacy',
          terms: 'Terms',
          faq: 'FAQ',
          contact: 'Contact'
        }
      },
      nav: {
        journey: 'Journey',
        timeline: 'Timeline',
        assistant: 'Assistant',
        actions: 'Actions'
      }
    }
  })
}))

describe('Footer', () => {
  it('renders footer successfully', () => {
    const mockOnOpenLegal = jest.fn()
    render(<Footer onOpenLegal={mockOnOpenLegal} />)
    
    expect(screen.getByText('VoteSaathi')).toBeInTheDocument()
    expect(screen.getByText('Mock Description')).toBeInTheDocument()
  })
})

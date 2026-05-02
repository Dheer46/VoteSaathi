import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

// Mock context
jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      hero: {
        subtitle: 'Mock Subtitle',
        title: 'Mock Title',
        titleAccent: 'Accent',
        description: 'Mock Description',
        cta: 'CTA',
        stats: {
          voters: 'Voters',
          votersLabel: 'Voters Label',
          booths: 'Booths',
          boothsLabel: 'Booths Label',
          states: 'States',
          statesLabel: 'States Label'
        }
      }
    }
  })
}))

describe('HeroSection', () => {
  it('renders hero content correctly', () => {
    render(<HeroSection />)
    expect(screen.getByText('Mock Title')).toBeInTheDocument()
    expect(screen.getByText('Mock Description')).toBeInTheDocument()
    expect(screen.getByText('Voters')).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import ElectionTimeline from '@/components/ElectionTimeline'

// Mock context
jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      timeline: {
        title: 'Timeline Title',
        subtitle: 'Timeline Subtitle',
        viewEci: 'View ECI',
        phases: [
          { date: 'Phase 1 Date', event: 'Event 1', details: 'Details 1' },
          { date: 'Phase 2 Date', event: 'Event 2', details: 'Details 2' }
        ]
      }
    }
  })
}))

describe('ElectionTimeline', () => {
  it('renders timeline phases correctly', () => {
    render(<ElectionTimeline />)
    expect(screen.getByText('Timeline Title')).toBeInTheDocument()
    expect(screen.getByText('Event 1')).toBeInTheDocument()
    expect(screen.getByText('Phase 2 Date')).toBeInTheDocument()
  })
})

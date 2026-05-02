import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import QuickActions from '@/components/QuickActions'

// Mock context and constants
jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      actions: {
        title: 'Actions Title',
        titleAccent: 'Accent',
        subtitle: 'Subtitle',
        oneTap: 'One Tap',
        launchAction: 'Launch',
        items: [
          { title: 'Item 1', description: 'Desc 1' },
          { title: 'Item 2', description: 'Desc 2' }
        ]
      }
    }
  })
}))

jest.mock('@/lib/constants', () => ({
  QUICK_ACTIONS: [
    { id: 1, icon: () => <svg />, title: 'Static 1', description: 'Static Desc 1', url: 'https://test.com' },
    { id: 2, icon: () => <svg />, title: 'Static 2', description: 'Static Desc 2', action: 'journey-1' }
  ]
}))

describe('QuickActions', () => {
  it('renders correctly with translated items', () => {
    render(<QuickActions />)
    expect(screen.getByText('Actions Title')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('opens URL when clicked', () => {
    window.open = jest.fn()
    render(<QuickActions />)
    const button = screen.getByText('Item 1').closest('button')
    if (button) fireEvent.click(button)
    expect(window.open).toHaveBeenCalledWith('https://test.com', '_blank')
  })
})

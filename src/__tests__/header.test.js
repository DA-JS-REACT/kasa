/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
    it('should render without crashing', async () => {
        render(<Header />)
    })
})

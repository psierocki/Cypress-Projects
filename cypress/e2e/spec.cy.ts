import { startPage } from '../pages/firstPage/startPage.cy'
import { startPageSelectors } from '../pages/firstPage/startPageSelectors.cy'

describe('Login form', () => {
	let name: string
})

beforeEach(() => {
	cy.viewport(1380, 800)
})
it.only('loads examples', () => {
	cy.visit('http://automationpractice.com/')
	startPage.firstShowPage();
})

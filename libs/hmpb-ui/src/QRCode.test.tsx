import React from 'react'
import { render } from '@testing-library/react'
import { QRCode } from './QRCode'

test('renders a QR code with default options', () => {
  expect(render(<QRCode value="mailto:me@example.com" />).container)
    .toMatchInlineSnapshot(`
    <div>
      <div
        class="sc-AxjAm fUPOXp"
      >
        <svg
          height="128"
          shape-rendering="crispEdges"
          viewBox="0 0 29 29"
          width="128"
        >
          <path
            d="M0,0 h29v29H0z"
            fill="#FFFFFF"
          />
          <path
            d="M0 0h7v1H0zM8 0h1v1H8zM10 0h1v1H10zM12 0h1v1H12zM14 0h1v1H14zM16 0h1v1H16zM20 0h1v1H20zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h7v1H8zM16 1h3v1H16zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h2v1H14zM17 2h1v1H17zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h7v1H8zM18 3h2v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h3v1H12zM16 4h2v1H16zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM11 5h2v1H11zM14 5h2v1H14zM17 5h4v1H17zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM9 7h2v1H9zM12 7h1v1H12zM14 7h1v1H14zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM13 8h1v1H13zM15 8h3v1H15zM23 8h3v1H23zM27,8 h2v1H27zM0 9h4v1H0zM8 9h1v1H8zM10 9h3v1H10zM14 9h1v1H14zM16 9h1v1H16zM19 9h4v1H19zM26,9 h3v1H26zM3 10h1v1H3zM6 10h1v1H6zM8 10h1v1H8zM11 10h1v1H11zM15 10h2v1H15zM18 10h1v1H18zM20 10h3v1H20zM26 10h2v1H26zM0 11h3v1H0zM4 11h1v1H4zM8 11h1v1H8zM10 11h1v1H10zM13 11h2v1H13zM22 11h3v1H22zM26 11h1v1H26zM4 12h3v1H4zM9 12h4v1H9zM14 12h1v1H14zM17 12h4v1H17zM22 12h1v1H22zM25 12h1v1H25zM27 12h1v1H27zM3 13h1v1H3zM8 13h1v1H8zM10 13h4v1H10zM18 13h1v1H18zM20 13h1v1H20zM27 13h1v1H27zM1 14h1v1H1zM5 14h3v1H5zM10 14h2v1H10zM14 14h1v1H14zM18 14h1v1H18zM20 14h1v1H20zM22 14h4v1H22zM27,14 h2v1H27zM3 15h3v1H3zM9 15h3v1H9zM13 15h2v1H13zM17 15h4v1H17zM22 15h1v1H22zM0 16h1v1H0zM3 16h1v1H3zM6 16h7v1H6zM15 16h2v1H15zM19 16h3v1H19zM25 16h1v1H25zM3 17h3v1H3zM10 17h2v1H10zM17 17h1v1H17zM19 17h4v1H19zM25,17 h4v1H25zM0 18h1v1H0zM2 18h1v1H2zM4 18h1v1H4zM6 18h1v1H6zM9 18h1v1H9zM13 18h6v1H13zM23 18h2v1H23zM26,18 h3v1H26zM2 19h2v1H2zM9 19h1v1H9zM11 19h2v1H11zM14 19h1v1H14zM18 19h1v1H18zM20 19h2v1H20zM25 19h1v1H25zM28,19 h1v1H28zM0 20h1v1H0zM2 20h5v1H2zM8 20h2v1H8zM12 20h1v1H12zM14 20h1v1H14zM18 20h7v1H18zM26,20 h3v1H26zM8 21h3v1H8zM12 21h3v1H12zM16 21h1v1H16zM18 21h3v1H18zM24,21 h5v1H24zM0 22h7v1H0zM9 22h3v1H9zM13 22h5v1H13zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM26 22h2v1H26zM0 23h1v1H0zM6 23h1v1H6zM9 23h4v1H9zM16 23h1v1H16zM20 23h1v1H20zM24 23h1v1H24zM26 23h2v1H26zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM12 24h2v1H12zM17 24h2v1H17zM20 24h5v1H20zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h2v1H8zM11 25h3v1H11zM15 25h1v1H15zM17 25h1v1H17zM19 25h1v1H19zM22 25h1v1H22zM24 25h3v1H24zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h1v1H10zM12 26h1v1H12zM14 26h7v1H14zM24 26h1v1H24zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM9 27h2v1H9zM16 27h1v1H16zM19 27h2v1H19zM22 27h2v1H22zM27 27h1v1H27zM0 28h7v1H0zM9 28h1v1H9zM11 28h4v1H11zM16 28h1v1H16zM18 28h1v1H18zM20 28h4v1H20zM25 28h1v1H25zM27 28h1v1H27z"
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  `)
})

test('renders a QR code with specific props', () => {
  expect(
    render(<QRCode level="L" renderAs="svg" value="mailto:me@example.com" />)
      .container
  ).toMatchInlineSnapshot(`
    <div>
      <div
        class="sc-AxjAm fUPOXp"
      >
        <svg
          height="128"
          shape-rendering="crispEdges"
          viewBox="0 0 25 25"
          width="128"
        >
          <path
            d="M0,0 h25v25H0z"
            fill="#FFFFFF"
          />
          <path
            d="M0 0h7v1H0zM8 0h3v1H8zM12 0h1v1H12zM14 0h2v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM10 2h2v1H10zM15 2h1v1H15zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h2v1H8zM11 3h1v1H11zM13 3h4v1H13zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM13 4h4v1H13zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h2v1H11zM14 5h1v1H14zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h1v1H12zM14 7h2v1H14zM0 8h2v1H0zM4 8h3v1H4zM11 8h1v1H11zM15 8h1v1H15zM19 8h1v1H19zM21,8 h4v1H21zM0 9h2v1H0zM3 9h2v1H3zM9 9h2v1H9zM12 9h1v1H12zM14 9h3v1H14zM18 9h1v1H18zM20 9h1v1H20zM22 9h1v1H22zM3 10h1v1H3zM5 10h2v1H5zM8 10h1v1H8zM11 10h7v1H11zM19 10h1v1H19zM22 10h1v1H22zM1 11h2v1H1zM5 11h1v1H5zM7 11h1v1H7zM10 11h2v1H10zM14 11h4v1H14zM19 11h1v1H19zM22 11h1v1H22zM1 12h1v1H1zM3 12h5v1H3zM10 12h1v1H10zM12 12h1v1H12zM16 12h4v1H16zM22 12h1v1H22zM24,12 h1v1H24zM0 13h4v1H0zM8 13h2v1H8zM14 13h3v1H14zM20 13h3v1H20zM3 14h2v1H3zM6 14h2v1H6zM10 14h1v1H10zM14 14h2v1H14zM19 14h1v1H19zM21 14h2v1H21zM2 15h2v1H2zM8 15h1v1H8zM10 15h1v1H10zM12 15h1v1H12zM14 15h2v1H14zM19 15h2v1H19zM22 15h1v1H22zM0 16h2v1H0zM4 16h4v1H4zM11 16h1v1H11zM13 16h11v1H13zM8 17h2v1H8zM12 17h1v1H12zM14 17h1v1H14zM16 17h1v1H16zM20 17h2v1H20zM0 18h7v1H0zM11 18h4v1H11zM16 18h1v1H16zM18 18h1v1H18zM20 18h3v1H20zM0 19h1v1H0zM6 19h1v1H6zM8 19h4v1H8zM13 19h1v1H13zM16 19h1v1H16zM20 19h1v1H20zM22 19h1v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM8 20h1v1H8zM12 20h2v1H12zM16 20h5v1H16zM22,20 h3v1H22zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM9 21h2v1H9zM13 21h3v1H13zM17 21h3v1H17zM21,21 h4v1H21zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM15 22h2v1H15zM18 22h2v1H18zM23 22h1v1H23zM0 23h1v1H0zM6 23h1v1H6zM8 23h3v1H8zM12 23h1v1H12zM14 23h2v1H14zM17 23h2v1H17zM20 23h4v1H20zM0 24h7v1H0zM8 24h1v1H8zM11 24h1v1H11zM13 24h3v1H13zM18 24h2v1H18zM21,24 h4v1H21z"
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  `)
})

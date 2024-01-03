import { Roboto } from 'next/font/google'
import './globals.css'

const Alegreya = Roboto({
  weight: '400',
  subsets: ['latin'],
  display:  'optional',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={Alegreya.className}>
      <header>
        <p>header</p>
      </header>
        {children}
        <footer>
        <p>footer</p>
      </footer>
        </body>
   
    </html>
  )
}

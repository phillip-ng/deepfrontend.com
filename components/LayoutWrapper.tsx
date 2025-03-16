import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="from-light-bg-primary to-light-bg-secondary min-h-screen bg-gradient-to-br dark:bg-gray-950">
      <SectionContainer>
        <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper

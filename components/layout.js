import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Image from 'next/image'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <NavBar preview={preview} />
        <main className="mt-28">{children}</main>
      </div>
      {/* PRA AJUDAR NOIS COM AS CONTA VAI QUE ALGUEM AJUDA HAHHAHAHAHHAH*/}
      <div className=" hidden sm:block flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Buy me a coffe" href="/buymeacoffe" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full" rounded-full="true" src="/images/coffee.png" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

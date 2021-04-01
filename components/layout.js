import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'
import NavBottom from '../components/navbottom'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gray-100">
        <NavBar preview={preview} />
        <main className="mt-28">{children}</main>
      </div>
      {/* PRA AJUDAR NOIS COM AS CONTA VAI QUE ALGUEM AJUDA HAHHAHAHAHHAH*/}
      <div className="hidden md:flex flex items-end justify-end fixed bottom-0 right-0 mb-20 mr-8 md:mb-4 md:mr-4 z-10">
        <div>
          <a title="Buy me a coffe" href="/buymeacoffe" target="_blank" className="block w-12 h-12 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="/images/coffee.png" />
          </a>
        </div>
      </div>
      <Footer />
      <NavBottom />
    </>
  )
}

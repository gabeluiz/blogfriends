import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Não quer perder nada?</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex shadow">
              <input className="p-2 border-t mr-0 border-b border-l focus:outline-none focus:bg-white text-gray-800" placeholder="seu@mail.com"/>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800">
                Ficar por dentro
              </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

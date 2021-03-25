import Container from './container'
import SectionSeparator from './section-separator'
import { BLOG_NAME, FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, WHATSAPP_URL, YOUTUBE_URL } from '../lib/constants'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaCreativeCommonsSampling, FaNewspaper, FaSearch, FaStar, FaTh } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 relative items-center justify-center">
      <Container>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="px-3 md:w-2/3 mb-10 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">Newsletter</h2>
              <h3 className="text-gray-600 mb-7 leading-tight">As notícias que você não pode perder diretamente no seu e-mail.</h3>
              <div>
                <span className="inline-block w-40 h-1 rounded-full bg-gray-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-gray-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <form>
                <div className="flex mb-3">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaEnvelope className="text-gray-400" /> </div>
                  <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:shadow" placeholder="email@exemplo.com" />
                </div>
                <div>
                  <button className="block w-full bg-gray-900 hover:bg-gray-800 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold">Inscreva-se</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      {/* <!-- Copyright Bar --> */}
      <div className="pt-2 items-center justify-center">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-300 text-gray-600 text-sm 
            flex-col md:flex-row max-w-6xl items-center justify-center">
          <div className="mt-2">
            {BLOG_NAME}
            {' - Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex ">
            <a href={FACEBOOK_URL} className="w-6 mx-1 transform hover:scale-150 hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href={TWITTER_URL} className="w-6 mx-1 transform hover:scale-150 hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href={YOUTUBE_URL} className="w-6 mx-1 transform hover:scale-150 hover:text-red-600">
              <FaYoutube />
            </a>
            <a href={INSTAGRAM_URL} className="w-6 mx-1 transform hover:scale-150 hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href={WHATSAPP_URL} className="w-6 mx-1 transform hover:scale-150 hover:text-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="h-16 md:block"></div>
        <div className="sm:hidden bg-white absolute bottom-0 w-full border-t mt-5 border-gray-200 flex ">
          <a href="#" className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <FaNewspaper />
              </span>
              <span className="block text-xs leading-none">Today</span>
            </div>
          </a>
          <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <FaTh />
              </span>
              <span className="block text-xs leading-none">Categories</span>
            </div>
          </a>
          <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <FaStar />
              </span>
              <span className="block text-xs leading-none">Favorites</span>
            </div>
          </a>
          <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <FaSearch />
              </span>
              <span className="block text-xs leading-none">Search</span>
            </div>
          </a>
        </div>
      </div>
    </footer>

  )
}

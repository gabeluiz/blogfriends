import { Transition } from '@headlessui/react'
import cn from 'classnames'
import { useState } from 'react'
import { FaSearch, FaThumbsUp, FaTwitter } from 'react-icons/fa';

export default function NavBar({ preview }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <nav className="bg-white shadow-sm fixed z-10 mx-auto inset-x-0 top-0 justify-between">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" >
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <a href="/" className="font-extrabold hidden sm:block m-3 uppercase inline-flex hover:text-indigo-600">
              BlogFriends
            </a>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex-shrink-0 flex items-center">
                {preview ? (
                  <>
                    This is page is a preview.{' '}
                    <a
                      href="/api/exit-preview"
                      className="underline hover:text-cyan duration-200 transition-colors"
                    >
                      Click here
                  </a>{' '}
                  to exit preview mode.
                  </>
                ) : (
                  <>
                   
                  </>
                )}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* aqui pode ser criado algum menu futuramente */}
                    {/* <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative text-gray-600 focus-within:text-gray-400 ">
                <input type="search" name="q" className="py-2 text-base px-5 pr-10 focus:shadow text-white pl-2 focus:outline-none focus:bg-white text-gray-800" placeholder="Procurar..." autoComplete="off" />
                <span className="absolute items-center right-0 top-0 mt-1 mr-1">
                  <button type="submit" className="p-2 focus:outline-none focus:shadow-outline">
                    <FaSearch/>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/" className="font-extrabold m-3 sm:hidden uppercase inline-flex hover:text-gray-600">
              BlogFriends
            </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  )
}

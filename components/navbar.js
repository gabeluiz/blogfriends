import { Transition } from '@headlessui/react'
import cn from 'classnames'
import { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { BLOG_NAME } from '../lib/constants'

export default function NavBar({ preview }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <nav className="bg-white shadow-md fixed z-10 mx-auto inset-x-0 top-0 justify-between">
        <div className="max-w-6xl mx-auto px-4 md:px-0" >
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <FaBars />
              </button>
            </div>
            <a href="/" className="font-extrabold hidden sm:block uppercase inline-flex hover:text-gray-600">
              {BLOG_NAME}
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
              <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-md flex hidden md:flex">
                <input type="search" name="serch" placeholder="Procurar..."
                  className="flex-grow px-4 rounded-md text-sm text-gray-600 focus:outline-none" />
                <FaSearch className="m-3 mr-5 text-lg text-gray-600 w-4 h-4"/>
              </span>
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
                {BLOG_NAME}
              </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  )
}

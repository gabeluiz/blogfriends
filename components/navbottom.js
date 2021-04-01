
import { FaBars, FaHome, FaSearch, FaStar } from 'react-icons/fa'


export default function NavBottom() {
    return (
        <section className="md:hidden block fixed m-4 rounded-lg inset-x-0 bottom-0 z-10 bg-white shadow-md">
            <div className="flex justify-between">
                <a href="/" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaHome className="w-6 h-6"/>
                    </span>
                </a>
                <a href="#" className="w-full pr-4 text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaSearch  className="w-6 h-6"/>
                    </span>
                </a>
                <a href="#" className="w-full pl-4 text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaStar  className="w-6 h-6"/>
                    </span>
                </a>
                <a href="#" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaBars  className="w-6 h-6"/>
                    </span>
                </a>
            </div>
        </section>
    )
}
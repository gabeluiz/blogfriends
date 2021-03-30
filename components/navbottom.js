
import { FaBars, FaHome, FaSearch, FaStar } from 'react-icons/fa'


export default function NavBottom() {
    return (
        <section className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
            <div className="flex justify-between">
                <a href="/" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaHome />
                    </span>
                </a>
                <a href="#" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaSearch />
                    </span>
                </a>
                <a href="#" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaStar />
                    </span>
                </a>
                <a href="#" className="w-full text-xl text-gray-500 focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                    <span className="inline-block">
                        <FaBars />
                    </span>
                </a>
            </div>
        </section>
    )
}
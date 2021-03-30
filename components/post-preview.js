import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import SectionSeparator from "./section-separator";
import { FaFacebook, FaInstagram, FaLinkedin, FaShare, FaShareAlt, FaThumbsUp, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoShareSocialSharp, IoShareSocial } from 'react-icons/io5';


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <div className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95 mb-6">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
        <div className="pl-3 w-3/5 md:w-2/5">
          <p className="text-xs text-blue-500 uppercase font-bold">CATEGORIA</p>
          <h3 className="text-xs md:text-lg font-bold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-gray-600">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <p className="hidden md:block">{excerpt}</p>
          <div className="block fixed bottom-0 flex items-center">
            <div className="text-xs md:text-sm flex self-center">
            <p className="text-grey-dark text-xs md:text-sm md:pr-6"><Date dateString={date} /></p>
              {/* <span className="transition duration-600 z-999 text-black text-center justify-center align bg-gray-200 absolute w-full h-full leading-normal rounded transform hover:-translate-x-full transition delay-300 rounded"><IoShareSocial/></span> */}
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-600"><FaFacebook /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-500"><FaTwitter /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-pink-600"><FaInstagram /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-green-600"><FaWhatsapp /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-600"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <SectionSeparator />
    </>
    // <div className="mx-auto px-4 py-8 max-w-xl">
    //   <div className="hover:shadow-medium transition-shadow duration-200 shadow">
    //     <div>
    //       <CoverImage
    //         title={RichText.asText(title)}
    //         slug={slug}
    //         url={coverImage.url}
    //       />
    //     </div>
    //     <div className="px-4 py-2 mt-2 bg-gray-50">
    //       <h2 className="font-bold text-2xl text-gray-800">
    //         <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //           <a className="hover:text-indigo-600">
    //             <RichText render={title} />
    //           </a>
    //         </Link>
    //       </h2>
    //       <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
    //         {excerpt}
    //       </p>
    //       <div className="flex mt-10 relative">
    //         <div className="flex-auto items-center text-xs">
    //           <Date dateString={date} />
    //         </div>
    //         <div className="flex self-center transition duration-300 rounded overflow-hidden transform hover:scale-100">
    //           <span className="transition duration-600 z-999 text-gray-200 text-center justify-center align bg-gray-900 absolute w-full h-full leading-normal rounded transform hover:-translate-x-full transition delay-300 rounded"><IoShareSocial/></span>
    //           <a href="#" className="ml-2 self-center"><FaFacebook/></a>
    //           <a href="#" className="ml-2 self-center"><FaTwitter/></a>
    //           <a href="#" className="ml-2 self-center"><FaInstagram/></a>
    //           <a href="#" className="ml-2 self-center"><FaWhatsapp/></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

import { RichText } from 'prismic-reactjs'
import { FaFacebook, FaInstagram, FaLinkedin, FaShare, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Avatar from '../components/avatar'
import Date from '../components/date'
import PostCoverImage from '../components/post-cover-image'
import PostTitle from '../components/post-title'
import SectionSeparator from './section-separator'
import { RWebShare } from "react-web-share"

export default function PostHeader({ title, coverImage, date, author, excerpt, fontimg, slug }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="m-3 md:block md:mb-6 text-gray-600">
        {/* {excerpt} */}
      </div>
      <div className="m-3 md:block md:mb-6">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="m-3 text-xs">
        {/* <Date dateString={date} /> */}
        {date}
      </div>
      <div className="text-xl p-0 h-10 m-3 flex self-center">
        <a href="#" className="self-center transform hover:scale-110"><FaFacebook /></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaTwitter /></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaInstagram /></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaWhatsapp /></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaLinkedin /></a>
      </div>
      <SectionSeparator />
      <div>
        <PostCoverImage title={title} url={coverImage.url} />
      </div>
      <p className="my-6 m-4 text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">{fontimg}</p>


      {/* floating button para compartilhar no topo esquerdo top bar */}
      <div className="hidden md:flex flex items-end justify-end fixed top-0 left-0 mt-16 ml-8 md:mt-8 md:ml-9 z-10">
        <RWebShare
          data={{
            url: `/posts/${slug}`,
          }}
        >
          <button title="Compartilhar" className="p-0 w-12 h-12 bg-white text-gray-500 hover:text-white rounded-full hover:bg-gray-800 shadow-md mouse shadow transition ease-in duration-200 focus:outline-none">
            <FaShare className="w-6 h-6 inline-block " />
          </button>
        </RWebShare>
      </div>

      {/* floating button para compartilhar no bottom  */}
      <div className="md:hidden block fixed m-4 inset-x-0 mb-8 bottom-0 z-20 text-center justify-center">
          <RWebShare
            data={{
              url: `/posts/${slug}`,
            }}
          >
            <button className="inset-0 bottom-0 text-center justify-center p-0 w-16 h-16 bg-white text-gray-500 hover:text-white rounded-full hover:bg-gray-800 shadow mouse transition ease-in duration-200 focus:outline-none">
              <FaShare className="w-6 h-6 inline-block " />
            </button>
          </RWebShare>
      </div>
    </>
  )
}



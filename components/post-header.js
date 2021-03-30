import { RichText } from 'prismic-reactjs'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Avatar from '../components/avatar'
import Date from '../components/date'
import PostCoverImage from '../components/post-cover-image'
import PostTitle from '../components/post-title'
import SectionSeparator from './section-separator'

export default function PostHeader({ title, coverImage, date, author, excerpt, fontimg }) {
  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <div className="m-3 md:block md:mb-6 text-gray-600">
        {excerpt}
      </div>
      <div className="m-3 md:block md:mb-6">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="m-3 text-xs">
        <Date dateString={date} />
      </div>
      <div className="text-xl p-0 h-10 m-3 flex self-center">
        <a href="#" className="self-center transform hover:scale-110"><FaFacebook/></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaTwitter/></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaInstagram/></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaWhatsapp/></a>
        <a href="#" className="ml-2 self-center transform hover:scale-110"><FaLinkedin/></a>
      </div>
      <SectionSeparator />
      <div>
        <PostCoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <h6 className="text-xs md:text-sm mb-6 md:mb-8 mx-0 italic text-gray-600">
        {fontimg}
      </h6>
    </>
  )
}



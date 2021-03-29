import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <RichText render={content} />
        <div className="text-xl p-0 h-10 m-3 flex self-center">
          <a href="#" className="self-center transform hover:scale-110"><FaFacebook/></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaTwitter/></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaInstagram/></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaWhatsapp/></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

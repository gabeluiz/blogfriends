import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Quote from '../components/quote'
import Image from 'next/image'

export default function PostBody({ content }) {
  console.log('content');


  if (content) {

    const blogContent = content.map((slice) => {
      if (slice.type == 'text') {
        return RichText.render(slice.primary.text);
      } else if (slice.type == 'quote') {
        return (
          <Quote
            quote={RichText.render(slice.primary.quote)}
          />
        );
      } else if (slice.type == 'image') {
        const imageContent = (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            layout="responsive"
            height={420}
            width={704}
            className="rounded-md"
          />
        );
        return (
          <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'>
              {imageContent}
              {RichText.render(slice.primary.caption)}
          </div>
        );
        // Return null by default
      } else {
        return null;
      }
    });
    return (
      <div className="md:max-w-4xl mx-auto text-gray-700">
        <div className={markdownStyles['markdown']}>
          {blogContent}
        </div>
        <div className="text-xl p-0 h-10 m-3 flex self-center">
          <a href="#" className="self-center transform hover:scale-110"><FaFacebook /></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaTwitter /></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaInstagram /></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaWhatsapp /></a>
          <a href="#" className="ml-2 self-center transform hover:scale-110"><FaLinkedin /></a>
        </div>
      </div>
    )

  }
  //Retornar pagina de erro.... mas para teste null já vale.
  return null;
}

import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Date from "../components/date";
import CoverImage from "./cover-image";
import SectionSeparator from "./section-separator";
import { FaFacebook, FaInstagram, FaLinkedin, FaShare, FaShareAlt, FaThumbsUp, FaTwitter, FaWhatsapp } from 'react-icons/fa';


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
      <article className="grid grid-cols-5 bg-white relative md:max-w-2xl rounded-lg">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
        <div className="p-6 self-center md:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-sm md:text-lg font-bold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-gray-600">
                <RichText render={title} />
              </a>
            </Link>
          </h2>
          <p className="hidden md:block">{excerpt}</p>
          {/* <span className="transition duration-600 z-999 text-black text-center justify-center align bg-gray-200 absolute w-full h-full leading-normal rounded transform hover:-translate-x-full transition delay-300 rounded"><IoShareSocial/></span> */}
          {/* <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-600"><FaFacebook /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-500"><FaTwitter /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-pink-600"><FaInstagram /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-green-600"><FaWhatsapp /></a>
              <a href="#" className="w-6 md:w-10 self-center md:text-2xl transform hover:scale-150 text-blue-600"><FaLinkedin /></a> */}

        </div>
        <div className="col-span-5">
          <p className="capitalize text-xs text-gray-500 md:text-sm inline-block pt-2">
            <Date dateString={date} />
          </p>
        </div>
      </article>
      <SectionSeparator />
    </>
  );
}

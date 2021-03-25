import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import HeroImage from '../components/hero-image'
import { FaFire } from 'react-icons/fa';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <figure className="relative cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95">
      <div className="absolute top-0 right-0 -mt-3 mr-3">
        <div className="bg-blue-500 text-white text-xs py-1 pl-2 pr-2 leading-none grid grid-cols-2"><FaFire className="align-middle"/><span className="text-xs align-middle">Novo</span></div>
      </div>
        <HeroImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
        <figcaption className="absolute text-lg -mt-28 md:-mt-24 text-white">
          <h2 className="text-white m-4 text-2xl font-bold leading-tight mb-3 pr-5">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="shadow">
                <RichText render={title} />
              </a>
            </Link>
          </h2>
        </figcaption>
      </figure>
    </section>
  )
}

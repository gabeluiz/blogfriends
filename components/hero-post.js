import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
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
      <figure className="relative rounded cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95">
        <div className="absolute top-0 right-0 -mt-3 mr-3">
          <div className="bg-red-500 text-white text-xs py-1 pl-2 pr-2 leading-none grid grid-cols-2"><FaFire className="align-middle" /><span className="text-xs align-middle">News</span></div>
        </div>
        <HeroImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
        <figcaption className="absolute rounded text-lg -mt-28 md:-mt-20 bg-gradient-to-t from-black text-gray-200">
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

import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import HeroImage from '../components/hero-image'

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
      <div className="mb-8 md:mb-16 text-center">
        <div>
          <h1 className="text-4xl md:text-7xl mt-6 md:mt-12 font-bold tracking-tighter leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-gray-600">
                <RichText render={title} />
              </a>
            </Link>
          </h1>
        </div>
      </div>
      <div className="mb-8 md:mb-16">
        <HeroImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
    </section>
  )
}

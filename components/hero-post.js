import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'

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
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">
                <RichText render={title} />
              </a>
            </Link>
          </h1>
          {/* <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div> */}
        </div>
        {/* <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div> */}
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
    </section>
  )
}

import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import SectionSeparator from './section-separator'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="ml-4 mb-4 grid grid-cols-3 gap-4 md:grid-cols-4">
        <div className="md:mb-2 md:col-span-4">
          <CoverImage
            title={RichText.asText(title)}
            slug={slug}
            url={coverImage.url}
          />
        </div>
        <div className="col-span-2 md:col-span-4">
          <h3 className="text-base md:text-xl font-bold md:mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-blue-600">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <div className="text-xs md:text-sm mb-1">
            <Date dateString={date} />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <SectionSeparator />
      </div>
    </div>
  )
}

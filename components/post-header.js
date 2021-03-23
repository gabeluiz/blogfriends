import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import SectionSeparator from './section-separator'

export default function PostHeader({ title, coverImage, date, author, excerpt }) {
  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <div className="m-4 md:block md:mb-6">
        {excerpt}
      </div>
      <div className="m-4 md:block md:mb-6">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="m-4 text-xs">
        <Date dateString={date} />
      </div>
      <SectionSeparator />
      <div className="mb-6 md:mb-8 sm:mx-0">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
    </>
  )
}

import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import PostCoverImage from '../components/post-cover-image'
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
      <div className="sm:mx-0">
        <PostCoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <h6 className="text-sm mb-6 md:mb-8 sm:mx-0 italic text-gray-600">
        Fonte: Esse conteúdo tem que ser dinâmico né? Tem que vir do prismic.
      </h6>
    </>
  )
}

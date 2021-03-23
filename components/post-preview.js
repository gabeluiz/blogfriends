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
    // <div className="mx-auto px-4 md:py-8 max-w-xl">
    //   <div className="bg-white shadow mb-6 tracking-wide hover:shadow-medium transition-shadow duration-200">
    //     <div className="md:mb-2 md:col-span-4 md:flex-shrink-0">
    //       <CoverImage
    //         title={RichText.asText(title)}
    //         slug={slug}
    //         url={coverImage.url}
    //       />
    //     </div>
    //     <div className="col-span-2 md:col-span-4 px-4 py-2 mt-2 h-20 md:h-full">
    //       <h3 className="text-sm md:text-base font-bold md:mb-3 leading-snug text-gray-800">
    //         <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //           <a className="hover:text-indigo-600">
    //             <RichText render={title} />
    //           </a>
    //         </Link>
    //       </h3>
    //       <div className="text-xs md:text-sm mb-1 text-gray-800">
    //         {excerpt}
    //       </div>
    //       <div className="text-xs md:text-sm mb-1 text-gray-600">
    //         <Date dateString={date} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="px-4 py-8 max-w-xl">
      <div className="bg-white hover:shadow-medium transition-shadow duration-200 shadow">
        <div>
          <CoverImage
            title={RichText.asText(title)}
            slug={slug}
            url={coverImage.url}
          />
        </div>
        <div className="px-4 py-2 mt-2 bg-white">
          <h2 className="font-bold text-2xl text-gray-800">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-indigo-600">
                <RichText render={title} />
              </a>
            </Link>
          </h2>
          <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
            {excerpt}
          </p>
          <div className="flex items-center ml-3 mt-8 mb-4 text-xs">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </div>
  )
}

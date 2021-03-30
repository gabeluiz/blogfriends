import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('', {
        "block rounded overflow-hidden" : slug,
      })}
      width={100}
      height={100}
      layout="responsive"
    />
  )
  return (
    <div className="w-2/5 md:w-1/5">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

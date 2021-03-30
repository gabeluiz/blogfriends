import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('', {
        "w-full rounded" : slug,
      })}
      width={96}
      height={88}
      layout="responsive"
    />
  )
  return (
    <figure className="col-span-2">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </figure>
  )
}

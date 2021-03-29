import cn from 'classnames'
import Link from 'next/link'

export default function PostCoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('', {
        "h-52 w-52" : slug,
      })}
    />
  )
  return (
    <div className="m-0">
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

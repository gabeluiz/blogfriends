import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      alt={`Imagem de: ${title}`}
      className={cn('', {
        "w-full rounded" : slug,
      })}
      width={164}
      height={118}
    />
  )
  return (
    <figure className="w-auto h-auto"> 
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a title={`Ir para: ${title}`} aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </figure>
  )
}

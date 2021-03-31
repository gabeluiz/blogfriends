import Link from 'next/link'
import Image from 'next/image'

export default function PostCoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      alt={`Imagem de: ${title}`}
      className="rounded-md w-full object-cover"
      width={1120}
      height={420}
      layout="responsive"
      
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

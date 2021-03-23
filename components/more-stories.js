import PostPreview from '../components/post-preview'
import SectionSeparator from './section-separator'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h4 className="mb-8 text-center md:text-left text-xl md:text-2xl font-bold tracking-tighter leading-tight">
        Latest News
      </h4>
      <div className="grid md:grid-cols-4 row-gap-4 md:row-gap-10 mb-2 md:md-16">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

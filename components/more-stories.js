import PostPreview from '../components/post-preview'
import SectionSeparator from './section-separator'

export default function MoreStories({ posts }) {
  return (
    <section className="pb-10">
      <h4 className="mb-8 text-left text-xl md:text-3xl font-bold text-gray-700 tracking-tighter leading-tight">
        Posts Recentes
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(({node}) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            coverImage={node.coverimage}
            date={node.release_date}
            author={node.author}
            slug={node._meta.uid}
            // excerpt={node.excerpt}
            fontimg={node.fontimg}
          />
        ))}
      </div>
    </section>
  )
}

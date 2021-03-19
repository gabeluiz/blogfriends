import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h4 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Latest News
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:col-gap-4 lg:col-gap-8 row-gap-10 md:row-gap-16 mb-16">
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

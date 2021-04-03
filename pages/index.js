import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { BLOG_NAME } from '../lib/constants'
import SectionSeparator from '../components/section-separator'


export default function Index({ preview, allPosts }) {

    const heroPost1 = allPosts[0].node
    const heroPost2 = allPosts[1].node
    const morePosts = allPosts.slice(2)
  
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex mb-5">
              {heroPost1 && (
                <HeroPost
                  title={heroPost1.title}
                  coverImage={heroPost1.coverimage}
                  date={heroPost1.date}
                  author={heroPost1.author}
                  slug={heroPost1._meta.uid}
                  excerpt={heroPost1.excerpt}
                />
              )}
            </div>
            <div className="flex mb-5">
              {heroPost2 && (
                <HeroPost
                  title={heroPost2.title}
                  coverImage={heroPost2.coverimage}
                  date={heroPost2.date}
                  author={heroPost2.author}
                  slug={heroPost2._meta.uid}
                  excerpt={heroPost2.excerpt}
                />
              )}
            </div>
          </div>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}

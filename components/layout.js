import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <NavBar preview={preview} />
        <main className="mt-28">{children}</main>
      </div>
      <Footer />
    </>
  )
}

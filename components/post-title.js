export default function PostTitle({ children }) {
  return (
    <h1 className="m-4 mt-10 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
      {children}
    </h1>
  )
}

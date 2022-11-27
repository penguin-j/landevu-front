import useSWR from 'swr'

const fetcher = async (url) => await fetch(url).then((res) => res.json())

const RecommendAreas = () => {
  const { data, error } = useSWR('https://api.github.com/repos/vercel/next.js', fetcher)

  if (error) return <>failed to load</>
  if (!data) return <>loading...</>

  return (
    <>
      <pre>
        <object>{JSON.stringify(data)}</object>
      </pre>
    </>
  )
}

export default RecommendAreas

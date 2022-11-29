import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Search } from '../components/search'

const fetcher = async (url) => await fetch(url).then((res) => res.json())

const RecommendAreas = () => {
  const router = useRouter()

  const { data, error } = useSWR(`https://api.github.com/repos/${router.query.input}`, fetcher)

  if (error) return <>failed to load</>
  if (!data) return <>loading...</>

  return (
    <>
      <Search submit={() => {}} />
      <pre>
        <object>{JSON.stringify(data)}</object>
      </pre>
    </>
  )
}

export default RecommendAreas

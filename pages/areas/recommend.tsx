import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Search } from '../components/search'

const fetcher = async (url) => await fetch(url).then((res) => res.json())

const RecommendAreas = () => {
  const router = useRouter()

  const input = router.query.input

  // ボタン押下前の処理
  // 検索フォームを出力する
  if (!input) {
    return (
      <>
        <Search submit={() => {}} />
      </>
    )
  }

  // ボタン押下後の処理
  const { data, error } = useSWR(`https://api.github.com/repos/${input}`, fetcher)

  // エラー結果を出力する
  if (error) return <>failed to load</>
  // 処理中の間 "loading..." を表示する
  if (!data) return <>loading...</>

  // 検索結果を出力する
  return (
    <>
      <pre>
        <object>{JSON.stringify(data)}</object>
      </pre>
    </>
  )
}

export default RecommendAreas

import React from 'react'

type Props = {
  submit: () => void
}

export const Search: React.VFC<Props> = ({ submit }) => {
  const [value, setValue] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onClick = () => submit(value)

  return (
    <form>
      <input type='string' name='input' value={value} onChange={onChange} />
      <button onClick={onClick}>Go</button>
    </form>
  )
}

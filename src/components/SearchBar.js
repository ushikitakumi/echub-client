import React, { useRef } from 'react'

const SearchBar = ({ handleSubmit }) => {
  const ref = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(ref.current.value)
  }

  return (
    <form onSubmit={onSubmit} className="form-inline w-75">
        <div className='input-group'>
            <input type="text" placeholder="商品を検索" ref={ref} className="form-control"/>
            <button className="btn btn-success" type="submit">Search</button>
        </div>
    </form>
  )
}

export default SearchBar

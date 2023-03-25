import React, { useRef } from 'react'

const SearchBar = ({ handleSubmit }) => {
  const ref = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(ref.current.value)
  }

  return (
    <form onSubmit={onSubmit} className="input-group col-xl-3 col-md-6 p-2">
      <input type="text" placeholder="商品を検索" ref={ref} className="form-control"/>
      <div className="input-group-append">
        <button className="btn btn-outline-success" type="submit">検索</button>
      </div>
    </form>
  )
}

export default SearchBar

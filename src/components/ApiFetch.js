import React from 'react'

const ApiFetch = ({ fetchData }) => {
  return (
    <div>
        <div>
            {fetchData.map((data) => (
                <div className='image'>
                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                        <img src={data.image} alt="画像を表示できません"/>
                    </a>
                </div>
            ))}

        </div>
    </div>
  )
}

export default ApiFetch

import React from 'react'

const TenderListItem = ({tender}) => {
  return (
    <div className='bg-blue-300 min-h-52 p-10 rounded-lg'>{tender.title}</div>
  )
}

export default TenderListItem
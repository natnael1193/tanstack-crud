import React from 'react'

const TenderForm = ({ title, setTitle, categoryId, setCategoryId, startDate, setStartDate, endDate, setEndDate, submitData, createTender }) => {
  return (
    <div className='flex flex-col mt-10 gap-y-10'>
      <div>
        <div>Title</div>
        <input
          className='w-full bg-gray-100 h-10'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <div>Category</div>
        <input
        type="number"
          className='w-full bg-gray-100 h-10'
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </div>


      <div>
        <div>Start Date</div>
        <input
                type="date"
          className='w-full bg-gray-100 h-10'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <div>End Date</div>
        <input
        type="date"
          className='w-full bg-gray-100 h-10'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div>
        <button className='bg-blue-500 p-3 rounded-lg'
          onClick={submitData}
        >
          <div className='text-white'>       {createTender.isLoading ? "Loading..." : "Submit"}</div>

        </button>
      </div>
    </div>
  )
}

export default TenderForm
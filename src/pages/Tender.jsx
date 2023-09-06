import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import TenderService from '../services/TenderService'
import TenderListItem from '../components/todo/TenderListItem';
import TenderForm from '../components/todo/TenderForm';

const Todo = () => {
  const queryClinet = useQueryClient()
  const [title, setTitle] = React.useState("")
  const [categoryId, setCategoryId] = React.useState("")
  const [startDate, setStartDate] = React.useState("")
  const [endDate, setEndDate] = React.useState("")

  const getTenders = useQuery({
    queryKey: ['tenders'],
    queryFn: TenderService.getTenders
  });

  const createTender = useMutation({
    mutationFn: TenderService.createTender,
    onSuccess: () => {
      console.log("Created")
      queryClinet.invalidateQueries(["tenders"])
    },
    onError: (error) => {
      alert(error.message)
      console.log("Failed to create")
    }
  })


  const submitData = () => {
    const data = {
      title: title,
      category_id: categoryId,
      start_date: startDate,
      end_date: endDate,
    }
    createTender.mutate(data)
    console.log("Sending data", data);
  }


console.log("getTenders", getTenders.data)


  return (
    <div >
      {
        getTenders.isLoading ? <div>Loading.... </div>
        :
        <div className='flex flex-row flex-wrap gap-x-5 gap-y-10'>
          {
                  getTenders.data.map((tender) => {
                    return   <TenderListItem {...{tender}}  />
                  }
                  
                  )
          }
        </div>
  
      }
      <div className='mt-20 bg-white shadow-xl shadow-blue-200 p-10'>
        <h3>Create Tender</h3>
        <TenderForm {...{ title, setTitle, categoryId, setCategoryId, startDate, setStartDate, endDate, setEndDate, submitData, createTender }}/>
      </div>
    </div>
  )
}

export default Todo

import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  eventName: string,
  eventPhoto: string,
  exampleRequired: string
}
function CreateEventItemsManagement() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {

    console.log(data)
  }



  return (
    <div className="p-10">
        <div className="">
            <h1 className="text-center font-bold mb-10">Create Event Items Management</h1>
            
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4 flex items-center w-full gap-5 flex-wrap'>
              <div className='w-full md:w-[48%]'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='eventName'>
                  Event Item Name
                </label>
                <input
                  {...register('eventName')}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='eventName'
                  type='text'
                  placeholder='Event Item Name'
                  name='eventName'
                />
              </div>
              <div className='w-full md:w-[48%]'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='eventPhoto'>
                  Event Photo
                </label>
                <input
                {...register('eventPhoto')}
                name='eventPhoto' type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
        </div>
        <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default CreateEventItemsManagement
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDeanList } from '../../redux/dean/deanSlice';

export const DeanList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeanList())
  }, [dispatch])


  return (
    <section className='d-flex justify-content-center align-items-center h-100 technical-pages-bg-v2'>
      <h1 className='tech-header'>Dean&apos;s List</h1>
      <h2 className='p-5 text-light'>The Dean List feature will be available soon!</h2>
    </section>
  )
}

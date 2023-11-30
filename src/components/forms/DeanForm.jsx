import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSchools } from '../../redux/dean/deanSlice';

export const DeanForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchools())
  }, [])

  return (
    <div>DeanForm</div>
  )
}

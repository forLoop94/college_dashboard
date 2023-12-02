import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDeanList } from '../../redux/dean/deanSlice';

export const DeanList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeanList())
  }, [])


  return (
    <div>DeanList</div>
  )
}

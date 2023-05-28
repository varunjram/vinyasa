import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';


export default function FullPageLoading() {
  return (
    <div style={{
        height: "91vh"
    }} 
    className='flex justify-content-center align-items-center w-ful surface-500'>
    <ProgressSpinner />
    </div>
  )
}


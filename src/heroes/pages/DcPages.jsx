import React from 'react'
import HeroeList from '../components/HeroeList'


export default function DcPages() {
  return (
    <>
        <h1>Heroes de DC </h1>
        <hr />
        <HeroeList publisher={'DC Comics'}/>
    </>
  )
}

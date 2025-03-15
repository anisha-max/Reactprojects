import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =  useLoaderData()
    const {id} = useParams()
  return (
    <div>
    {id}
    {data}
    </div>
  )
}

export default Github


export const GitHubLoader = async ()=>{
    let data ="git"
 console.log("hi")
 return data
}
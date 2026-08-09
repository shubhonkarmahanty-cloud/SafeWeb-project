import React from 'react'
import { useState } from 'react'


const Dashboard = () => {

  const [url ,setUrl ] = useState("")
  const [list , setList] = useState([])

  const a = (e)=>{
    e.preventDefault()
    if(url.length<1){
      alert("Enter a Website Name or Url")
    }else{
    const checkList = list.some((item)=>{
       return item.url === url
    })
    if(checkList === false){
      const copyList = [...list]
      copyList.push({url})
      setList(copyList)
    }else{
      alert("url already exist")
    }
   setUrl("")
    
  }}

  const remove =(idx)=>{
    const copyLi = [...list]
    // console.log(copyLi[idx])
    copyLi.splice(idx,1)
    setList(copyLi)
  }

  return (
    <div>
      <main className='bg-red-400 h-[90vh] flex items-center flex-col'>
        <h1 className='text-4xl font-bold mt-20'>Block any Website by using url Or Name</h1>

      <div className='flex gap-20 mt-25 w-full p-10'>
        <div className='flex flex-col items-center'>
          <div className="bg-gray-500 p-10 text-white text-2xl rounded-2xl flex items-center h-40">
          <label className="font-bold mr-10 whitespace-nowrap">Url :</label>
          <input
          value={url}
          onChange={(e)=>{
            setUrl(e.target.value)
          }}
           className="w-100 outline-2 p-2 rounded-[5px]" placeholder="Enter url"/>
           <button
           type='button'
           onClick={a}
            className="bg-black font-bold px-10 py-2 rounded-[5px] ml-10 active:bg-red-500">Add</button>
        </div>
           <h2 className='text-2xl font-medium text-center mt-35 text-green-500 bg-black rounded-sm w-[40vw] p-5'>Stay safe, and keep your family safe too.</h2>
        </div>
        <div className='shadow-[2px_2px_40px_10px_black] text-[20px] p-5 h-[40vh] w-full overflow-auto bg-gray-800 text-white'>
          <div className=' flex items-center justify-center m-5'>
              <h2 className='text-2xl text-center font-bold mb-5 fixed text-red-500'>Blocked Websites are ...</h2>
            </div> 
          <div className='ml-8'>
            {list.map((e,idx)=>{
              return <div key={idx} className='flex items-center mb-3'>
                <button
                onClick={()=>{
                  remove(idx)
                }}
                 className='font-bold text-red-500 text-2xl -ml-12 fixed bg-white rounded-[10px] px-2 pb-1'>x</button>
                <li className='ml-5'>{e.url}</li>
              </div>
              
            })}
          </div>
        </div>
      </div>
      
      </main>
    </div>
  )
}

export default Dashboard

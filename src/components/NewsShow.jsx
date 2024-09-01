import React, { useContext } from 'react';
import GlobalContext from '../context/Global';
import "../index.css"

const NewsShow = () => {
  let { newsData } = useContext(GlobalContext)

  return (
    <div className='w-full h-full py-16 flex items-center justify-center flex-col'>
      {
        newsData?.map((obj, index) => {
          return (
            <div key={index} className='w-[60%] hover:scale-105 transition-all py-5 my-3 flex flex-col animated-rainbow-border rounded-md' >
              <div className='animated-rainbow-border-content bg-black dark:bg-zinc-200'>
                <a href={obj.link} className='w-full h-full flex items-center justify-between flex-row' target='_blank' rel='noopener noreferrer'>
                  <div className='h-full px-3 flex items-center text-white justify-center'>
                    <div className=' h-14 w-14 flex justify-center items-center'>
                      <img src="/images/newspaper.png" className="h-full w-full" alt="Newspaper Image" />
                    </div>
                  </div>
                  <div className='h-full flex justify-center flex-col'>
                    <p className='text-justify px-5 text-white dark:text-black dark:font-bold'>{obj?.title}</p>
                    <h3 className='pr-5 dark:text-black dark:font-extrabold font-bold py-2 text-end text-white'>-{obj?.source_name}</h3>
                  </div>
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default NewsShow
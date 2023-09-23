import React from 'react'

const TimelineItem = ({event, info, date,  no, eventRev, infoRev, dateRev, noRev}) => {
  return (
    <>
    <div className={`relative flex flex-col justify-between items-start my-4 sm:mb-2  sm:py-0 sm:my-0 sm:items-end sm:flex-row`}>
        <span className={`text-start ml-10 sm:ml-0 sm:w-1/3`}>
          <h1 className={`font-bold text-secondary-2 sm:text-end`}>{event}</h1>
          <p className="text-sm sm:text-end">
          {info}
          </p>
        </span>
        <div className="absolute left-0 bottom-0 flex flex-col items-center sm:w-1/3 sm:relative h-[100%]">
          <span className="w-[5px] gradient rounded h-[100%] sm:mb-2 sm:h-[120px]"></span>
          <span className="rounded-full gradient p-4 w-[5px] h-[5px] flex justify-center items-center font-bold">
           {no}
          </span>
        </div> 
        <h1 className={`flex justify-start ml-10 sm:justify-start font-bold text-secondary-2 sm:ml-0 sm:w-1/3`}>
          {date}
        </h1>
      </div>
      

      <div className={`relative flex flex-col justify-between items-start my-4 sm:mb-2  sm:py-0 sm:my-0 sm:items-end sm:flex-row-reverse`}>
        <span className={`text-start ml-10 sm:ml-0 sm:w-1/3`}>
          <h1 className={`font-bold text-secondary-2 sm:text-start`}>{eventRev}</h1>
          <p className={`text-sm sm:text-end}`}>
          {infoRev}
          </p>
        </span>
        <div className="absolute left-0 bottom-0 flex flex-col items-center sm:w-1/3 sm:relative h-[100%]">
          <span className="w-[5px] gradient rounded h-[100%] sm:mb-2 sm:h-[120px]"></span>
          <span className="rounded-full gradient p-4 w-[5px] h-[5px] flex justify-center items-center font-bold">
           {noRev}
          </span>
        </div> 
        <h1 className={`flex justify-end ml-10 sm:justify-end font-bold text-secondary-2 sm:ml-0 sm:w-1/3`}>
          {dateRev}
        </h1>
      </div>
      </>
  )
}
export default TimelineItem

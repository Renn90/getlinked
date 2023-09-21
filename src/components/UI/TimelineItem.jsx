import React from 'react'

const TimelineItem = ({event, info, date,  no, reverse}) => {
  return (
    <div className={`relative flex flex-col justify-between items-start my-4 sm:mb-2  sm:py-0 sm:my-0 sm:items-end ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <span className={`text-start ml-10 sm:text-${!reverse ? 'end' : 'start'} sm:ml-0 sm:w-1/3`}>
          <h1 className="font-bold text-secondary-2">{event}</h1>
          <p className="text-sm">
          {info}
          </p>
        </span>
        <div className="absolute left-0 bottom-0 flex flex-col items-center sm:w-1/3 sm:relative h-[100%]">
          <span className="w-[5px] gradient rounded h-[100%] sm:mb-2 sm:h-[120px]"></span>
          <span className="rounded-full gradient p-4 w-[5px] h-[5px] flex justify-center items-center font-bold">
           {no}
          </span>
        </div>
        <h1 className={`flex justify-start ml-10 sm:justify-${!reverse ? 'start' : 'end'} font-bold text-secondary-2 sm:ml-0 sm:w-1/3`}>
          {date}
        </h1>
      </div>
  )
}

export default TimelineItem

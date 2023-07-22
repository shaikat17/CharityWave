import LiveEvents from '@/components/Events/LiveEvents/LiveEvents'
import SuccessfulEvents from '@/components/Events/SuccessfulEvents/SuccessfulEvents'
import UpcomingEvents from '@/components/Events/UpcomingEvents/UpcomingEvents'
import React from 'react'

const EventPage = () => {
  return (
    <>
<LiveEvents />
<div className="grid grid-cols-[1fr,.6fr] gap-8 max-w-7xl mx-auto px-5 lg:px-0 my-10">
<UpcomingEvents/>
<SuccessfulEvents/>
</div>
    </>
  )
}

export default EventPage
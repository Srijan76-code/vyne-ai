import { StickyCard002 } from '@/components/ui/skiper-ui/skiper17';
import React from 'react'

const Features = () => {
  const cards = [
  {
    id: 1,
    video: "/landingPage/loopbg.mp4",
    alt: "Description 1",
  },
  {
    id: 2,
    video: "/landingPage/feature.mov",


    alt: "Description 2",
  },
  // Add more cards as needed
];
  return (
   <div className="h-screen  w-full">
      {/* <p>features</p> */}
      <StickyCard002 cards={cards} />
    </div>
  )
}

export default Features
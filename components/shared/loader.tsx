import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div>
      <Image
       src="/load.svg" 
       alt="Loading..." 
       width={100} height={100} 
       className="mx-auto" />
        
    </div>
  )
}

import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <>
      <ul>
        {[1, 2, 4, 5].map((photocard) => {
          return <PhotoCard key={photocard} />
        })}
      </ul>
    </>
  )
}

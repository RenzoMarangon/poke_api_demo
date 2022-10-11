import React from 'react'
import Skeleton from '@mui/material/Skeleton';
const Pokemons_container_skeleton = () => {
  return (
    <div className='skeletons'>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
      <div className='skeleton'>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
    </div>
  )
}

export default Pokemons_container_skeleton
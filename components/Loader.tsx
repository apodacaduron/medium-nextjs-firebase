import React, { FC } from 'react'

export type LoaderProps  = {
  show: boolean;
}

const Loader: FC<LoaderProps> = (props) => {
  return (
    props.show ? <div className="loader" /> : null
  )
}

export default Loader

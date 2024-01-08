import { Footer }    from '@vj-templates'
import React, { FC } from 'react'
import { iLayout }   from '.'


export const UnAuthedLayout: FC<iLayout> = ({args, children}) => {


  return (

    <div className={'layout un-authed'}>

      <div className={`un-authed-content`}>
        {children}
      </div>

      <Footer  />
    </div>
  )
}
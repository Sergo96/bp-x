import { useAppDispatch }       from '@vj-store'
import React, { FC, useEffect } from 'react'
import { iLayout }              from '.'


export const AuthedLayout: FC<iLayout> = ({args, children}) => {
  const {dispatch, Actions} = useAppDispatch()
  useEffect(() => {
    dispatch(Actions.auth.checkIsUser())
  }, [typeof window === 'undefined'])
  return (
    <>

      <div>
        {children}
      </div>

    </>
  );
};

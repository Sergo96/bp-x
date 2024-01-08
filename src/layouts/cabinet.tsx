import { useAppDispatch, useAppSelector } from '@vj-store'
import React, { FC, useEffect }           from 'react'
import { iLayout }                        from '.'


export const CabinetLayout: FC<iLayout> = ({children}) => {
  const {dispatch, Actions} = useAppDispatch()
  const isAuth = useAppSelector(state => state.auth.isAuthed)

  useEffect(() => {
    dispatch(Actions.cabinet.getLinks())

  }, [typeof window !== 'undefined', isAuth])
  return (
    <>

      <div className={"cabinet-page"}>

        <div className={"cabinet-content"}>
          {children}
        </div>
      </div>
    </>
  );
};

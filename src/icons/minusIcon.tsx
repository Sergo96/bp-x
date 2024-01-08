import { Base }       from '@vj-icons/base'
import { iIconProps } from '@vj-icons/index'
import { FC }         from 'react'


export interface iProps extends iIconProps {

}

export const MinusIcon: FC<iProps> = ({...props}) => {
  return (
    <Base viewBox="0 0 16 2" size={16} {...props}>
      <rect width="16" height="2" fill="#FF8760"/>
    </Base>
  )
}


import { Base }       from '@vj-icons/base'
import { iIconProps } from '@vj-icons/index'
import { FC }         from 'react'


export interface iProps extends iIconProps {

}

export const PlusIcon: FC<iProps> = ({...props}) => {
  return (
    <Base viewBox="0 0 16 16" size={16} {...props}>
      <path
        d="M16 7H9V0H7V7H0V9H7V16H9V9H16V7Z"
        fill="#FF8760"
      />
    </Base>
  )
}


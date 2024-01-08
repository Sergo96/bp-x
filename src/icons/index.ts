import { voidFn } from '@vj-types'


export interface iIconProps {
  viewBox?: string
  color?: string
  width?: number
  height?: number
  size?: number
  className?: string
  onClick?: voidFn
  onUnHover?: voidFn
  onHover?: voidFn
}

export { EyeCloseIcon } from './eyeCloseIcon'
export { PlusIcon }     from './plusIcon'
export { MinusIcon }     from './minusIcon'

import classNames                   from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'


interface iProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  active?: boolean,
  adaptive?: boolean
  variant?: 'button' | 'link'
}

export const Button: FC<iProps> = ({
                                     className = '',
                                     active,
                                     disabled,
                                     adaptive,
                                     variant = 'button',
                                     ...props
                                   }) => {
  const buttonClass = classNames({
    ['btn']         : true,
    ['btn-link']    : variant === 'link',
    ['btn-active']  : active,
    ['btn-hover']   : !active && !disabled,
    ['btn-disabled']: disabled,
    ['btn-adaptive']: adaptive,
    [className]     : className,
  })
  return (
    <>
      <button className={buttonClass} {...{disabled, ...props}}/>
    </>
  )
}

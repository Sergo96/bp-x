import { FC }         from 'react'
import { iIconProps } from '.'


export const Base: FC<iIconProps> = ({
                                       onClick,
                                       className,
                                       children,
                                       viewBox,
                                       size,
                                       width,
                                       height,
                                       color,
                                       onUnHover,
                                       onHover,
                                       ...props
                                     }) => (
  <svg
    className={className}
    onClick={onClick}
    viewBox={viewBox || '0 0 24 24'}
    fill={color}
    height={size || height || 24}
    width={size || width || 24}
    onMouseLeave={onUnHover}
    onMouseOver={onHover}
    {...props}
  >
    {children}
  </svg>
)

import classNames             from 'classnames'
import { FC, HTMLAttributes } from 'react'


export type tVariant = 'H1' | 'H2' | 'H3' | 'H4'
export type tComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
export type tTextAlign = 'left' | 'right' | 'center' | 'justify'

interface iProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: tVariant
  component?: tComponent
  value?: string
  textAlign?: tTextAlign
}

export const Typography: FC<iProps> = ({
                                         variant = 'H2',
                                         component,
                                         children,
                                         value,
                                         textAlign='left',
                                         ...props
                                       }) => {

  const Tag = component || 'span'

  const typographyClass = classNames({
    ['typography']   : true,
    ['typography-h1']: variant === 'H1',
    ['typography-h2']: variant === 'H2',
    ['typography-h3']: variant === 'H3',
    ['typography-h4']: variant === 'H4',
    [textAlign]: textAlign,
  })

  return (
    <>
      <Tag className={typographyClass} {...props}>{value || children}</Tag>
    </>
  )
}

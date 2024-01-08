import classNames                     from 'classnames'
import { FC, TextareaHTMLAttributes } from 'react'


interface iProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  active?: boolean
  resizedVertical?: boolean
  resizedHorizontal?: boolean
  scrolled?: boolean,
  errorText?:string
}

export const Textarea: FC<iProps> = ({
                                       className = '',
                                       active,
                                       resizedVertical,
                                       resizedHorizontal,
                                       scrolled,
                                       disabled,
                                       errorText,
                                       ...props
                                     }) => {
  const classTextarea = classNames({
    ['textarea']                  : true,
    ['textarea-active']           : active,
    ['textarea-disabled']         : disabled,
    ['textarea-scrolled']         : scrolled,
    ['textarea-resizedVertical']  : resizedVertical,
    ['textarea-resizedHorizontal']: resizedHorizontal,
    [className]                   : className,
  })
  return (
    <span className={'wrapper'}>
      <textarea className={classTextarea} {...{disabled, ...props}}/>
      {
        errorText ?
          <span className={'error'}>{errorText}</span>
          :
          null
      }
    </span>
  )
}

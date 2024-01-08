import ProgressBar from '@badrap/bar-of-progress'
import { Colors }  from '@my-core/src/constants/colors'
import { Router }  from 'next/router'


export const progress = new ProgressBar({
  size     : 4,
  color    : Colors.active,
  className: 'bar-of-progress',
  delay    : 100,
})

export const initProgressBar = ()=>{
  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)

}
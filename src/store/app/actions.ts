import { iAction }    from '@vj-interfaces/store'
import { tLanguages } from '@vj-types/languages'
import { types }      from './types'


export const actions = {
  changeLanguage: (payload: tLanguages): iAction<tLanguages> => ({type: types.changeLanguage, payload}),

}

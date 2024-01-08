import { AuthedLayout, CabinetLayout, tBaseProps, UnAuthedLayout } from '@vj-layouts'


const defaultPage = {
  universalAccess: false,
  redirectTo     : '/login',

}


export const PageConfigs: { [key: string]: tBaseProps } = {
  Cabinet     : {
    ...defaultPage,
    layout: CabinetLayout,
    title : 'Cabinet',
  },
  About       : {
    ...defaultPage,
    layout: UnAuthedLayout,
    title : 'About',


  },
  Partner     : {
    ...defaultPage,
    layout: UnAuthedLayout,
    title : 'Partner',


  },
  UsersOpinion: {
    ...defaultPage,
    layout: UnAuthedLayout,
    title : 'Users Opinion',


  },

  Payment : {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Payment',
  },
  Branches: {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Branches',
  },
  Report  : {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Report',
  },
  Reviews : {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Reviews',
  },
  Staffs  : {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Staffs',
  },
  Workers : {
    ...defaultPage,
    redirectTo: '/cabinet',
    layout    : CabinetLayout,
    title     : 'Workers',
  },

  Notification: {
    ...defaultPage,
    redirectTo: '/',
    layout    : AuthedLayout,
    title     : 'Notification',
  },
  News        : {
    ...defaultPage,
    layout         : AuthedLayout,
    title          : 'News',
  }
}
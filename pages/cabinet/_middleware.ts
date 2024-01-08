import type { NextRequest } from 'next/server'
import { NextResponse }     from 'next/server'


const userPages = {
  user: [
    '/cabinet',
    '/cabinet/branches',
    '/cabinet/payment',
    '/cabinet/reviews',
    '/cabinet/report',
    '/cabinet/staffs',
    "/cabinet/works",
  ]
}

const getAccess = (url:string, token?:string)=> {
  if (!token) return {data: {redirectTo: '/login'}}
  if (!userPages.user.includes(url)) return {data: {redirectTo: '/cabinet'}}
  return {data: {hasAccess: true}}
}

export async function middleware(req: NextRequest, ) {
  const res = getAccess(req.nextUrl.pathname, req.cookies['auth-token'])

  if (res.data.redirectTo) {
    return NextResponse.redirect(res.data.redirectTo)
  }
  if (res.data.hasAccess)
    return NextResponse.next()
}
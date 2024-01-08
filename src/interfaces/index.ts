export interface iImage{
  url:string
  title?:string
  alt?:string
}
export interface iPartners{
  logo:iImage
  page:string
}
export interface iOpinion{
  name:string
  avatar?:iImage
  opinion:string
  stars:number
  createAt:string
}
export interface iCord {
  x:string | number
  y:string | number
}
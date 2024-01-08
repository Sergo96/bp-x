export interface iAction<T=void> {
    type:string
    payload?:T
}
export type IItems = {
   id: number
   title: string
   completed: boolean
   important: boolean
}

export interface IState {
   items: IItems[]
   status: string
   error: string
}

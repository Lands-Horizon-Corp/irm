import { ReactNode } from 'react'


export interface IBaseComp {
  className?: string
  children?: ReactNode
}

export type IBaseCompChildOnly = Omit<IBaseComp, 'className'>

export type IBaseCompNoChild = Omit<IBaseComp, 'children'>
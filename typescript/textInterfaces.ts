export interface IRecipeText {
  children?: React.ReactNode
  fontSize: number
  fontWeight?: number
  color?: string
  lineHeight?: number
  letterSpacing?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  opacity?: number
  marginLeft?: number
  textDecorationLine?: string
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify'
}

export interface Entry {
  id: string
  date: string
  amount: string
  category: string
}

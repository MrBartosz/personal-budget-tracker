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

export interface SummaryProps {
  totalIncome: number
  totalExpenses: number
  balance: number
}

export interface EntryItemProps {
  item: {
    id: string
    date: string
    amount: number
    category: string
  }
  handleEditEntry: (item: { date: string; amount: number; category: string }) => void
  handleDeleteEntry: (itemId: string) => void
}

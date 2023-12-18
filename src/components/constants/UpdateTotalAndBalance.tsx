import { Entry } from '../../../typescript/textInterfaces'

export const UpdateTotalAndBalance = (
  updatedEntries: Entry[],
  setTotalIncome: React.Dispatch<React.SetStateAction<number>>,
  setTotalExpenses: React.Dispatch<React.SetStateAction<number>>,
  setBalance: React.Dispatch<React.SetStateAction<number>>
) => {
  const income = updatedEntries
    .filter((entry) => entry.category === 'Income')
    .reduce((sum, entry) => sum + parseFloat(entry.amount), 0)

  const expenses = updatedEntries
    .filter((entry) => entry.category === 'Expense')
    .reduce((sum, entry) => sum + parseFloat(entry.amount), 0)

  const balance = income - expenses

  setTotalIncome(income)
  setTotalExpenses(expenses)
  setBalance(balance)
}

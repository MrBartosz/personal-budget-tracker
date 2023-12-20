import React from 'react'
import { View } from 'react-native'
import { VictoryPie } from 'victory-native'
import { theme } from '../../styles/theme'

interface IRenderChart {
  totalIncome: number
  totalExpenses: number
}

export const RenderChart = ({ totalIncome, totalExpenses }: IRenderChart) => {
  const data = [
    { x: 'Income', y: totalIncome },
    { x: 'Expenses', y: totalExpenses },
  ]

  const colorScale = [theme.colors.income, theme.colors.expense]

  return (
    <View>
      <VictoryPie
        padding={{ right: 80, left: 80 }}
        data={data}
        colorScale={colorScale}
        innerRadius={65}
        animate={{
          duration: 2500,
        }}
      />
    </View>
  )
}

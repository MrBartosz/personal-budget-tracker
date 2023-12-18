import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextRegular } from '../typography/Text'
import { GlobalButtton } from '../butttons/GlobalButton'
import { SummaryProps, EntryItemProps } from '../../../typescript/textInterfaces'

export const Summary: React.FC<SummaryProps> = ({ totalIncome, totalExpenses, balance }) => (
  <View style={styles.summaryContainer}>
    <TextRegular fontSize={16} marginBottom={12}>
      Summary
    </TextRegular>
    <Text>Total Income: {totalIncome}</Text>
    <Text>Total Expenses: {totalExpenses}</Text>
    <Text>Balance: {balance}</Text>
  </View>
)

export const EntryItem: React.FC<EntryItemProps> = ({ item, handleEditEntry, handleDeleteEntry }) => (
  <View style={styles.entry}>
    <Text>Date: {item.date}</Text>
    <Text>Amount: {item.amount}</Text>
    <Text>Category: {item.category}</Text>
    <View style={styles.buttonsContainer}>
      <GlobalButtton width={130} title="Edit" submitFunction={() => handleEditEntry(item)} />
      <GlobalButtton width={130} title="Delete" submitFunction={() => handleDeleteEntry(item.id)} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  entry: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})

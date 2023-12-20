import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Entry } from '../../typescript/textInterfaces'
import { GlobalButtton } from '../components/butttons/GlobalButton'
import { TextRegular } from '../components/typography/Text'
import { UpdateTotalAndBalance } from '../components/constants/UpdateTotalAndBalance'
import { EntryItem, Summary } from '../components/constants/EntryComponents'
import { RenderChart } from '../components/chart/RenderChart'

export const MainArea = () => {
  const [entries, setEntries] = useState<Entry[]>([])
  const [isEditingCategory, setIsEditingCategory] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null)
  const [isEditModalVisible, setEditModalVisible] = useState(false)
  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [totalExpenses, setTotalExpenses] = useState<number>(0)
  const [balance, setBalance] = useState<number>(0)
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (field === 'category') {
    }
  }

  const handleFieldFocus = (fieldName: string) => {
    if (fieldName === 'category') {
      setIsEditingCategory(true)
    } else {
      setIsEditingCategory(false)
    }
  }

  const handleEditEntry = (entry: Entry) => {
    setSelectedEntry(entry)
    setFormData(entry)
    setEditModalVisible(true)
  }

  const handleDeleteEntry = (entryId: string) => {
    const updatedEntries = entries.filter((entry) => entry.id !== entryId)
    setEntries(updatedEntries)
    UpdateTotalAndBalance(updatedEntries, setTotalIncome, setTotalExpenses, setBalance)
  }

  const handleAddEntry = () => {
    setIsEditingCategory(false)
    if (!formData.date || !formData.amount || !formData.category) {
      alert('Please fill the field')
      return
    }
    const newEntry: Entry = { id: Date.now().toString(), ...formData }
    setEntries([...entries, newEntry])
    setFormData({ date: '', amount: '', category: '' })
    UpdateTotalAndBalance([...entries, newEntry], setTotalIncome, setTotalExpenses, setBalance)
  }

  const handleUpdateEntry = () => {
    const updatedEntries = entries.map((entry) =>
      entry.id === selectedEntry?.id ? { ...selectedEntry, ...formData } : entry
    )
    setEntries(updatedEntries)
    UpdateTotalAndBalance(updatedEntries, setTotalIncome, setTotalExpenses, setBalance)
    setEditModalVisible(false)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <TextRegular fontSize={16} marginBottom={12}>
          New Entry
        </TextRegular>
        <TextInput
          placeholder="Date"
          value={formData.date}
          onChangeText={(text) => handleInputChange('date', text)}
          style={styles.input}
          onFocus={() => handleFieldFocus('date')}
        />
        <TextInput
          placeholder="Amount"
          value={formData.amount}
          onChangeText={(text) => handleInputChange('amount', text)}
          keyboardType="numeric"
          style={styles.input}
          onFocus={() => handleFieldFocus('amount')}
        />
        <TextInput
          placeholder="Category"
          value={formData.category}
          onChangeText={(text) => handleInputChange('category', text)}
          style={styles.input}
          onFocus={() => handleFieldFocus('category')}
        />
      </View>
      {isEditingCategory && (
        <Picker
          selectedValue={formData.category}
          onValueChange={(itemValue) => handleInputChange('category', itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Income" value="Income" />
          <Picker.Item label="Expense" value="Expense" />
        </Picker>
      )}
      <View style={styles.entryButton}>
        <GlobalButtton width={250} title="Add Entry" submitFunction={handleAddEntry} />
      </View>
      <View style={styles.entriesContainer}>
        {entries.length > 0 ? (
          <FlatList
            data={entries}
            renderItem={({ item }) => (
              <EntryItem item={item} handleEditEntry={handleEditEntry} handleDeleteEntry={handleDeleteEntry} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>No entries to display</Text>
        )}
        <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
        {entries.length > 0 && (
          <View style={styles.chartContainer}>
            <RenderChart totalIncome={totalIncome} totalExpenses={totalExpenses} />
          </View>
        )}
      </View>
      <Modal visible={isEditModalVisible} animationType="slide">
        <View style={styles.editModalContainer}>
          <TextRegular fontSize={16} marginBottom={12}>
            Edit Entry
          </TextRegular>
          <TextInput
            placeholder="Date"
            value={formData.date}
            onChangeText={(text) => handleInputChange('date', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Amount"
            value={formData.amount}
            onChangeText={(text) => handleInputChange('amount', text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Category"
            value={formData.category}
            onChangeText={(text) => handleInputChange('category', text)}
            style={styles.input}
          />
          <GlobalButtton width={250} title="Update Entry" submitFunction={handleUpdateEntry} />
          <GlobalButtton width={250} title="Cancel" submitFunction={() => setEditModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  entriesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
  },
  editModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})

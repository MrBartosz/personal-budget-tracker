import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Entry } from '../../typescript/textInterfaces'

export const MainArea = () => {
  const [entries, setEntries] = useState<Entry[]>([])
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleAddEntry = () => {
    if (!formData.date || !formData.amount || !formData.category) {
      alert('Please fill the field')
      return
    }

    const newEntry: Entry = { id: Date.now().toString(), ...formData }
    setEntries([...entries, newEntry])
    setFormData({ date: '', amount: '', category: '' })
  }

  const renderItem: ListRenderItem<Entry> = ({ item }) => (
    <View style={styles.entry}>
      <Text>Date: {item.date}</Text>
      <Text>Amount: {item.amount}</Text>
      <Text>Category: {item.category}</Text>
    </View>
  )

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
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
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formData.category}
          onValueChange={(itemValue) => handleInputChange('category', itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Income" value="Income" />
          <Picker.Item label="Expense" value="Expense" />
        </Picker>
        <Button title="Add Entry" onPress={handleAddEntry} />
      </View>

      <View style={styles.entriesContainer}>
        {entries.length > 0 ? (
          <FlatList data={entries} renderItem={renderItem} keyExtractor={(item) => item.id} />
        ) : (
          <Text>No entries to display</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
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
  entry: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  pickerContainer: {
    marginBottom: 50,
  },
  picker: {
    flex: 1,
  },
})

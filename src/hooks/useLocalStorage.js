import React, { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [sotredValue, setSotredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const save = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setSotredValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [sotredValue, save]
}

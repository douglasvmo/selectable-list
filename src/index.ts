

import { useState, useEffect } from 'react'


interface ItemObj {
  id: string;
  selected: boolean;

}


type DataType = Array<ItemObj>
type SelectedArray = Array<string> | []

export const createListStore = () => {
  const [data, dataDispatch] = useState<DataType>([])


  const setData = (state: DataType) => {
    const newData = state!.map((item, index) => {
      if (item.id === undefined) {
        item.id = index.toString();
      }
      if (item.selected === undefined) {
        item.selected = false
      }
      return item
    })
    dataDispatch(newData)
  }

  const selectItem = (id: string | "all") => {
    if (id === "all") {
      dataDispatch(prevState => prevState!.map(item => {
        item.selected = true
        return item
      }))

    } else {
      dataDispatch(prevState => prevState!.map(item => {
        if (item.id === id) {
          item.selected = true
        }
        return item
      }))

    }
  }

  const unSelectItem = (id: string | "all") => {

    if (id === "all") {
      dataDispatch(prevState => prevState!.map(item => {
        item.selected = false
        return item
      }))
    } else {
      dataDispatch(prevState => prevState!.map(item => {
        if (item.id == id) {
          item.selected = false
        }
        return item
      }))
    }
  }

  const isSelected = (id: string) => {
    data?.forEach(item => {
      if (item.id === id) {
        return item.selected
      }
    })
  }

  const idOfAllSelectedItems = () => {
    return data?.filter(item => item.selected === true).map(item => item.id)
  }

  const controller = {
    idOfAllSelectedItems,
    isSelected,
    unSelectItem,
    selectItem,

  }


  return [data, setData, controller]

}



import { useState, useEffect } from 'react'


interface ItemObj {
    id: string;
    selected: boolean;

}


type DataType = Array<ItemObj> | null
type SelectedArray = Array<string> | []

export const createListStore = () => {
    const [data, dataDispatch] = useState<DataType>([])


    const setData = (state: DataType) => {
        const newData = state!.map((item, index) => {
            item.id = index.toString();
            item.selected = false
            return item
        })
        dataDispatch(newData)
    }

    const selectItem = (id: string) => {
        dataDispatch(prevState => prevState!.map(item => {
            if (item.id === id) {
                item.selected = true
            }
            return item
        }))
    }

    const unSelectItem = (id: string) => {
        dataDispatch(prevState => prevState!.map(item => {
            if (item.id === id) {
                item.selected = false
            }
            return item
        }))
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


    return {
        idOfAllSelectedItems,
        isSelected,
        unSelectItem,
        selectItem,
        setData,
        data,
    }

}

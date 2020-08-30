import * as React from 'react'
import { FlatList, FlatListProps, TouchableOpacity, StyleProp, StyleSheetProperties, ViewStyle } from 'react-native'

interface ItemObj extends FlatList {
  isSelected: boolean,
  id: string

}

interface FlatListSelectableProps extends FlatListProps<ItemObj> {
  renderItem: any;
  styleSelectedItem?: StyleProp<ViewStyle>,
  styleUnSelectedItem?: StyleProp<ViewStyle>,
  selectedItemId?: Function

}

type DataStateType = Array<ItemObj> | undefined


export const FlatListSelectable: React.FC<FlatListSelectableProps> = (props) => {

  const [data, setData] = React.useState<DataStateType>((): DataStateType => {
    if (props.data) {
      const initialValue = props.data?.map((item, index) => ({ ...item, isSelected: false, id: index.toString() }))
      return initialValue as DataStateType
    }
  })

  React.useEffect(() => {

    if (props.data?.length === 0) {
      return;
    }

    const selectedArray = data?.filter(item => item.isSelected === true)
    const idSelectedItemArray = selectedArray?.map(item => item.id)

    if (props.selectedItemId) {
      props.selectedItemId(idSelectedItemArray)
    }

  }, [data])



  function handleToucheInItem(itemId: string) {
    setData((prevState): DataStateType => prevState?.map(item => item.id === itemId ? { ...item, isSelected: !item.isSelected } : item) as DataStateType)
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={item.isSelected ? props.styleSelectedItem : props.styleUnSelectedItem}
        onPress={() => handleToucheInItem(item.id)}
      >
        {props.renderItem(item)}
      </TouchableOpacity>
    )
  }




  return <FlatList
    contentContainerStyle={{ paddingVertical: 5 }}
    {...props}
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
} 

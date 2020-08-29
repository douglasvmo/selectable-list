import * as React from 'react'
import { FlatList, FlatListProps, TouchableOpacity, StyleProp, StyleSheetProperties } from 'react-native'

interface ItemObj extends FlatList {
  isSelected: boolean,
  id: string

}

interface FlatListSelectableProps extends FlatListProps<ItemObj> {
  renderItem: any;
  styleSelectedItem: StyleSheetProperties,
  styleUnSelectedItem: StyleSheetProperties

}


export const FlatListSelectable: React.FC<FlatListSelectableProps> = (props) => {

  const [data, setData] = React.useState<any>(() => {
    return props.data?.map((item, index) => ({ ...item, isSelected: false, id: index.toString() }))
  })

  React.useEffect(() => {

  }, [data])



  function handleToucheInItem(itemId: string) {
    setData((prevState) => prevState.map(item => item.id === itemId ? { ...item, isSelected: !item.isSelected } : item))
  }
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={item.isSelected ? { ...props.styleSelectedItem } : { ...props.styleUnSelectedItem }}
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

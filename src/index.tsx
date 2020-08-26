import * as React from 'react'
import { FlatList, FlatListProps, TouchableOpacity } from 'react-native'

interface ItemObj extends FlatList {
  isSelected: boolean,
  id: string

}

interface FlatListSelectableProps extends FlatListProps<ItemObj> {
  renderItem: any;
}


export const FlatListSelectable: React.FC<FlatListSelectableProps> = (props) => {

  const [data, setData] = React.useState<any>(() => {
    return props.data?.map((item, index) => ({ ...item, isSelected: false, id: index.toString() }))
  })



  function handleToucheInItem(itemId: string) {
    console.log(itemId)
  }
  function renderItem({ item }) {
    return <TouchableOpacity onPress={() => handleToucheInItem(item.id)}>
      {props.renderItem(item)}
    </TouchableOpacity>
  }




  return <FlatList
    contentContainerStyle={{ paddingVertical: 5}}
    {...props}
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
} 

import * as React from 'react'
import { FlatList, FlatListProps, TouchableOpacity } from 'react-native'

interface ItemObj {
  isSelected: boolean,

}

interface FlatListSelectableProps extends FlatListProps<ItemObj> {
  renderItem: any;
}


export const FlatListSelectable: React.FC<FlatListSelectableProps> = (props) => {

  const [data, setData] = React.useState<any>(() => {
    return props.data?.map(item => ({ ...item, isSelected: false }))
  })



  function handleToucheInItem() {
    console.log(data)
  }
  function renderItem({ item }) {
    return <TouchableOpacity onPress={handleToucheInItem}>
      {props.renderItem()}
    </TouchableOpacity>
  }




  return <FlatList {...props} data={data} renderItem={renderItem} />
} 


# Selectable-list
React Hook for selectable lists

## Installation
```bash
$ npm i selectable-list
```



## Usage
```js
import { createListStore } from 'selectable-list'
```
like a react hook
```js
const App = () => {
  const [data, setData, controller] = createListStore()
...
```
## Controller


| function             | Data Type |     Args        | Description                                       |
|----------------------|-----------|-----------------|---------------------------------------------------|
| selectItem           | string    | item id / "all" | change selected for true.                         |
| unSelectedItem       | string    | item id / "all" | change selected for false.                        |
| isSelected           | string    |     item id     | selection state of the item                       |
| idOfAllSelectedItems |     -     |        -        | return array with id of all selected items.       |

## exemple
```js
  function renderItem({ item }) {

    return (
    <TouchableOpacity onPress={() => controller.selectItem(item.id)}>
      <View>
        <Text >
          {item.text}
        </Text>
        <Text>
          {item.selected ? "true" : "false"}
        </Text>
      </View>
    </TouchableOpacity>
    )
  }
```

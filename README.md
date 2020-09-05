
# Selectable-list
React Hook for selectable lists
## Installation
```bash
$ npm i selectable-list
```

```js
import { createListStore } from 'selectable-list'
```

## Usage
```js
const App = () => {
  const [data, setData, controller] = createListStore()
...
```

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
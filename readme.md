## isabellae

better react hooks

## Usage

Inside your React project directory, run the following:

```
    yarn add isabellae
```

Or with npm:

```
    npm install isabellae
```

Use in your hooks like this:

```javascript
import { useArray } from 'isabellae'

const useUserList = () => {
  const [users, { push, remove }] = useArray([])
  return [users, { addUser: push, deleteUser: remove }]
}
```

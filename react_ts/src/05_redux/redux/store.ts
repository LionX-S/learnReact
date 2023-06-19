import { createStore } from 'redux'

interface IAction {
  type: string,
  [propsName: string]: any
}

const reducer = (prevState = {
  isShow: true
}, action: IAction) => {
  const { type } = action;
  switch (type) {
    case 'show':
      return { ...prevState, isShow: true }
    case 'hide':
      return { ...prevState, isShow: false }
    default:
      return prevState;
  }
}
const store = createStore(reducer);

export default store;
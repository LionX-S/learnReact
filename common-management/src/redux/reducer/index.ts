interface IAction {
  type: string,
  [propName:string]:any
}

interface IState{
  number:number
}
const initialState = {
  number:30
}

export default (state:IState = initialState, action:IAction) => {
  switch (action.type) {

  case '':
    return { ...state, ...action.payload }

  default:
    return state
  }
}

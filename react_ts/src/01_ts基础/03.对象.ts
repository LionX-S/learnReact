// 接口描述对象

interface Person {
  name:string,
  age: number,
  // 可选属性
  height?:number
  // 不关心的属性
  [propName:string]: any
}

var kerwin:Person = {
  name:'kerwin',
  age: 18
} 

export default {}
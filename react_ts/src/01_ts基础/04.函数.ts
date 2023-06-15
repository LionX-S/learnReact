function test(a: string, b: string, c?: number): string {
  return a + b
}

const mergeString: string = test('a', 'b');
console.log(mergeString)

// 接口定义方法
interface IFun {
  (a:string,b:string,c?:number):string
}
var test2:IFun = test 

// 一般将函数与其他属性一起放到接口中
interface IObj {
  name:string,
  age:number,
  getName:()=>string
}
var obj:IObj = {
  name:'fredy',
  age:30,
  getName:() => {
    return obj.name
  }
}
export default {}
// 接口定义了一个规范，规范类里面必须有哪些要实现的方法
interface IFun {
  getName: () => string
}

class A implements IFun {
  name = '12';
  getName() {
    return ''
  }
}

function init(obj:IFun) {
  return obj.getName();
}
init(new A())
export default {}
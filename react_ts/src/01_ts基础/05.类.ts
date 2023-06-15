class Bus {
  // 私有属性，只能在Bus类中访问
  private list: any = [];
  // 公有属性，子类也能访问到
  public name: string = ''
  // 受保护，只能在本身以及继承类上访问
  protected age: number = 12
}

export default {}
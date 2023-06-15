var list: string[] = ['1', '2'];
list.push('12');

var list2: number[] = [1, 2];
list2.push(3);

var list3:(number|string)[] = [1,2,'3'];

// 另一种写法
var list4:Array<string|number> = [1,'2'];

export default {}

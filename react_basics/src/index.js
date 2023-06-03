import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_base/01.class_component';
// import App from './01_base/02.function_component';
// import App from './01_base/03.嵌套组件';
// import App from './01_base/04.组件的样式';
// import App from './01_base/05.事件绑定';
// import App from './01_base/06.ref';
// import App from './01_base/07.state';
import App from './01_base/08.循环渲染';

// ReactDOM.render(<div>111</div>,document.getElementById('root'));

// // JSX原理：会通过babel-jsx将html结构的代码转换为React.createElement()方法执行
// ReactDOM.render(React.createElement('div',{
//   id:'aa',
//   className:'bb'
// },"1111"),document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
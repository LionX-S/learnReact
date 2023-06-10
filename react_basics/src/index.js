import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01_base/01.class_component';
// import App from './01_base/02.function_component';
// import App from './01_base/03.嵌套组件';
// import App from './01_base/04.组件的样式';
// import App from './01_base/05.事件绑定';
// import App from './01_base/06.ref';
// import App from './01_base/07.state';
// import App from './01_base/08.循环渲染';
// import App from './01_base/09.todoList';
// import App from './01_base/10.电影选项卡';
// import App from './01_base/11.setState同步异步';
// import App from './01_base/14.受控组件';
// import App from './01_base/15.父子组件通信';
// import App from './01_base/16.父子通信表单域组件';
// import App from './01_base/17.状态提升';
// import App from './01_base/18.context';
// import App from './01_base/19.插槽';
// import App from './01_base/20.生命周期';
// import App from './01_base/21.shouldUpdate案例';
// import App from './01_base/22.getDerivedStateFromProps';
// import App from './01_base/23.getSnapShotBeforeUpdate';
// import App from './01_base/24.性能优化';
// import App from './01_base/25.swiper组件';
// import App from './02_hooks/1.useState';
// import App from './02_hooks/3.useEffect2';
// import App from './02_hooks/4.useCallback';
// import App from './02_hooks/5.useMemo';
// import App from './02_hooks/6.useRef';
// import App from './02_hooks/7.useContext';
// import App from './02_hooks/8.useReducer';
import App from './02_hooks/9.useReducer2';

// ReactDOM.render(<div>111</div>,document.getElementById('root'));

// // JSX原理：会通过babel-jsx将html结构的代码转换为React.createElement()方法执行
// ReactDOM.render(React.createElement('div',{
//   id:'aa',
//   className:'bb'
// },"1111"),document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
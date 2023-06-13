import React, { useEffect } from "react";
import { connect } from "react-redux";

function Detail(props) {
	let { changeDisplay } = props;
	useEffect(() => {
		console.log("create");
		// 分发dispatch
		// store.dispatch({
		//   type: 'hide'
		// })
		changeDisplay("hide");
		return () => {
			console.log("destroy");
			// store.dispatch({
			//   type: 'show'
			// })
			changeDisplay("show");
		};
	}, [changeDisplay]);
	return <div>Detail</div>;
}

const mapStateToProps = null;
const mapDispatchToProps = {
	changeDisplay(type) {
		return {
			type
		};
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);


function myConnect(getState,getDispatch){
  let stateList = getState&&getState();
  return (MyComponent) => {
    // 导出的为高阶组件，传入props参数接收props
    return (props) => {
      return <div>
        <MyComponent {...props} {...stateList} {...getDispatch}></MyComponent>
      </div>
    }
  }
}
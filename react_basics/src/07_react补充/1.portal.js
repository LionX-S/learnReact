import React, { Component } from "react";
import Dialog from "./components/Dialog";
import PortalDialog from "./components/PortalDialog";

export default class App extends Component {
	state = {
		isShowDialog: false,
    isShowPortal: false
	};
	render() {
		return (
			<div style={{display: 'flex', width:'100%', height:'100vh'}}>
				<div style={{width: '100px', height:'100%', backgroundColor: 'red',zIndex:'10'}}>left</div>
				<div style={{flex:1,backgroundColor:'yellow',zIndex:'5'}}>
					<button
						onClick={() => {
							this.setState({
								isShowDialog: true
							});
						}}>
						isShowDialog
					</button>
          <button
						onClick={() => {
							this.setState({
								isShowPortal: true
							});
						}}>
						isShowPortal
					</button>
					{this.state.isShowDialog && <Dialog />}
					{this.state.isShowPortal && <PortalDialog />}
				</div>
			</div>
		);
	}
}

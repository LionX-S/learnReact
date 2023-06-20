import React, { Component } from "react";
import { createPortal } from "react-dom";
export default class PortalDialog extends Component {
	render() {
		return createPortal(
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					left: 0,
					top: 0,
					background: "rgba(0,0,0,0.7)",
          zIndex:999
				}}>
				PortalDialog
			</div>,
			document.body
		);
	}
}

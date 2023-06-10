import React, { Component } from "react";
import Swiper, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

export default class FSwiper extends Component {
	state = {
		list: [1, 2, 3]
	};
	componentDidMount() {
		new Swiper(".swiper", {
			modules: [Pagination],
			pagination: {
				el: ".swiper-pagination"
			}
		});
	}
	render() {
		return (
			<div>
				<div className='swiper'>
					<div className='swiper-wrapper'>
						{this.props.children}
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</div>
		);
	}
}

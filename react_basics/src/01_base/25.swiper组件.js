import React, { Component } from 'react'
import FSwiper from './NavBar/Swiper';
import FSwiperItem from './NavBar/SwiperItem';

export default class App extends Component {
	render() {
		return (
			<div>
				<FSwiper>
					<FSwiperItem>111</FSwiperItem>
					<FSwiperItem>222</FSwiperItem>
					<FSwiperItem>333</FSwiperItem>
				</FSwiper>
			</div>
		)
	}
}

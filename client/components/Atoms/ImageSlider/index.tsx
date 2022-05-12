import React, { useCallback, useRef } from 'react'
import Slider from 'react-slick'
import { ServerURL } from '../../../Utils/ServerURL';
import { ControlBtn, SliderImg, SlideWrapper } from './styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ images }: { images: Array<string | null> }) => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <div><ControlBtn><img src="/prev.png" /></ControlBtn></div>,
		nextArrow: <div><ControlBtn><img src="/next.png" /></ControlBtn></div>,
	};



	return (
		<SlideWrapper>
			<Slider {...settings} >
				{images?.map((image) => {
					return <div><SliderImg src={`${ServerURL}/${image}` || ""} /></div>
				})}
			</Slider>
		</SlideWrapper>
	)
}

export default ImageSlider
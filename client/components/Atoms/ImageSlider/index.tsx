import React, { useCallback, useRef } from 'react'
import Slider from 'react-slick'
import { ServerURL } from '../../../Utils/ServerURL';
import { ControlBtn, NextBtn, PrevBtn, SliderImg, SlideWrapper } from './styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ images }: { images: Array<string | null> }) => {

	const sliderRef = useRef<any>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const handleNextCarousel = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current?.slickNext();
	}, [])

	const handlePrevCarousel = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current?.slickPrev()
	}, [])


	return (
		<SlideWrapper>
			<Slider {...settings} ref={sliderRef}>
				{images?.map((image, idx) => {
					return <div key={idx + 1000} ><SliderImg src={`${ServerURL}/${image}` || ""} /></div>
				})}
			</Slider>
			<PrevBtn><ControlBtn onClick={handlePrevCarousel}><img src="/prev.png" /></ControlBtn></PrevBtn>
			<NextBtn><ControlBtn onClick={handleNextCarousel}><img src="/next.png" /></ControlBtn></NextBtn>
		</SlideWrapper>
	)
}

export default ImageSlider
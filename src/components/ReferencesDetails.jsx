import React, {useEffect, useRef, useState} from "react";
import { IoMdClose } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { BsCalendarCheckFill, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

const ReferencesDetails = ({ reference }) => {
    const text = reference.acf.text.split('\r\n');
    const title = reference.title.rendered;
    const location = reference.acf.ort;
    const jear = reference.acf.baujahr;
    let url = reference.acf.photo_gallery.photo[0];
    let idx = 0;

    return (
        <ScrollIntoView selector="#object">
            <div className={`bg-white w-[96%] h-fit mt-5 pb-10 ml-4 px-[2%] rounded-xl shadow-lg`}>
                <Link to={'/referenzen'}>
                    <IoMdClose className="ml-auto mt-5" size={30} />
                </Link>
                <div className="flex flex-wrap" id='object' >
                    <div className="w-[500px] h-[280px] ml-10 mb-5">
                        <ImageSlider slides={url} />
                    </div>
                    <div className="ml-20 max-w-[800px]">
                        <h1 className=" text-4xl">{title}</h1>
                        <div className="mt-5 flex">
                            <div className="flex bg-blue-100 rounded-xl w-fit px-2 mr-2">
                                <ImLocation2 className="mt-1 w-4 h-4 mr-1" />
                                <h2>{location}</h2>
                            </div>
                            <div className="flex bg-blue-100 rounded-xl w-fit px-2 mx-2">
                                <BsCalendarCheckFill className="mt-1 w-4 h-4 mr-1" />
                                <h2>{jear}</h2>
                            </div>
                        </div>
                        <div className="pt-2">
                            {text.map((zeile, index) => (
                                <React.Fragment key={index}>
                                    <p
                                        key={index}
                                        dangerouslySetInnerHTML={{ __html: zeile }}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollIntoView>
    );
}

export default ReferencesDetails;

const ImageSlider = ({slides, parentWidth}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    if(slides.length === 0){
        slides[0] = {
            full_image_url: "http://localhost/wordpress/wp-content/uploads/2024/02/image-not-found-icon.png",
        }
    }

    return(
        <div className="w-full h-full relative group">
            <div className="w-full h-full rounded-xl bg-center bg-cover duration-500" style={{backgroundImage: `url(${slides[currentIndex].full_image_url})`}}/>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            {/* Image */}
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => {setCurrentIndex(slideIndex)}}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
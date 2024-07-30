"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ReviewCard: React.FC<ReviewCardProps> = ({ name, occupation, review, profileURL, workImgURL, quoteSvg, rating }) => {
    return (
      <div className="p-5 rounded-[15px] bg-[#fff] w-[900px] h-auto mx-auto">
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col justify-evenly">
              <div className="flex items-start pr-10">
                <img src={quoteSvg} alt="" />
                <p className='w-full pl-10'>{review}</p>
              </div>
              <div className="flex justify-center w-full">
                <img src='/icons/reviewVector.svg' alt="" />
              </div>
              <div className="flex justify-between px-10">
                <div className="flex">
                    <img src={profileURL} alt="profile img" className='rounded-full w-[60px] h-[60px] object-cover'/>
                    <div className="flex flex-col pl-6">
                        <p>{name}</p>
                        <p>{occupation}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {rating.map((url,index)=>(
                        <img key={index} src={url} alt="rating icon" className='w-[20px]' />
                    ))}
                </div>
              </div>
            </div>
            <div className="col-span-1">
                <img src={workImgURL} alt="work img" className='rounded-[10px] h-[400px] w-[300px] object-cover' />
            </div>
        </div>
      </div>
    );
  };
  
  const Carousel: React.FC<{ reviews: ReviewCardProps[] }> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHoverNext, setIsHoveredNext] = useState(false);
    const [isHoverPrev, setIsHoveredPrev] = useState(false);
  
    const goToNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % reviews.length);
    };
  
    const goToPreviousSlide = () => {
      setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };
  
    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };
  
    return (
        <div className="overflow-hidden relative py-[50px]">
            <div className="flex transition-transform duration-200 ease-in-out bg-[#f5f5f5]" >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                    <ReviewCard {...review} />
                    </div>
                ))}
            </div>
            <div className="controls px-10">
                <button 
                  onClick={goToPreviousSlide} 
                  className="pagination_btn"
                  onMouseEnter={() => setIsHoveredPrev(true)}
                  onMouseLeave={() => setIsHoveredPrev(false)}
                >
                  {isHoverPrev ? (
                    <Image src="/icons/arrow-left-hover.svg" alt="Previous" width={18} height={18}/>
                  ): (
                    <Image src="/icons/arrow-left.svg" alt="Previous" width={18} height={18}/>
                  )}
                  
               </button>

               <button 
                  onClick={goToNextSlide} 
                  className="pagination_btn"
                  onMouseEnter={() => setIsHoveredNext(true)}
                  onMouseLeave={() => setIsHoveredNext(false)}
                >
                  {isHoverNext ? (
                    <Image src="/icons/arrow-right-hover.svg" alt="Previous" width={18} height={18}/>
                  ): (
                    <Image src="/icons/arrow-right.svg" alt="Previous" width={18} height={18}/>
                  )}
                  
               </button>
            </div>
            <div className="pagination">
                {reviews.map((_, index) => (
                    <button
                    key={index}
                    className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <div className="w-[30%] mx-auto">
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}></div>
                </div>
            </div>
            
      </div>
    );
  };
  
  
  export default Carousel;
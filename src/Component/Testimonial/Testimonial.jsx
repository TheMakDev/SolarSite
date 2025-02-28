import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next.png"
import back_icon from "../../assets/back.png"
import user from "../../assets/user.jpg"



const Testimonial = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user} alt="" />
                            <div className="">
                                <h3>James Samuel</h3>
                                <span>The Mak Nig</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my Degree at Dev Mak was one of the best decision I've ever made. The supportive community, state od the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user} alt="" />
                            <div className="">
                                <h3>James Samuel</h3>
                                <span>The Mak Nig</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my Degree at Dev Mak was one of the best decision I've ever made. The supportive community, state od the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user} alt="" />
                            <div className="">
                                <h3>James Samuel</h3>
                                <span>The Mak Nig</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my Degree at Dev Mak was one of the best decision I've ever made. The supportive community, state od the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user} alt="" />
                            <div className="">
                                <h3>James Samuel</h3>
                                <span>The Mak Nig</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my Degree at Dev Mak was one of the best decision I've ever made. The supportive community, state od the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial
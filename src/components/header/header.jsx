import './header.scss'
import "boxicons"
import Brand from "../../assets/img/movies-brand.png"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';


function Header() {

    return (

        <section className='header-section'>

            <div className="header-container">

                <div className="header-wrapper">

                    <nav className='navbar'>

                        <ul className='nav-list'>

                            <img src={Brand} alt="Logo" width={'100px'} />

                            <li><a href="#">Home</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">Genre</a></li>
                            <li><a href="#">Country</a></li>
                            <li><a href="#">Year</a></li>

                        </ul>

                        <form>

                            <box-icon color={'white'} name='search-alt-2'></box-icon>
                            <input className='search-input' type="text" placeholder='Enter keywords...' />

                        </form>

                    </nav>

                </div>

                <div className="hero-wrapper">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide className='SwiperSlide_One'>

                            <h1 className='movie-name'>Movie Name</h1>

                            <p className='movie-about'><span>HD</span> Duration: 91 min IMDB: 2.8 Genre: Action, Adventure</p>

                            <p className='movile-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloribus odio obcaecati maxime officia illo quaerat corporis, dolore explicabo ducimus pariatur eaque dolorum veniam architecto aperiam! Nobis voluptatibus laborum excepturi.</p>

                            <a className='watch-btn' href="#">Watch Now</a>

                        </SwiperSlide>

                        <SwiperSlide className='SwiperSlide_Two'>

                            <h1 className='movie-name'>Movie Name</h1>

                            <p className='movie-about'><span>HD</span> Duration: 91 min IMDB: 2.8 Genre: Action, Adventure</p>

                            <p className='movile-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloribus odio obcaecati maxime officia illo quaerat corporis, dolore explicabo ducimus pariatur eaque dolorum veniam architecto aperiam! Nobis voluptatibus laborum excepturi.</p>

                            <a className='watch-btn' href="#">Watch Now</a>

                        </SwiperSlide>

                        <SwiperSlide className='SwiperSlide_Three'>

                            <h1 className='movie-name'>Movie Name</h1>

                            <p className='movie-about'><span>HD</span> Duration: 91 min IMDB: 2.8 Genre: Action, Adventure</p>

                            <p className='movile-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloribus odio obcaecati maxime officia illo quaerat corporis, dolore explicabo ducimus pariatur eaque dolorum veniam architecto aperiam! Nobis voluptatibus laborum excepturi.</p>

                            <a className='watch-btn' href="#">Watch Now</a>

                        </SwiperSlide>

                        <SwiperSlide className='SwiperSlide_Four'>

                            <h1 className='movie-name'>Movie Name</h1>

                            <p className='movie-about'><span>HD</span> Duration: 91 min IMDB: 2.8 Genre: Action, Adventure</p>

                            <p className='movile-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloribus odio obcaecati maxime officia illo quaerat corporis, dolore explicabo ducimus pariatur eaque dolorum veniam architecto aperiam! Nobis voluptatibus laborum excepturi.</p>

                            <a className='watch-btn' href="#">Watch Now</a>

                        </SwiperSlide>

                    </Swiper>


                </div>

            </div>

        </section>
    )
}

export default Header
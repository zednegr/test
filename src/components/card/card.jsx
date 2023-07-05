import './card.scss'
import CardOne from '../../assets/img/card-supra-1.jpg'
import { MovieData } from '../data/data'


function Card() {

    return (

        <section className='card-section'>

            <div className="container">

                <div className="card-wrapper">

                    <div className="about-wrapper">

                        <div className="card-trending">

                            <h3 className='card_h3'>Trending</h3>

                            <div className="card_btns">

                                <button className='card_btn-one'>Movies</button>

                                <button className='card_btn-two'>Tv Shows</button>

                            </div>

                        </div>

                        <div className="c_w-more">

                            <div className="w-more">
                                <a href="#">View More</a>
                            </div>

                        </div>
                    </div>

                    <div className="cards">

                        {
                            MovieData.map((item) => {

                                return (
                                    <div className="card">

                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>

                                        <div className="card-about">
                                            <h3>{item.name}</h3>

                                            <div className="c_about">
                                                <p>{item.min}</p>

                                                <span>Movie</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                    <div className="about-wrapper">

                        <div className="card-trending">

                            <h3 className='card_h3'>Latest Movies</h3>

                        </div>

                        <div className="c_w-more">

                            <div className="w-more">
                                <a href="#">View More</a>
                            </div>

                        </div>

                    </div>

                    <div className="cards">

                        {
                            MovieData.map((item) => {

                                return (
                                    <div className="card">

                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>

                                        <div className="card-about">
                                            <h3>{item.name}</h3>

                                            <div className="c_about">
                                                <p>{item.min}</p>

                                                <span>Movie</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Card
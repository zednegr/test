import './footer.scss'
import Brand from "../../assets/img/movies-brand.png"

function Footer() {

    return (

        <section className='footer-section'>

            <div className="container">

                <div className="footer-wrapper">

                    <div className="f-one">

                        <img width={'100px'} src={Brand} alt="Brand" />

                        <p className='f_one-p'>FMovies is the best free streaming site 2023, where you can watch movies online for free, no registration required. With a large database and great features, we're confident that FMovies is the best free online movie site in the space you just can't miss!</p>
                            
                        <h5 className='f_one-h5'>Connent with us on Twitter</h5>
                    </div>

                    <div className="f-two">

                        <h5 className='f_two-h5'>Links</h5>

                        <ul className='f_two-list'>

                            <li>Movies</li>
                            <li>TV-shows</li>
                            <li>Most Watched</li>

                        </ul>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer
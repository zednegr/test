import './hero.scss'
import 'boxicons'

function Hero() {

    return (

        <section className='hero-section'>

            <div className="container">

                <div className="hero-wrapper">

                    <div className="hero-btns">

                        <button id="myButton" className='h_btn-one'>

                        <box-icon color={'white'} type='logo' name='facebook'></box-icon>

                        <p>594</p>                            

                        </button>

                        <button id="myButton" className='h_btn-two'>

                        <box-icon color={'white'} name='twitter' type='logo' ></box-icon>

                        <p>312</p>                            

                        </button>

                        <button id="myButton" className='h_btn-three'>

                        <box-icon color={'white'} type='logo' name='whatsapp'></box-icon>

                        <p>414</p>                            

                        </button>

                        <button id="myButton" className='h_btn-four'>

                        <box-icon color={'white'} type='logo' name='telegram'></box-icon>

                        <p>227</p>                            

                        </button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
import logo from './logo.svg';
import phone from './phone.png';
import money from './money.png';
import slide from './slide.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="app">
      <div className='app__gradient'/>
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <main className='app__main'>
        <section className='app__welcome'>
          <div className='app__welcome-left'>
            <h1 className='app__welcome-heading'>
              <span>BEST</span> PREDICTION CHANNEL <br/>IN <span>SPORTS BETTING</span>
            </h1>
            <div className='app__welcome-buttons'>
              <a href="https://google.com" className='app__welcome-button'>
                <i className="fa fa-paper-plane"></i>
                JOIN <span>TELEGRAM</span>
              </a>
              <a href="https://google.com" className='app__welcome-button' className='app__welcome-button' onClick={() => console.log('here')}>
                <i className="fa fa-unlock"></i>
                FREE <span>VIP</span> ACCESS
              </a>
            </div>
          </div>
          <div className='app__welcome-right'>
            <img src={phone} className="app__phone" alt="phone" />
          </div>
        </section>
        <section className='app__slider'>
          <h2 className='app__welcome-heading'>OUR <span>MEMBERS</span> REVIEWS</h2>
          <div className='app__slider-wrapper'>
            <Carousel showThumbs={false} showStatus={false}>
                <div className='kek'>
                    <img src={slide} />
                    <img src={slide} />
                    <img src={slide} />
                </div>
                <div className='kek'>
                    <img src={slide} />
                    <img src={slide} />
                    <img src={slide} />
                </div>
                <div className='kek'>
                    <img src={slide} />
                    <img src={slide} />
                    <img src={slide} />
                </div>
            </Carousel>
          </div>
        </section>
        <section className='app__banner'>
          <div className='app__banner-content'>
            <h2 className='app__welcome-heading'>WANT TO <span>JOIN</span> “FREE VIP”?</h2>
            <img src={money} className="app__money" alt="money" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

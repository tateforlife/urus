import logo from './logo.svg';
import phone from './phone.png';
import money from './money.png';
import slide from './slide.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export function useMediaQuery(query) {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

function App() {
  const matches = useMediaQuery('(min-width: 1023px)')

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
              <a href="https://google.com" className='app__welcome-button' onClick={() => console.log('here')}>
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
            {
              matches ? (
<Carousel showThumbs={false} showStatus={false}>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
            </Carousel>
              ) : (
<Carousel showThumbs={false} showStatus={false}>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
                <div className='kek'>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                    <div className='slide_wrapper'>
                      <img src={slide} alt="alt" />
                    </div>
                </div>
            </Carousel>
              )
            }
          </div>
        </section>
        <section className='app__banner'>
          <div className='app__banner-content'>
            <h2 className='app__welcome-heading'>WANT TO <span>JOIN</span> “FREE VIP”?</h2>
            <img src={money} className="app__money" alt="money" />
          </div>
        </section>
        <section className='app__questions'>
          <h2 className='app__welcome-heading'>HAVE A QUESTION?</h2>
          <div onClick={() => openInNewTab('https://stackoverflow.com')} className='app__questions-button'>
            <h4>YES, I WANT <span>“FREE VIP”</span></h4>
            <h5>Tap here & DM “FREE VIP”</h5>
          </div>
        </section>
      </main>
      <footer>
        <div className='socials'>
          <a href="https://google.com" className="fa fa-paper-plane"> </a>
          <a href="https://google.com" className="fa fa-twitter"> </a>
          <a href="https://google.com" className="fa fa-instagram"> </a>
        </div>
        <div className='copyright'>© Urus Picks, 2023</div>
      </footer>
    </div>
  );
}

export default App;

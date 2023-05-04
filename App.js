import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <header>
      <h1>Turners Exhuberant Auction Centre 
      </h1>
    </header>

    <main>
      <h2>Car Listings</h2>

      <div className="car-listings">
        <div className="car-listing">
          <img src="https://content.tgstatic.co.nz/photos/good//Cars/Used-Cars-for-Sale/nissan/navara/23441682-23441682_16526469_gallery.jpg" alt="Car 1" />
          <h2>Nissan </h2>
          <p>A tradie's best friend</p>
        </div>

        <div className="car-listing">
          <img src="https://content.tgstatic.co.nz/photos/good/2011-ford-falcon-23533480_16717568.jpg" alt="Car 2" />
          <h2>Ford Falcon</h2>
          <p>A kiwi's favourite</p>
        </div>

        <div className="car-listing">
          <img src="https://content.tgstatic.co.nz/photos/good/2004-ford-transit-23482034_16589876_gallery.jpg" alt="Car 3" />
          <h2>Ford Transit</h2>
          <p>A campervan's converter's wet dream</p>
        </div>

        <div className="car-listing">
          <img src="https://content.tgstatic.co.nz/photos/good/2001-audi-tt-23386804_16350495.jpg" alt="Car 4" />
          <h2>Audi TT</h2>
          <p>Look at that boot! 3 Whole goats fit in there!</p>
        </div>
      </div>


      {/* <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/20274694-e333-410b-9ba9-d8b4eecb224f">
</iframe> */}
    </main>

      
    </div>
  );
}

export default App;

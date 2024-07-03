
import './App.css';
import image from './illustration-article.svg';
import avatar from './image-avatar.webp';

function App() {
  return (
    
      <form className='forms'>

          <div className='img'>
            <img src={image} className="App-logo" alt="Gregg " />

          </div>
          <div>
            <button className='btn'>
              Learning
            </button>
          </div>
          <div>
            <p className='dates'>
              published 21 Dec 2023
            </p>
          </div>
          <div className='parts'>
            HTML & CSS foundation


          </div>
          <div className='para'>
            These language are the backbone of every website, defining structure, content and presentation
          </div>
          <div className='name'>
            <img src={avatar} className="ava"  />
            <p >
              Greg Hooper
            </p>
            

          </div>
      </form>
          
      
     
      
    
  );
}

export default App;

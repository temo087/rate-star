import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleButtonClick = (value) => {
    setShow(value);
  };

  const handleSubmit = () => {
    if (show !== 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="main">
        {submitted ? (
          <div className="submitted-card">
            <img className='autism' src="./payment.svg" alt="" />
            <div className="selectdiv">
              <p className='select'>You selected {show} out of 5</p>
            </div>
            <h1 className='madloba'>Thank you!</h1>
            <p className='ptag'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        ) : (
          <>
            <header>
              <img src="./star.svg" alt="" />
            </header>

            <h1 className='h1'>How did we do?</h1>
            <p className='p'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="circles">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleButtonClick(value)}
                  className={`wre ${show === value ? 'selected' : ''}`}
                >
                  {value}
                </button>
              ))}
            </div>

            <button onClick={handleSubmit} className='btn'>SUBMIT</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
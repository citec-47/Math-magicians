import { useState, useEffect } from 'react';
import myImage from './loadin.gif';
import './quotes.css';

const MyQuotation = () => {
  const [myQuotation, setMyQuotation] = useState('');
  const [authorOfquote, setAuthorOfquote] = useState('');
  const [quoteLoading, setLoadingQuote] = useState(true);
  const [quoteError, setQuoteError] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/cryptosymbols',
          {
            headers: {
              'X-Api-Key': 'bIjYCDyNgX1RI/dP1mdaMQ==JiMou8R3AeWdO2LE',
            },
          },
        );
        const data = await response.json();
        setMyQuotation(data[0].quote);
        setAuthorOfquote(data[0].author);
        setLoadingQuote(false);
      } catch (error) {
        setQuoteError('Something went wrong!');
      }
    };

    setTimeout(() => {
      fetchQuotes();
    }, 3000);
  }, []);

  return (
    <>
      <center>
        <div className="myQuotation">
          <p className="quotes">{myQuotation}</p>
          <p className="authorQuotes">{authorOfquote}</p>
          {quoteLoading && <img src={myImage} alt="Loading..." className="images" />}
          {quoteError && <p className="error">{quoteError}</p>}
        </div>
      </center>
    </>
  );
};

export default MyQuotation;

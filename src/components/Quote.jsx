import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quoteSlice";
import "../index.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, loading, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className="quote-container">
      <h1>📜 Random Quote Generator</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {quote && (
        <div className="quote-box">
          <p className="quote-text">"{quote.content}"</p>
          <p className="quote-author">- {quote.author}</p>
        </div>
      )}
      <button onClick={() => dispatch(fetchQuote())} className="quote-btn">
        Get New Quote
      </button>
    </div>
  );
};

export default Quote;

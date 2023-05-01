/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Routes, Route } from 'react-router-dom';
import './hearder.css';
import MyCalculator from '../scientificcalculator/calculate';
import MyQuotation from '../quotations/quotes';
import Home from '../home/home';

const Header = () => (
  <>
    <nav>
      <h1>Math magicians</h1>
      <ul className="link-holder">
        <li className="links"><Link to="/">Home</Link></li>
        <li className="links"><Link to="/calculator">Calculator</Link></li>
        <li className="links"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<MyCalculator />} />
      <Route path="/quote" element={<MyQuotation />} />
    </Routes>
  </>
);

export default Header;

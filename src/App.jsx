import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './containers/Main/Main.jsx';
import Docs from './containers/Docs/Docs.jsx';
import Pricing from './containers/Pricing/Pricing.jsx';
import Support from './containers/Support/Support.jsx';
import ContactForm from './containers/ContactForm/ContactForm.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useEffect, useReducer, useRef } from 'react'
import { reducer, initialState } from './state-management/reducer.js';
import { CustomContext } from './state-management/app-context.js';

const PageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Page call invoked at: ', location.pathname);
    window.analytics?.page(location.pathname);
  }, [location.pathname]); // Ensure effect runs when pathname changes

  return null; // No UI needed, only runs effect
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const stateRef = useRef(state);
  
  useEffect(() => {
      stateRef.current = state;
  }, [state]);

  return (
    <CustomContext.Provider value={{ state, dispatch }}>
      <Router>
        <PageTracking />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </CustomContext.Provider>
  );
};



export default App;
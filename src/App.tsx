import './App.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-datepicker/dist/react-datepicker.css";
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/auth';
import { CheckoutProvider } from './context/checkout';
import { Bp1 } from './pages';
import { AgreementAccept } from './pages/agreementAccept';
import { KybSuccess } from './pages/kybSucess';
import { KycSuccess } from './pages/kycSucess';
import { apolloClient } from './services';

function App() {

  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <CheckoutProvider>
            <Routes>
              <Route path='/kyc-success' element={<KycSuccess />} />
              <Route path='/kyb-success/:partnerId' element={<KybSuccess />} />
              <Route path='/agreement-accept' element={<AgreementAccept />} />
              <Route path='/*' element={<Bp1 />} />
            </Routes>
          </CheckoutProvider>
          <ToastContainer />
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;

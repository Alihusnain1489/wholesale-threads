
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CustomerServices from './pages/CustomerServices';
import SizeGuide from './pages/SizeGuide';
import ShippingInfo from './pages/ShippingInfo';
import Returns from './pages/Returns';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/customer-services" element={<CustomerServices />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

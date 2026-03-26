import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceCategory from './pages/ServiceCategory';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import InsightArticle from './pages/InsightArticle';
import InsightArticleBRSR from './pages/InsightArticleBRSR';
import Tools from './pages/Tools';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Portal from './pages/Portal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/category/:categorySlug" element={<ServiceCategory />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/article" element={<InsightArticle />} />
          <Route path="/insights/brsr-core" element={<InsightArticleBRSR />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

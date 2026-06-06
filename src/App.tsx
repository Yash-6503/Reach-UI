import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductLite from './pages/ProductLite';
import ProductPro from './pages/ProductPro';
import ProductEnterprise from './pages/ProductEnterprise';
import Technology from './pages/Technology';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import SolutionDoctors from './pages/solutions/Doctors';
import SolutionNGO from './pages/solutions/NGO';
import SolutionCSR from './pages/solutions/CSR';
import SolutionCorporate from './pages/solutions/Corporate';

type PageType = 'home' | 'product-lite' | 'product-pro' | 'product-enterprise' | 'technology' | 'support' | 'faq' | 'about' | 'contact' | 'resources' | 'solutions-doctors' | 'solutions-ngo' | 'solutions-csr' | 'solutions-corporate';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'product-lite':
        return <ProductLite />;
      case 'product-pro':
        return <ProductPro />;
      case 'product-enterprise':
        return <ProductEnterprise />;
      case 'technology':
        return <Technology />;
      case 'support':
        return <Support />;
      case 'faq':
        return <FAQ />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'resources':
        return <Resources />;
      case 'solutions-doctors':
        return <SolutionDoctors />;
      case 'solutions-ngo':
        return <SolutionNGO />;
      case 'solutions-csr':
        return <SolutionCSR />;
      case 'solutions-corporate':
        return <SolutionCorporate />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

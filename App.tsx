
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import { NAV_ITEMS } from './constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
          CHEONG-AEN <span className="font-light">PET CARE</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`text-sm font-bold tracking-wide transition-all hover:text-emerald-500 ${isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className={`text-xs px-4 py-1.5 border-2 rounded-full transition-all hover:bg-emerald-800 hover:text-white ${isScrolled ? 'border-stone-200 text-stone-400' : 'border-white/30 text-white/70'}`}
          >
            관리자
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl py-10 px-8 flex flex-col gap-6 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-stone-800 border-b border-stone-100 pb-4"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-stone-400 py-2">관리자 로그인</Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-stone-50 py-20 border-t border-stone-100 text-stone-600">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-emerald-900 mb-6">CHEONG-AEN PET CARE</h3>
        <p className="max-w-md mb-8 leading-relaxed text-lg">
          아이들의 행복이 곧 보호자의 행복입니다. <br />
          국내 최고의 전문 인력과 시설로 <br />
          당신의 소중한 동반자를 케어합니다.
        </p>
        <div className="flex gap-6">
          <span className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all cursor-pointer">IG</span>
          <span className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all cursor-pointer">YT</span>
        </div>
      </div>
      <div>
        <h4 className="text-stone-900 font-bold mb-8">Quick Links</h4>
        <ul className="space-y-4 font-medium">
          {NAV_ITEMS.map(item => (
            <li key={item.path}><Link to={item.path} className="hover:text-emerald-800 transition-colors">{item.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-stone-900 font-bold mb-8">Contact Info</h4>
        <p className="mb-4 flex items-center gap-2"><strong>TEL:</strong> 02-1234-5678</p>
        <p className="mb-4 flex items-center gap-2"><strong>ADR:</strong> 서울특별시 강남구 도산대로 456</p>
        <p className="text-sm text-stone-400 mt-10 italic">© 2024 Cheong-Aen Pet Care Center. <br />All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/tour" element={<div className="py-60 text-center text-4xl font-bold bg-stone-50">시설 안내 (준비중)</div>} />
            <Route path="/treatments" element={<div className="py-60 text-center text-4xl font-bold bg-stone-50">메디컬 케어 (준비중)</div>} />
            <Route path="/therapy" element={<div className="py-60 text-center text-4xl font-bold bg-stone-50">미용/스파 (준비중)</div>} />
            <Route path="/community" element={<div className="py-60 text-center text-4xl font-bold bg-stone-50">반려견 유치원 (준비중)</div>} />
            <Route path="/reserve" element={<div className="py-60 text-center text-4xl font-bold bg-stone-50 text-emerald-800">온라인 예약 (준비중)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

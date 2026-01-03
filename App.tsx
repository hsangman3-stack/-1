
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
          청안 한의원
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-stone-700' : 'text-stone-200'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className={`text-xs px-3 py-1 border rounded transition-all hover:bg-emerald-800 hover:text-white ${isScrolled ? 'border-stone-300 text-stone-400' : 'border-white/30 text-white/50'}`}
          >
            관리자
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-stone-800 py-2 border-b border-stone-100"
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
  <footer className="bg-stone-50 py-16 border-t border-stone-200 text-stone-600">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4">청안 한의원</h3>
        <p className="max-w-md mb-6 leading-relaxed">
          한 사람의 생명을 소중히 여기는 마음으로, <br />
          환자 중심의 세심한 진료와 정성을 다하는 명품 한의원입니다.
        </p>
      </div>
      <div>
        <h4 className="text-stone-900 font-bold mb-6">메뉴</h4>
        <ul className="space-y-4">
          {NAV_ITEMS.slice(0, 4).map(item => (
            <li key={item.path}><Link to={item.path} className="hover:text-emerald-800 transition-colors">{item.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-stone-900 font-bold mb-6">연락처 및 위치</h4>
        <p className="mb-2">TEL: 02-1234-5678</p>
        <p className="mb-2 text-sm text-stone-500">서울특별시 강남구 테헤란로 123 청안빌딩 3층</p>
        <p className="text-xs text-stone-400 mt-6">© 2024 Cheong-Aen Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/tour" element={<div className="py-40 text-center text-3xl font-bold">둘러보기 페이지 (준비중)</div>} />
            <Route path="/treatments" element={<div className="py-40 text-center text-3xl font-bold">주요 진료 페이지 (준비중)</div>} />
            <Route path="/therapy" element={<div className="py-40 text-center text-3xl font-bold">한방 요법 페이지 (준비중)</div>} />
            <Route path="/community" element={<div className="py-40 text-center text-3xl font-bold">커뮤니티 페이지 (준비중)</div>} />
            <Route path="/reserve" element={<div className="py-40 text-center text-3xl font-bold">예약하기 페이지 (준비중)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

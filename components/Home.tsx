
import React from 'react';
import { INITIAL_TREATMENTS } from '../constants';
import { TreatmentItem } from '../types';
import SectionTitle from './SectionTitle';

const Home: React.FC = () => {
  const [treatments, setTreatments] = React.useState<TreatmentItem[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('pet_center_services');
    if (saved) {
      setTreatments(JSON.parse(saved));
    } else {
      setTreatments(INITIAL_TREATMENTS);
    }
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920" 
            alt="Happy Dog" 
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-emerald-600/80 backdrop-blur-md rounded-full text-sm font-bold mb-4">PREMIUM PET CARE</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              소중한 가족의 행복한 일상, <br /> 
              <span className="text-emerald-400">청안 펫 케어</span>가 함께합니다.
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light text-stone-100">
              전문적인 의학 지식과 따뜻한 사랑으로 <br />
              아이들의 신체와 마음을 모두 케어합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full shadow-lg transition-all text-lg font-bold">
                간편 예약하기
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-10 py-4 rounded-full transition-all text-lg font-bold">
                센터 둘러보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">우리는 생명을 존중하는 마음으로 대합니다.</h2>
          <p className="text-xl text-stone-600 leading-relaxed mb-12">
            단순히 맡기는 공간을 넘어, 아이들이 집처럼 편안하게 머물고 <br />
            보호자님은 안심하고 일상에 집중할 수 있는 <br />
            가장 신뢰받는 동반자가 되겠습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">10+</div>
              <div className="text-stone-500">전문 인력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">24h</div>
              <div className="text-stone-500">모니터링</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">1,500+</div>
              <div className="text-stone-500">연간 방문</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">0%</div>
              <div className="text-stone-500">사고 발생률</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="전문 케어 서비스" 
            subtitle="각 분야의 전문가들이 최상의 서비스를 제공합니다."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">{item.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="text-emerald-700 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    자세히 보기 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section (Hours & Map) */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block">Operation Hours</span>
            <h2 className="text-4xl font-bold mb-12">운영 및 진료 안내</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">평일(유치원/메디컬)</span>
                <span className="text-xl">08:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">주말 및 공휴일</span>
                <span className="text-xl">10:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">호텔 체크인/아웃</span>
                <span className="text-xl">10:00 - 18:00</span>
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4 text-emerald-400">센터 위치</h4>
                <p className="text-stone-300 text-lg mb-2">서울특별시 강남구 도산대로 456 청안펫빌딩 전층</p>
                <p className="text-stone-400 italic mb-8">발렛 파킹 서비스 제공 (건물 정문 이용)</p>
                <div className="flex gap-4">
                  <a href="tel:0212345678" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-bold transition-colors">전화 상담</a>
                  <button className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-bold transition-colors">지도 보기</button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[550px] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
              alt="Building" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-emerald-900/10 hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="행복한 친구들" 
            subtitle="보호자님들이 직접 남겨주신 소중한 후기입니다."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-10 bg-stone-50 rounded-3xl relative">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-stone-700 text-lg italic mb-6">
                  "여행 갈 때마다 우리 초코를 어디에 맡길지 걱정이었는데, 청안을 알게 된 후로는 마음이 너무 편해요. 매일 보내주시는 사진과 일지 덕분에 안심됩니다!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">P</div>
                  <div>
                    <div className="font-bold">김OO 보호자님</div>
                    <div className="text-sm text-stone-400">푸들 '초코' 가족</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

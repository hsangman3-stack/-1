
import React from 'react';
import { INITIAL_TREATMENTS } from '../constants';
import { TreatmentItem } from '../types';
import SectionTitle from './SectionTitle';

const Home: React.FC = () => {
  const [treatments, setTreatments] = React.useState<TreatmentItem[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('clinic_treatments');
    if (saved) {
      setTreatments(JSON.parse(saved));
    } else {
      setTreatments(INITIAL_TREATMENTS);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/clinic-main/1920/1080" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight serif">
            몸의 균형을 찾아 <br /> 내일을 찾으세요, <span className="text-emerald-400">청안 한의원</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-stone-200">
            정직한 약재와 정성 어린 진료로 당신의 일상을 회복해 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-md transition-all text-lg font-medium">
              네이버 예약하기
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md transition-all text-lg font-medium">
              둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="청안 한의원의 약속" 
            subtitle="환자 한 분 한 분을 위한 진심 어린 진료를 약속합니다."
          />
          <div className="grid md:grid-grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-emerald-800">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">1:1 정밀 맞춤 진단</h3>
              <p className="text-stone-600 leading-relaxed">
                숙련된 의료진이 정밀 진단을 통해 개개인의 체질과 건강 상태에 가장 적합한 근본 치료법을 제안합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-emerald-800">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">엄격한 GMP 약재 관리</h3>
              <p className="text-stone-600 leading-relaxed">
                식약처 GMP 인증을 받은 청정 한약재만을 엄선하여 사용합니다. 모든 한약은 원내 탕전실에서 직접 정성껏 조제합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-emerald-800">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V10M9 21V12h6v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">치유를 위한 편안한 공간</h3>
              <p className="text-stone-600 leading-relaxed">
                몸과 마음이 함께 쉴 수 있는 자연 친화적인 인테리어와 최신 물리 치료 시설을 갖추어 쾌적한 진료 환경을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section id="treatments" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="주요 진료 항목" 
            subtitle="환자분들의 건강한 삶을 위한 청안 한의원의 전문 진료 과목입니다."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-stone-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.description}
                  </p>
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
            <SectionTitle 
              title="진료 안내" 
              subtitle="편안한 시간에 방문하실 수 있도록 최선을 다하겠습니다."
              light
            />
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">평일</span>
                <span className="text-xl">09:30 - 19:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">점심시간</span>
                <span className="text-xl">13:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">토요일</span>
                <span className="text-xl">09:30 - 14:00 (점심시간 없음)</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400">일요일 / 공휴일</span>
                <span className="text-xl text-rose-400">휴진</span>
              </div>
              <div className="mt-12 pt-12 border-t border-stone-800">
                <h4 className="text-xl font-bold mb-4 text-emerald-400">오시는 길</h4>
                <p className="text-stone-300 text-lg mb-2">서울특별시 강남구 테헤란로 123 청안빌딩 3층</p>
                <p className="text-stone-400 italic">주차 가능 (건물 뒷편 전용 주차장 이용)</p>
                <div className="mt-8 flex gap-4">
                  <a href="#" className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded font-medium transition-colors">전화 상담</a>
                  <a href="#" className="bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded font-medium transition-colors">지도 보기</a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/map/800/1000" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="환자분들의 진솔한 후기" 
            subtitle="믿음과 신뢰를 바탕으로 한 소중한 치료 이야기입니다."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 border border-stone-200 rounded-xl relative">
                <div className="absolute top-0 right-0 p-4">
                  <svg className="w-8 h-8 text-stone-100" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8h6l-3 7h6l3-7V8h-6zm12 0v8h6l-3 7h6l3-7V8h-6z" />
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 italic mb-6">
                  "허리 통증 때문에 고생을 많이 했는데 원장님의 세심한 상담과 추나 치료 덕분에 지금은 등산도 다닐 수 있을 정도로 좋아졌습니다. 직원분들도 너무 친절하세요!"
                </p>
                <p className="font-bold text-stone-900">- {i % 2 === 0 ? '이OO' : '김OO'} 환자분</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

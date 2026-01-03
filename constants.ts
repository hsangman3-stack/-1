
import { TreatmentItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '센터 소개', path: '/' },
  { label: '시설 안내', path: '/tour' },
  { label: '메디컬 케어', path: '/treatments' },
  { label: '미용/스파', path: '/therapy' },
  { label: '반려견 유치원', path: '/community' },
  { label: '예약하기', path: '/reserve' },
];

export const INITIAL_TREATMENTS: TreatmentItem[] = [
  {
    id: '1',
    title: '메디컬 체크업',
    description: '전문 수의사의 세심한 진단을 통해 아이의 건강 상태를 정밀하게 확인합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: '프리미엄 미용/스파',
    description: '아이의 피부 상태에 맞는 천연 샴푸와 맞춤 스타일링으로 스트레스 없는 미용을 약속합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: '도심 속 놀이터',
    description: '넓고 쾌적한 전용 테라스와 놀이 공간에서 친구들과 즐거운 시간을 보냅니다.',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: '개별 맞춤 유치원',
    description: '전문 훈련사가 상주하며 사회성 향상과 기초 교육 프로그램을 제공합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: '럭셔리 펫 호텔',
    description: '개별 냉난방 시스템과 24시간 CCTV 모니터링으로 안심하고 맡기실 수 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
  }
];

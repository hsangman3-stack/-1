
import { TreatmentItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '한의원 소개', path: '/' },
  { label: '둘러보기', path: '/tour' },
  { label: '주요 진료', path: '/treatments' },
  { label: '한방 요법', path: '/therapy' },
  { label: '커뮤니티', path: '/community' },
  { label: '예약하기', path: '/reserve' },
];

export const INITIAL_TREATMENTS: TreatmentItem[] = [
  {
    id: '1',
    title: '통증 치료',
    description: '만성 통증 및 관절 질환의 근본 원인을 찾아 해결합니다.',
    imageUrl: 'https://picsum.photos/seed/pain/800/600',
  },
  {
    id: '2',
    title: '교통사고 임상',
    description: '후유증 없는 일상 복귀를 위해 정밀 진단과 집중 치료를 제공합니다.',
    imageUrl: 'https://picsum.photos/seed/car/800/600',
  },
  {
    id: '3',
    title: '체중 관리',
    description: '단순한 감량을 넘어 건강한 신체 밸런스를 되찾아 드립니다.',
    imageUrl: 'https://picsum.photos/seed/diet/800/600',
  },
  {
    id: '4',
    title: '성장/수험생',
    description: '우리 아이의 건강한 성장과 집중력 향상을 위한 맞춤 보약.',
    imageUrl: 'https://picsum.photos/seed/growth/800/600',
  },
  {
    id: '5',
    title: '보약 클리닉',
    description: 'GMP 인증 프리미엄 약재로 기력을 보강하고 면역력을 높입니다.',
    imageUrl: 'https://picsum.photos/seed/tonic/800/600',
  }
];

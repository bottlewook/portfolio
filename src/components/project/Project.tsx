import {
  ForwardedRef, forwardRef, useRef, useEffect,
} from 'react';

import Lenis from '@studio-freight/lenis';
import classNames from 'classnames/bind';
import { useScroll } from 'framer-motion';

import Card from '@shared/card/Card';
import Spacing from '@shared/spacing/Spacing';

import styles from './Project.module.scss';

const cx = classNames.bind(styles);

export const projects = [
  {
    title: 'Washfit',
    description: '차를 깨끗하게 만드는 "세차 용품"에 대한 기본 정보와 유해성 유무를 쉽게 찾아볼 수 있는 웹 서비스',
    feature: [
      'AWS EC2 인스턴스와 docker를 이용한 운영 서버 배포',
      'github-actions을 이용한 CI/CD 배포,빌드,테스트 자동화 파이프 라인 구축',
      '20개 이상의 공통 컴포넌트 제작과 storybook을 이용한 데이터 시각적 회귀 테스트 및 chromatic 배포',
      'vitest를 이용하여 품질 향상 및 안전성 향상을 위한 코드 작성',
      '백엔드의 API 제작 기간이 길어짐에 따라 개발 의존성을 배제할 수 있도록 MSW를 이용한 mocking 작성',
      '카카오 open api를 이용하여 내 위치 주변 주차장 마커 표시 기능 추가',
      '유저경험 최적화를 위해 퍼널구조를 이용한 차량 정보 등록 페이지 제작',
      '소설 로그인 개발 환경 구축 (카카오 로그인)',
    ],
    images: ['/washfit/홈페이지.png', '/washfit/상세페이지.png', '/washfit/지도페이지.png', '/washfit/즐겨찾기페이지.png', '/washfit/검색페이지.png', '/washfit/채널페이지.png', '/washfit/회원가입페이지.png', '/washfit/로그인페이지.png', '/washfit/차량등록페이지.png', '/washfit/마이페이지.png'],
    githubLink: 'https://github.com/bottlewook/F1-WashFit-FE',
    projectLink: 'https://washfit.site/',
    backgroundColor: '#FCE9D1',
    color: '#5E5E5E',
  },
  {
    title: 'Bluekey',
    description: ' 음악 제작사(블루키뮤직)와 계약 아티스트 간의 정산 세부 내역 및 현황을 투명하게 공개하고, 매출 추이 등의 통계 지표를 볼 수 있는 정산 플랫폼',
    feature: [
      '유저에게 직관적으로 데이터를 보여줄 수 있도록 라이브러리 nivo 차트를 이용한 데이터 시각화',
      '유저가 현재 진입한 페이지를 쉽게 파악할 수 있게 특정 라우팅에 따른 Side Navigation 스타일링 추가',
      '코드의 중복을 방지하고 유지 보수 용이를 위해 공통 컴포넌트 제작',
      '무분별한 api 호출을 방지하기 위해 tanstack-query를 이용한 데이터 캐싱',
      'redux-toolkit을 이용한 유저 정보 전역 상태 관리',
    ],
    images: ['/bluekey/홈페이지.png', '/bluekey/앨범정보페이지.png', '/bluekey/앨범상세페이지.png', '/bluekey/앨범상세페이지-뮤지션.png', '/bluekey/아티스트상세페이지.png', '/bluekey/아티스트등록페이지.png', '/bluekey/아티스트계정관리페이지.png', '/bluekey/프로필페이지.png'],
    githubLink: 'https://github.com/Bluekey-Payment-System/BPS-FE',
    projectLink: 'https://bluekeyinsight.net/',
    backgroundColor: '#d5f3a4',
    color: '#515A44',
  },
  {
    title: 'The Julge',
    description: '더 줄게(The Julge)는 긴급 구인구직을 간편하게 할 수 있는 플랫폼',
    feature: [
      'REST API를 이용한 아르바이트생 프로필 내역 CRUD 기능 구현',
      '유효성 검사와 유효성 검사 문구 애니메이션 기능이 추가된 input 컴포넌트 제작',
      '80%의 페이지에서 사용되는 공통 레이아웃 컴포넌트 및 공통 컴포넌트 제작',
      '모든 디바이스에서 사용할 수 있도록 반응형 웹 제작',
      '유저 경험을 개선하기 위해 스켈레톤 UI 제작',
    ],
    images: ['/theJulge/랜딩페이지.png', '/theJulge/홈페이지.png', '/theJulge/전체공고페이지.png', '/theJulge/내프로필페이지.png', '/theJulge/내가게페이지.png', '/theJulge/가게정보페이지.png', '/theJulge/가게상세페이지.png'],
    githubLink: 'https://github.com/LonelyIslet/TheJulge',
    projectLink: ' https://www.thejulge.com/',
    backgroundColor: '#D7E5F1',
    color: '#3F465A',
  },
  {
    title: 'Cryptometer',
    description: 'Cryptometer는 내가 과거 특정 시점에 비트코인을 구매했다면 현재 비트코인의 가치가 얼마인지 확인할 수 있는 웹 서비스를 제공하기 위해 개발한 웹 애플리케이션',
    feature: [
      '가상화폐 변동 추이를 직관적으로 보여주기 위해 rechart.js 라이브러리를 활용한 데이터 시각화',
      '코인가격 / 시가총액 / 총거래량에 따른 차트 데이터 필터링 기능 구현',
      '카카오톡, 페이스북 공유하기와 링크 복사 기능 구현',
      '반응형 웹 구현',
      'react-datepicker를 이용한 날짜 기능 추가',
      'recoil을 이용한 전역 상태 관리',
    ],
    images: ['/cryptometer/홈페이지.png', '/cryptometer/리셋페이지.png', '/cryptometer/전체시세.png'],
    githubLink: 'https://github.com/Jer1s/0-crypto-meter-team-leaders',
    projectLink: ' https://cryptometer.netlify.app/',
    backgroundColor: '#f9f9f9',
    color: '#5E5E5E',
  },
];

const Project = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <section ref={ref} className={cx('container')}>
      <Spacing size={1} backgroundColor="black" />
      <Spacing size={16} />
      <p style={{ fontSize: '18px' }}>Projects</p>
      <Spacing size={16} />
      <main ref={container} className={cx('main')}>
        {projects.map((project, i) => {
          const targetScale = 1;
          return (
            <Card
              key={project.title}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
});

export default Project;

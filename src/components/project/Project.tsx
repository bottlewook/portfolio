/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
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
    title: 'Cryptometer',
    description: 'Cryptometer는 내가 과거 특정 시점에 비트코인을 구매했다면 현재 비트코인의 가치가 얼마인지 확인할 수 있는 웹 서비스를 제공하기 위해 개발한 웹 애플리케이션입니다',
    feature: [
      '가상화폐 변동 추이를 직관적으로 보여주기 위해 rechart.js 라이브러리를 활용한 데이터 시각화',
      '코인가격 / 시가총액 / 총거래량에 따른 차트 데이터 필터링 기능 구현',
      '카카오톡, 페이스북 공유하기와 링크 복사 기능 구현',
      '반응형 웹 구현',
      'react-datepicker를 이용한 날짜 기능 추가',
      'recoil을 이용한 전역 상태 관리',
    ],
    src: '/cryptometer.png',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvPJu1WUKt-ELLpAOLnTodyIgbTYOAYFfwDpCJtF-LQ&s',
    color: '#494949',
  },
  {
    title: '더줄게 아르바이트 매칭 플랫폼',
    description: '더 줄게(The Julge)는 긴급 구인구직을 간편하게 할 수 있는 플랫폼 서비스입니다',
    feature: [
      'REST API를 이용한 아르바이트생 프로필 내역 CRUD 기능 구현',
      '유효성 검사와 유효성 검사 문구 애니메이션 기능이 추가된 input 컴포넌트 제작',
      '80%의 페이지에서 사용되는 공통 레이아웃 컴포넌트 및 공통 컴포넌트 제작',
      '모든 디바이스에서 사용할 수 있도록 반응형 웹 제작',
      '유저 경험을 개선하기 위해 스켈레톤 UI 제작',
    ],
    src: '/Julge.png',
    link: ' https://www.thejulge.com/',
    color: '#333333',
  },
  {
    title: '블루키 뮤직 정산 시스템',
    description: ' 음악 제작사(블루키뮤직)와 계약 아티스트 간의 정산 세부 내역 및 현황을 투명하게 공개하고, 매출 추이 등의 통계 지표를 볼 수 있는 정산 플랫폼 사이트입니다`',
    feature: [
      '유저에게 직관적으로 데이터를 보여줄 수 있도록 라이브러리 nivo 차트를 이용한 데이터 시각화',
      '유저가 현재 진입한 페이지를 쉽게 파악할 수 있게 특정 라우팅에 따른 Side Navigation 스타일링 추가',
      '코드의 중복을 방지하고 유지 보수 용이를 위해 공통 컴포넌트 제작',
      '무분별한 api 호출을 방지하기 위해 tanstack-query를 이용한 데이터 캐싱',
      'redux-toolkit을 이용한 유저 정보 전역 상태 관리',
    ],
    src: '/bluekey.png',
    link: 'https://github.com/Bluekey-Payment-System/BPS-FE',
    color: '#0F2C21',
  },
  {
    title: 'Washpedia',
    description: 'Washpedia는 차를 깨끗하게 만드는 "세차 용품"에 대한 기본 정보와 유해성 유무를 쉽게 찾아볼 수 있는 웹 서비스입니다.',
    feature: [
      '가상화폐 변동 추이를 직관적으로 보여주기 위해 rechart.js 라이브러리를 활용한 데이터 시각화',
      '코인가격 / 시가총액 / 총거래량에 따른 차트 데이터 필터링 기능 구현',
      '카카오톡, 페이스북 공유하기와 링크 복사 기능 구현',
    ],
    src: '/washpedia.png',
    link: 'https://f1-wash-pedia-fe.vercel.app/',
    color: '#0E2A38',
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
    <div ref={ref}>
      <p className={cx('title')}>Project</p>
      <Spacing size={24} />
      <main ref={container} className={cx('main')}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
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
    </div>
  );
});

export default Project;

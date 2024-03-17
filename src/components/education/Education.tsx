'use client';

import { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import MaskTextDescription from '@shared/mask-text/MaskTextDescription';
import MaskTextTitle from '@shared/mask-text/MaskTextTitle';
import Spacing from '@shared/spacing/Spacing';

import styles from './Education.module.scss';

const cx = classNames.bind(styles);

const Education = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section className={cx('container')} ref={ref}>
      <Spacing size={40} />
      <Spacing size={1} backgroundColor="black" />
      <Spacing size={16} />
      <p style={{ fontSize: '18px' }}>Education</p>
      <Spacing size={24} />
      <MaskTextTitle phrase="패스트 캠퍼스 Kernel 360 백엔드 파이널 프로젝트 참여 경험 (2023.12 ~ 2024.02)" />
      <MaskTextDescription phrases={[
        '- 백엔드 부트캠프 파이널 프로젝트에 프론트엔드 개발자로 참여',
        '- 환경설정부터 배포까지 현재까지 배운 내용들을 정리하고 프로젝트의 한 사이클을 경험할 수 있었던 프로젝트.',
        '- 기능구현에 그치지 않고 최적화와 테스트에 중점을 둔 프로젝트.',
      ]}
      />
      <Spacing size={24} />
      <MaskTextTitle phrase="코드잇 부트캠프 수료 (2023.03 ~ 2023.09)" />
      <MaskTextDescription phrases={[
        '- 6개월의 과정 동안 프론트엔드 주요 기술 학습',
        '- 기획부터 MVP 개발까지 현직 백엔드 개발자와 디자이너와 소통하여 기획/개발/배포 경험',
        '- 뮤지션 저작권 정산, 매칭 플랫폼 그리고 가상화폐 거래소 주제에 대한 3가지 팀 프로젝트 경험',
        '- 적극적인 코드 리뷰와 동료와의 페어 프로그래밍 등 여러 협력 경험',
      ]}
      />
      <Spacing size={24} />
      <MaskTextTitle phrase="한국전력공사 에너지 효율부 인턴 (2021.03 ~ 2021.06)" />
      <MaskTextDescription phrases={[
        '- 냉난방기기 지원 사업 관련 클라이언트와 지속적인 소통 경험',
        '- 퇴근 후에도 꾸준한 자기개발로 인턴 과정 중 자격증 취득',
      ]}
      />
    </section>
  );
});

export default Education;

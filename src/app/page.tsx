'use client';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import Curtain from '@components/curtain/Curtain';
import Education from '@components/education/Education';
import Counter from '@components/init/Counter';
import Intro from '@components/intro/Intro';
import MainNav from '@components/main-nav/MainNav';
import Project from '@components/project/Project';
import useMoveScroll from '@hooks/useMoveScroll';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const educationParagraph = `
패스트 캠퍼스 Kernel 360 백엔드 파이널 프로젝트 참여 경험 (2023.12 ~ 2024.02)
- 웹앱 개발 경험
- vitest와 storybook을 이용한 테스트 주도 개발
- aws 배포 경험
- 유저 친화적인 최적화 경험

코드잇 부트 캠프 수료 (2023.03 ~ 2023.09)
- 6개월의 과정 동안 프론트엔드 주요 기술 학습
- 기획부터 MVP 개발까지 현직 백엔드 개발자와 디자이너와 소통하여 기획/개발/배포 경험
- 뮤지션 저작권 정산, 매칭 플랫폼 그리고 가상화폐 거래소 주제에 대한 3가지 팀 프로젝트 경험
- 적극적인 코드 리뷰와 동료와의 페어 프로그래밍 등 여러 협력 경험
`;

export default function Home() {
  const [step, setStep] = useState(0);

  const about = useMoveScroll();
  const education = useMoveScroll();
  const project = useMoveScroll();
  const contact = useMoveScroll();

  const sections = [about, education, project, contact];

  const onNext = () => {
    setStep((prev) => { return prev + 1; });
  };

  return (
    <>
      {step === 0 && (
        <motion.div>
          <Counter from={0} to={100} onNext={onNext} />
        </motion.div>
      )}
      {step === 1 && (
        <>
          <Curtain />
          <div className={cx('container')}>
            <MainNav sections={sections} />
            <Intro ref={about.element} />
            <Education ref={education.element} paragraph={educationParagraph} />
            <Project ref={project.element} />
            <Intro ref={contact.element} />
          </div>
        </>
      )}
    </>
  );
}

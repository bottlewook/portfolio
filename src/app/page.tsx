'use client';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import Curtain from '@components/curtain/Curtain';
import Counter from '@components/init/Counter';
import Intro from '@components/intro/Intro';
import MainNav from '@components/main-nav/MainNav';
import Project from '@components/project/Project';
import useMoveScroll from '@hooks/useMoveScroll';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

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
          <motion.div className={cx('container')}>
            <MainNav sections={sections} />
            <Intro ref={about.element} />
            <Intro ref={education.element} />
            <Project ref={project.element} />
            <Intro ref={contact.element} />
          </motion.div>
        </>
      )}
    </>
  );
}

'use client';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import AboutMe from '@components/about-me/AboutMe';
import Contact from '@components/contact/Contact';
import Curtain from '@components/curtain/Curtain';
import Education from '@components/education/Education';
import Footer from '@components/footer/Footer';
import Counter from '@components/init/Counter';
import Intro from '@components/intro/Intro';
import MainNav from '@components/main-nav/MainNav';
import Project from '@components/project/Project';
import useMoveScroll from '@hooks/useMoveScroll';
import Spacing from '@shared/spacing/Spacing';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  const [step, setStep] = useState(1);

  const intro = useMoveScroll();
  const aboutMe = useMoveScroll();
  const education = useMoveScroll();
  const project = useMoveScroll();
  const contact = useMoveScroll();

  const sections = [intro, aboutMe, education, project, contact];

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
            <Intro ref={intro.element} moveAboutMe={aboutMe.onMoveToElement} />
            <AboutMe ref={aboutMe.element} />
            <Education ref={education.element} />
            <Spacing size={200} />
            <Project ref={project.element} />
            <Contact ref={contact.element} />
            <Spacing size={200} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

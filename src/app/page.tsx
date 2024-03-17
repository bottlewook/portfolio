'use client';

import React from 'react';

import classNames from 'classnames/bind';

import AboutMe from '@components/about-me/AboutMe3';
import Education from '@components/education/Education';
import Footer from '@components/footer/Footer';
import MainNav from '@components/main-nav/MainNav';
import Project from '@components/project/Project';
import Skills from '@components/skills/Skills';
import useMoveScroll from '@hooks/useMoveScroll';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  const aboutMe = useMoveScroll();
  const project = useMoveScroll();
  const skills = useMoveScroll();
  const education = useMoveScroll();

  const sections = [aboutMe, project, skills, education];

  return (
    <>
      <MainNav sections={sections} />
      <div className={cx('container')}>
        <AboutMe ref={aboutMe.element} />
        <Project ref={project.element} />
        <Skills ref={skills.element} />
        <Education ref={education.element} />
        <Footer />
      </div>
    </>
  );
}

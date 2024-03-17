'use client';

import { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import Spacing from '@shared/spacing/Spacing';

import Skill from '../shared/skill/Skill';
import SkillLayout from '../shared/skill/SkillLayout';

import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

const Skills = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <>
      <section className={cx('container')} ref={ref}>
        <Spacing size={40} />
        <Spacing size={1} backgroundColor="black" />
        <Spacing size={16} />
        <div>
          <p style={{ fontSize: '18px' }}>Skills</p>
          <Spacing size={24} />
          <div className={cx('skillsWrapper')}>
            <div>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>언어 및 프레임워크</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/javascript.svg" name="javascript" />
                  <Skill path="/skills/typescript.png" name="typescript" />
                  <Skill path="/skills/react.png" name="react" />
                  <Skill path="/skills/next.svg" name="next.js" />
                </div>
                <Spacing size={24} />
              </SkillLayout>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>스타일링</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/sass.png" name="scss" />
                  <Skill path="/skills/emotion.png" name="emotion" />
                  <Skill path="/skills/styled-components.png" name="styled components" />
                </div>
                <Spacing size={24} />
              </SkillLayout>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>상태관리</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/redux.png" name="redux toolkit" />
                  <Skill path="/skills/tanstack-query.png" name="tanstack query" />
                  <Skill path="/skills/recoil.png" name="recoil" />
                </div>
              </SkillLayout>
            </div>
            <div>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>테스트</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/vitest.png" name="vitest" />
                  <Skill path="/skills/storybook.png" name="storybook" />
                  <Skill path="/skills/MSW.png" name="MSW" />
                  <Skill path="/skills/testing-library.png" name="testing library" />
                </div>
                <Spacing size={24} />
              </SkillLayout>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>라이브러리</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/react-hook-form.png" name="react hook form" />
                  <Skill path="/skills/framer-motion.png" name="framer motion" />
                </div>
                <Spacing size={24} />
              </SkillLayout>
              <SkillLayout>
                <p style={{ fontWeight: 600 }}>배포</p>
                <Spacing size={24} />
                <div className={cx('iconContainer')}>
                  <Skill path="/skills/AWS.png" name="AWS" />
                  <Skill path="/skills/docker.png" name="docker" />
                  <Skill path="/skills/vercel.png" name="vercel" />
                  <Skill path="/skills/chromatic.png" name="chromatic" />
                  <Skill path="/skills/github-actions.png" name="github actions" />
                </div>
              </SkillLayout>
            </div>
          </div>
        </div>
      </section>
      <Spacing size={40} />
    </>
  );
});

export default Skills;

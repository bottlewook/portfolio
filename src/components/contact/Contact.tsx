'use client';

import React, { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import Spacing from '@shared/spacing/Spacing';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section ref={ref} className={cx('container')}>
      <form>
        <p className={cx('title')}>Contact</p>
        <Spacing size={24} />
        <label htmlFor="id">
          Name
          <Spacing size={8} />
          <input id="id" name="id" />
        </label>
        <Spacing size={16} />
        <label htmlFor="email">
          E-mail
          <Spacing size={8} />
          <input id="email" name="email" />
        </label>
        <Spacing size={16} />
        <label htmlFor="message">
          Message
          <Spacing size={8} />
          <textarea id="message" name="message" />
        </label>
        <Spacing size={48} />
        <button>보내기</button>
      </form>
    </section>
  );
});

export default Contact;

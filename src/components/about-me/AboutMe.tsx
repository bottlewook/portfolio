import { ForwardedRef, forwardRef } from 'react';

import { MaskText } from './MaskText';

const AboutMe = forwardRef((
  _,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <section ref={ref}>
      <MaskText />
    </section>
  );
});

export default AboutMe;

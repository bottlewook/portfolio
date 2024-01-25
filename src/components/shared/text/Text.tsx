import { CSSProperties, useMemo } from 'react';

import { colors, Colors } from '@styles/colorPalette';
import { Typography, typographyMap } from '@styles/typography';

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
  children: React.ReactNode
  whiteSpace?: CSSProperties['whiteSpace']
  className?: string
  wordBreak?: CSSProperties['wordBreak']
}

function Text({
  typography = 't5', color = 'black', display, textAlign, fontWeight, bold, children, whiteSpace = 'pre-line', wordBreak = 'normal', className,
}: TextProps) {
  const styles = useMemo(() => {
    return {
      ...typographyMap[typography],
      color: colors[color],
      display,
      textAlign,
      fontWeight: bold ? 'bold' : fontWeight,
      whiteSpace,
      wordBreak,
    };
  }, [typography, color, display, textAlign, fontWeight, bold, whiteSpace, wordBreak]);
  return (
    <span className={className} style={styles}>{children}</span>
  );
}

export default Text;

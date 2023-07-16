import React, { type PropsWithChildren } from 'react';
import { FlexView, type FlexViewProps } from './styles';

type FlexProps = PropsWithChildren<FlexViewProps>;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <FlexView {...rest}>{children}</FlexView>;
};

export { Flex };

import React from 'react';

interface HeadingProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ tag = 'h1', text }) => {
  const Tag: React.ElementType = tag;
  return <Tag>{text}</Tag>;
};

export default Heading;

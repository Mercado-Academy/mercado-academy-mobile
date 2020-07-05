import React from 'react'
import { Subtitle, BodyText, Card, Title } from './courseCard.styles';

interface CourseItemProps {
  title: string;
  subtitle: string;
  bodyText: string;
}

const CourseItem : React.FC<CourseItemProps> = ({title, subtitle, bodyText}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <BodyText>{bodyText}</BodyText>
    </Card>
  );
}

export default CourseItem;
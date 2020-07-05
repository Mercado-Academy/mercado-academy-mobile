import React from 'react';
import { FlatList } from 'react-native';
import CourseItem from '../CourseItem/courseCardItem';

interface CourseCardListProps {
  videos: any[];
}

const CourseList: React.FC<CourseCardListProps> = ({ videos }) => {
  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => {
        return (
          <CourseItem
            title={item.title}
            subtitle={item.subtitle}
            bodyText={item.bodyText}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CourseList;

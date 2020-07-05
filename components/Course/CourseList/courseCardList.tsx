import React from 'react'
import { FlatList } from 'react-native';
import { View } from '../../Themed';
import CourseItem from '../CourseItem/courseCardItem';

const data: any = [
  {
    id: "1",
    title: "Realizando sua primeira venda",
    subtitle: "Curso inaugural",
    bodyText: "Nesse curso você aprenderá a realizar todas as operações básicas"
  },
  {
    id: "1",
    title: "Realizando sua primeira venda",
    subtitle: "Curso inaugural",
    bodyText: "Nesse curso você aprenderá a realizar todas as operações básicas"
  },
  {
    id: "1",
    title: "Realizando sua primeira venda",
    subtitle: "Curso inaugural",
    bodyText: "Nesse curso você aprenderá a realizar todas as operações básicas"
  },
  {
    id: "1",
    title: "Realizando sua primeira venda",
    subtitle: "Curso inaugural",
    bodyText: "Nesse curso você aprenderá a realizar todas as operações básicas"
  }
]
const CourseList: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <CourseItem
          title={item.title}
          subtitle={item.subtitle}
          bodyText={item.bodyText} />
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CourseList;
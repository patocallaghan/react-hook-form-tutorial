import { createBrowserRouter } from 'react-router';
import { AppLayout } from './app-layout';
import { HomePage } from '../features/home/home-page';
import { Lesson01 } from '../features/lesson-01/lesson-01';
import { Lesson02 } from '../features/lesson-02/lesson-02';
import { Lesson03 } from '../features/lesson-03/lesson-03';
import { Lesson04 } from '../features/lesson-04/lesson-04';
import { Lesson05 } from '../features/lesson-05/lesson-05';
import { Lesson06 } from '../features/lesson-06/lesson-06';
import { Lesson07 } from '../features/lesson-07/lesson-07';
import { Lesson08 } from '../features/lesson-08/lesson-08';
import { Lesson09 } from '../features/lesson-09/lesson-09';
import { Lesson10 } from '../features/lesson-10/lesson-10';
import { Lesson11 } from '../features/lesson-11/lesson-11';
import { Lesson12 } from '../features/lesson-12/lesson-12';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'lesson-01', element: <Lesson01 /> },
      { path: 'lesson-02', element: <Lesson02 /> },
      { path: 'lesson-03', element: <Lesson03 /> },
      { path: 'lesson-04', element: <Lesson04 /> },
      { path: 'lesson-05', element: <Lesson05 /> },
      { path: 'lesson-06', element: <Lesson06 /> },
      { path: 'lesson-07', element: <Lesson07 /> },
      { path: 'lesson-08', element: <Lesson08 /> },
      { path: 'lesson-09', element: <Lesson09 /> },
      { path: 'lesson-10', element: <Lesson10 /> },
      { path: 'lesson-11', element: <Lesson11 /> },
      { path: 'lesson-12', element: <Lesson12 /> },
    ],
  },
]);

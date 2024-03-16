import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LessonsPage from '../../pages/lessons';
import StatsPage from '../../pages/stats';
import WorkoutPage from '../../pages/workout';
import './app.scss';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <WorkoutPage />,
  },
  {
    path: '/lessons',
    element: <LessonsPage />,
  },
  {
    path: '/stats',
    element: <StatsPage />,
  },
]);

export default function App(): JSX.Element {
  return (
    <RouterProvider router={routerConfig} />
  );
}

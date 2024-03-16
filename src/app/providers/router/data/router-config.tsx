import { createBrowserRouter } from 'react-router-dom';
import WorkoutPage from '../../../../pages/workout';
import LessonsPage from '../../../../pages/lessons';
import StatsPage from '../../../../pages/stats';

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

export default routerConfig;

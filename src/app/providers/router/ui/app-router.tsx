import { RouterProvider } from 'react-router-dom';
import routerConfig from '../data/router-config';

export default function AppRouter(): JSX.Element {
  return (
    <RouterProvider router={routerConfig} />
  );
}

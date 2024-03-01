import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { App } from './App';
import { Main } from './pages/main/Main';

import ErrorPage from './pages/errorPage/errorPage';

// import { Directions } from './pages/directions/Directions';
const Directions = lazy(() => 
  import('./pages/directions/Directions')
    .catch((error) => ({ default: () => <ErrorPage error={error} /> }))
);

// import { Projects } from './pages/projects/Projects';
const Projects = lazy(() => 
  import('./pages/projects/Projects')
    .catch((error) => ({ default: () => <ErrorPage error={error} /> }))
);

// import { Contacts } from './pages/contacts/Contacts';
const Contacts = lazy(() => 
  import('./pages/contacts/Contacts')
    .catch((error) => ({ default: () => <ErrorPage error={error} /> }))
);

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />

        <Route path="directions" element={ <Directions /> } />

        <Route path="projects" element={<Projects />} />

        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}
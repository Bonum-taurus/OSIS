import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Main } from './pages/main/Main';
import { Contacts } from './pages/contacts/Contacts';
import { Directions } from './pages/directions/Directions';
import { Projects } from './pages/projects/Projects';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />

        <Route path="directions" element={<Directions />} />

        <Route path="projects" element={<Projects />} />

        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}
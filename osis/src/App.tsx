import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}


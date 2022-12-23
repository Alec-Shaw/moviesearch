import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { useAppSelector } from './hooks/storeHook';

function App() {
  const { darkTheme } = useAppSelector(state => state)
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-800 dark:text-yellow-50 min-h-screen px-4 lg:px-12 pb-20">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path=":id" element={<Detail />} />


        </Routes>
      </div>
    </div>

  );
}

export default App;

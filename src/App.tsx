import React from 'react';
import CustomCursor from './components/elements/CustomCursor';
import useTransportContext from './components/context/useTransportContext';
import { Outlet } from 'react-router';
import VideoPopup from './components/elements/VideoPopup';
import ScrollToTop from './components/elements/ScrollToTop';
import SearchProp from './components/elements/SearchProp';
import SideBar from './components/elements/SideBar';

const App: React.FC = () => {
  const { isMobileManu, isSearch, showVideoPopup } = useTransportContext();
  return (
    <div className={`custom-cursor ${isMobileManu ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
      <CustomCursor enabled />
      <Outlet />
      <SideBar />
      <SearchProp />
      <ScrollToTop />
      {showVideoPopup && <VideoPopup />}
    </div>
  );
};

export default App;
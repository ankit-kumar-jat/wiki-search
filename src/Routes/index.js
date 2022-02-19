import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts';

import Home from '../pages/Home';
import About from '../pages/About';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;

import styled from 'styled-components';

import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

import Tournament from '../pages/Tournament';
import Games from '../pages/Games';
import Table from '../pages/Table';
import Teams from '../pages/Teams';
import Statistics from '../pages/Statistics';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Sidebar />
          <Routes>
            <Route path="/" element={<Tournament />} />
            <Route path="/games" element={<Games />} />
            <Route path="/table" element={<Table />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
      </Container>

    </BrowserRouter>
  )
}
import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { lazy } from 'react';

const StyledApp = styled.div`
  // Your style here
  width: 600px;
  min-height: 400px;
`;

const List = lazy(() => import('./pages/List'));

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/"
          element={
            <List/>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;

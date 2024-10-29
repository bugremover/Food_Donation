// src/App.js

import React from 'react';
import { Card,CardContent } from './components/ui/card.jsx';
import FoodRescueDashboard from './components/FoodRescueDashboard.jsx';
import './styles/styles.css';

const App = () => {
  return (
    <div>
      <Card>
      <CardContent>
      <FoodRescueDashboard />
      </CardContent>
      </Card>
    </div>
  );
};

export default App;

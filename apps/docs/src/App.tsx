// src/App.tsx
import { ButtonEmoji } from '@forkingidiots/uicecream';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className="text-red-500">
      <h1>Hello World</h1>
      <ButtonEmoji emoji="🍦">Click me</ButtonEmoji>

    </div>
  );
};

export default App;

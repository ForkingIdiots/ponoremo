// src/App.tsx
import { ButtonEmoji } from '@forkingidiots/uicecream';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className="text-red-500" style={{ textAlign: 'center' }}>
      <h1>Hello everyone this is cool</h1>
      <ButtonEmoji emoji="🍦">Click me</ButtonEmoji>
      <ButtonEmoji emoji="🍪">Get a Cookie</ButtonEmoji>
      <ButtonEmoji emoji="🎮">Play Game</ButtonEmoji>
      <ButtonEmoji emoji="🎨">Create Art</ButtonEmoji>
      <ButtonEmoji emoji="🚀">Launch</ButtonEmoji>
      <ButtonEmoji emoji="🌈">Make Magic</ButtonEmoji>
    </div>
  );
};

export default App;

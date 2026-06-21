import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 预激活语音合成（需要用户交互后在浏览器中生效）
const preloadSpeech = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  document.removeEventListener('touchstart', preloadSpeech);
  document.removeEventListener('click', preloadSpeech);
};
document.addEventListener('touchstart', preloadSpeech, { once: true });
document.addEventListener('click', preloadSpeech, { once: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

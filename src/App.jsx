import { useState } from 'react';
import Home from './components/Home';
import Flashcard from './components/Flashcard';
import FindIt from './components/FindIt';
import MatchGame from './components/MatchGame';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [categoryKey, setCategoryKey] = useState('');

  const handleStart = (modeOrCategory) => {
    // 从 Home 出来时，如果已选分类
    const categories = ['animals','colors','numbers','fruits','body','transport','food','clothes','home','nature','toys'];
    if (categories.includes(modeOrCategory)) {
      // 已经选好分类了
      const mode = localStorage.getItem('lastMode') || 'flashcard';
      setCategoryKey(modeOrCategory);
      setScreen(mode);
    } else {
      // 选择了学习模式，记住
      localStorage.setItem('lastMode', modeOrCategory);
      setScreen(modeOrCategory);
    }
  };

  const handleModeSelect = (mode) => {
    localStorage.setItem('lastMode', mode);
    setScreen(mode);
  };

  const handleBack = () => {
    setScreen('home');
    setCategoryKey('');
  };

  // Home页面 - 先选模式，再选分类
  if (screen === 'home') {
    return <Home onStart={handleStart} />;
  }

  // 如果还没有选分类，先让用户选择
  if (!categoryKey) {
    return <Home onStart={handleStart} />;
  }

  // 根据模式渲染对应组件
  switch (screen) {
    case 'flashcard':
      return <Flashcard categoryKey={categoryKey} onBack={handleBack} />;
    case 'findit':
      return <FindIt categoryKey={categoryKey} onBack={handleBack} />;
    case 'match':
      return <MatchGame categoryKey={categoryKey} onBack={handleBack} />;
    default:
      return <Home onStart={handleStart} />;
  }
}

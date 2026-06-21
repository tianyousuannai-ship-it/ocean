import { useState, useEffect } from 'react';
import { getCategories } from '../data/vocabulary';
import { speak } from './speech';
import './Home.css';

export default function Home({ onStart }) {
  const [showCategories, setShowCategories] = useState(false);
  const categories = getCategories();
  const [bouncing, setBouncing] = useState(0);

  useEffect(() => {
    // 主页动画 - 小太阳跳一跳
    const t = setInterval(() => {
      setBouncing(prev => (prev + 1) % 2);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const handleStart = (mode) => {
    if (!showCategories) {
      setShowCategories(true);
      // 保存所选模式，确保选分类后进入正确的游戏
      localStorage.setItem('lastMode', mode);
    } else {
      onStart(mode);
    }
  };

  return (
    <div className="home">
      {/* 顶部欢迎区 */}
      <div className="home-header">
        <div className={`sun-icon ${bouncing ? 'bounce' : ''}`}>🌈</div>
        <h1 className="home-title">English Fun</h1>
        <p className="home-subtitle">宝贝的英语乐园</p>
      </div>

      {!showCategories ? (
        /* 主菜单 - 选择学习模式 */
        <div className="mode-grid">
          <button className="mode-card flashcard-mode" onClick={() => handleStart('flashcard')}>
            <span className="mode-icon">🃏</span>
            <span className="mode-name">闪卡学习</span>
            <span className="mode-desc">一页一页学单词</span>
          </button>
          <button className="mode-card findit-mode" onClick={() => handleStart('findit')}>
            <span className="mode-icon">🔍</span>
            <span className="mode-name">找一找</span>
            <span className="mode-desc">听到单词点出来</span>
          </button>
          <button className="mode-card match-mode" onClick={() => handleStart('match')}>
            <span className="mode-icon">🧩</span>
            <span className="mode-name">配配对</span>
            <span className="mode-desc">翻牌记忆游戏</span>
          </button>
        </div>
      ) : (
        /* 分类选择 */
        <div className="category-section">
          <button className="back-btn" onClick={() => setShowCategories(false)}>
            ← 返回
          </button>
          <h2 className="section-title">选择主题开始学习</h2>
          <div className="category-grid">
            {categories.map(cat => (
              <button
                key={cat.key}
                className="category-card"
                style={{ '--cat-color': cat.color }}
                onClick={() => handleStart(cat.key)}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-en">{cat.nameEn}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 底部小提示 */}
      <p className="home-hint">
        {!showCategories
          ? '选择一个游戏开始吧！'
          : '选一个主题，开始学英语！'}
      </p>
    </div>
  );
}

import { useState, useCallback } from 'react';
import vocabulary from '../data/vocabulary';
import { useSpeakOnTap } from './speech';
import './Flashcard.css';

export default function Flashcard({ categoryKey, onBack }) {
  const words = vocabulary[categoryKey]?.words || [];
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(''); // 'left' or 'right'
  const { handleSpeak } = useSpeakOnTap();
  const current = words[index];

  const goNext = useCallback(() => {
    if (index < words.length - 1) {
      setDirection('left');
      setTimeout(() => {
        setIndex(i => i + 1);
        setDirection('');
        setFlipped(false);
      }, 200);
    }
  }, [index, words.length]);

  const goPrev = useCallback(() => {
    if (index > 0) {
      setDirection('right');
      setTimeout(() => {
        setIndex(i => i - 1);
        setDirection('');
        setFlipped(false);
      }, 200);
    }
  }, [index]);

  const handleCardClick = () => {
    if (!flipped) {
      // 点击正面: 先翻面显示中文，同时播放英文发音
      setFlipped(true);
      handleSpeak(current.en);
    } else {
      // 点击背面: 播放英文发音
      handleSpeak(current.en);
    }
  };

  if (!words.length) {
    return (
      <div className="flashcard-page">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <p className="empty-msg">这个分类还没有单词哦</p>
      </div>
    );
  }

  const catInfo = vocabulary[categoryKey];
  const progress = `${index + 1} / ${words.length}`;

  return (
    <div className="flashcard-page" style={{ '--cat-color': catInfo.color }}>
      {/* 顶部栏 */}
      <div className="flashcard-top">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <span className="cat-label">{catInfo.icon} {catInfo.name}</span>
        <span className="progress">{progress}</span>
      </div>

      {/* 卡片主体 */}
      <div className="card-area" onClick={handleCardClick}>
        <div className={`flashcard ${direction} ${flipped ? 'flipped' : ''}`}>
          <div className="card-face card-front">
            <span className="card-emoji">{current.emoji}</span>
            <span className="card-word">{current.en}</span>
            <span className="card-tap-hint">点我发音 👆</span>
          </div>
          <div className="card-face card-back">
            <span className="card-emoji">{current.emoji}</span>
            <span className="card-word">{current.en}</span>
            <span className="card-translation">{current.zh}</span>
            <span className="card-tap-hint">再听一次 👆</span>
          </div>
        </div>
      </div>

      {/* 底部导航 */}
      <div className="card-nav">
        <button className="nav-btn" onClick={goPrev} disabled={index === 0}>
          ◀ 上一个
        </button>
        <button className="nav-btn" onClick={goNext} disabled={index === words.length - 1}>
          下一个 ▶
        </button>
      </div>

      {/* 自动播放时显示的总进度 */}
      <div className="card-dots">
        {words.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            style={{ '--dot-color': i === index ? catInfo.color : '#ddd' }}
          />
        ))}
      </div>
    </div>
  );
}

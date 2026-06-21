import { useState, useEffect, useCallback } from 'react';
import vocabulary from '../data/vocabulary';
import { useSpeakOnTap, encouragements } from './speech';
import './MatchGame.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchGame({ categoryKey, onBack }) {
  const words = vocabulary[categoryKey]?.words || [];
  // 3岁小朋友：取最多 4 对（8张卡片）正好合适
  const pairCount = Math.min(4, Math.floor(words.length / 2));
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [wrongPair, setWrongPair] = useState([]);
  const { handleSpeak } = useSpeakOnTap();

  const initGame = useCallback(() => {
    const selected = shuffle(words).slice(0, pairCount);
    const pairs = [];
    selected.forEach((word, idx) => {
      pairs.push({ id: idx * 2, pairId: idx, emoji: word.emoji, en: word.en });
      pairs.push({ id: idx * 2 + 1, pairId: idx, emoji: word.emoji, en: word.en });
    });
    setCards(shuffle(pairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setCelebrate(false);
    setWrongPair([]);
  }, [words, pairCount]);

  useEffect(() => {
    if (pairCount >= 2) initGame();
  }, [pairCount, initGame]);

  const handleCardClick = (card) => {
    // 正在处理中或卡片已翻开/已匹配 → 忽略
    if (flipped.length >= 2) return;
    if (matched.includes(card.id) || flipped.find(f => f.id === card.id)) return;

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);
    handleSpeak(card.en);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newFlipped;
      if (a.pairId === b.pairId) {
        // 配对成功 — 停留片刻让小朋友看到配对的卡片
        setTimeout(() => {
          setMatched(prev => [...prev, a.id, b.id]);
          setFlipped([]);
        }, 500);
      } else {
        // 配对失败 — 标记抖动后翻回
        setWrongPair([a.id, b.id]);
        setTimeout(() => {
          setFlipped([]);
          setWrongPair([]);
        }, 900);
      }
    }
  };

  // 检查是否全部配对完成
  useEffect(() => {
    if (pairCount >= 2 && matched.length === cards.length && cards.length > 0) {
      setCelebrate(true);
      setTimeout(() => handleSpeak('Great job!'), 400);
    }
  }, [matched, cards, pairCount, handleSpeak]);

  if (pairCount < 2) {
    return (
      <div className="match-page">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <p className="empty-msg">这个分类词汇太少，换个主题试试吧</p>
      </div>
    );
  }

  const catInfo = vocabulary[categoryKey];
  const totalPairs = pairCount;
  const matchedPairs = matched.length / 2;

  return (
    <div className="match-page" style={{ '--cat-color': catInfo.color, '--cat-color2': catInfo.color + '99' }}>
      {/* 顶部 */}
      <div className="match-top">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <span className="cat-label">{catInfo.icon} {catInfo.name}</span>
        <span className="moves-badge">🔄 {moves}</span>
      </div>

      {/* 进度 */}
      <div className="match-progress">
        <span className="match-hint">翻开一样的卡片配对</span>
        <span className="match-count">{matchedPairs}/{totalPairs} 对</span>
      </div>

      {/* 卡片网格 */}
      <div className="match-grid">
        {cards.map(card => {
          const isFlipped = flipped.find(f => f.id === card.id) || matched.includes(card.id);
          const isWrong = wrongPair.includes(card.id);
          let cardClass = 'match-card';
          if (isFlipped) cardClass += ' revealed';
          if (matched.includes(card.id)) cardClass += ' matched';
          if (isWrong) cardClass += ' wrong';
          return (
            <button
              key={card.id}
              className={cardClass}
              onClick={() => handleCardClick(card)}
              disabled={matched.includes(card.id) || flipped.length >= 2}
            >
              <div className="match-card-inner">
                <div className="mcard-front">
                  <span className="mcard-question">?</span>
                </div>
                <div className="mcard-back">
                  <span className="mcard-emoji">{card.emoji}</span>
                  <span className="mcard-en">{card.en}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* 完成庆祝 */}
      {celebrate && (
        <div className="celebrate-overlay">
          <div className="celebrate-box">
            <div className="celebrate-stars">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="celebrate-star" style={{ animationDelay: `${i * 0.2}s` }}>⭐</span>
              ))}
            </div>
            <h2 className="celebrate-title">太棒了！</h2>
            <p className="celebrate-moves">用了 {moves} 步配完卡片</p>
            <button className="celebrate-btn" onClick={initGame}>再玩一次 🔄</button>
            <button className="celebrate-back" onClick={onBack}>选其他主题</button>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';
import vocabulary from '../data/vocabulary';
import { useSpeakOnTap, encouragements } from './speech';
import './FindIt.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FindIt({ categoryKey, onBack }) {
  const words = vocabulary[categoryKey]?.words || [];
  const [questionWord, setQuestionWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(null); // 'correct' | 'wrong' | null
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [encourage, setEncourage] = useState('');
  const { handleSpeak } = useSpeakOnTap();

  const generateQuestion = useCallback(() => {
    if (words.length < 4) return;
    const correct = words[Math.floor(Math.random() * words.length)];
    const others = shuffle(words.filter(w => w.en !== correct.en)).slice(0, 3);
    const opts = shuffle([correct, ...others]);
    setQuestionWord(correct);
    setOptions(opts);
    setResult(null);
    // 自动发音
    setTimeout(() => handleSpeak(correct.en), 300);
  }, [words, handleSpeak]);

  useEffect(() => {
    if (words.length >= 4) generateQuestion();
  }, [words.length, generateQuestion]);

  const handleChoice = (word) => {
    if (result) return;
    setTotal(t => t + 1);
    if (word.en === questionWord.en) {
      setResult('correct');
      setScore(s => s + 1);
      const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
      setEncourage(msg);
      handleSpeak(word.en);
      setTimeout(() => generateQuestion(), 1200);
    } else {
      setResult('wrong');
      setTimeout(() => setResult(null), 600);
    }
  };

  const handleReplay = () => {
    if (questionWord) handleSpeak(questionWord.en);
  };

  if (words.length < 4) {
    return (
      <div className="findit-page">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <p className="empty-msg">这个分类词汇太少，换个主题试试吧</p>
      </div>
    );
  }

  const catInfo = vocabulary[categoryKey];
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="findit-page">
      {/* 顶部 */}
      <div className="findit-top">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <span className="cat-label">{catInfo.icon} {catInfo.name}</span>
        <span className="score-badge">⭐ {score}/{total}</span>
      </div>

      {/* 题目区域 */}
      <div className="question-area">
        <p className="question-hint">找到这个词</p>
        <div className="question-box" onClick={handleReplay}>
          {result === 'correct' ? (
            <span className="correct-word">{questionWord?.emoji} {questionWord?.en}</span>
          ) : (
            <>
              <span className="question-icon">🔊</span>
              <span className="question-label">点击听发音</span>
            </>
          )}
        </div>
        {result === 'correct' && (
          <div className="encourage-msg">{encourage}</div>
        )}
      </div>

      {/* 选项网格 */}
      <div className="options-grid">
        {options.map((word, i) => {
          let cls = 'option-card';
          if (result === 'correct' && word.en === questionWord.en) cls += ' correct';
          else if (result === 'wrong' && word.en === questionWord.en) cls += ' highlight-correct';
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleChoice(word)}
              disabled={result !== null}
            >
              <span className="opt-emoji">{word.emoji}</span>
              <span className="opt-en">{word.en}</span>
            </button>
          );
        })}
      </div>

      {/* 进度条 */}
      <div className="accuracy-bar">
        <div className="accuracy-fill" style={{ width: `${accuracy}%` }} />
      </div>
      {total > 0 && <p className="accuracy-label">正确率 {accuracy}%</p>}
    </div>
  );
}

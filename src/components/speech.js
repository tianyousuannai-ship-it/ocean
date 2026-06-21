import { useState, useCallback } from 'react';

// 语音播报工具函数 - 使用浏览器 Web Speech API (离线可用)
// 在 Chrome 中即使离线也能正常发音
export function speak(text, rate = 0.9) {
  if (!window.speechSynthesis) return;
  // 取消当前正在播报的语音
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;  // 儿童语速可以稍慢
  utterance.pitch = 1.1;  // 音调稍高, 更适合儿童
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

// 在 iOS Safari 上需要用户交互后才能启用语音合成
export function ensureSpeech() {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  // 预创建一个空 utterance 来激活
  const u = new SpeechSynthesisUtterance(' ');
  u.volume = 0;
  window.speechSynthesis.speak(u);
  window.speechSynthesis.cancel();
}

// 自定义 Hook: 点击卡片时播放语音
export function useSpeakOnTap() {
  const [speaking, setSpeaking] = useState(false);
  const handleSpeak = useCallback((text, rate = 0.85) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.15;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, []);
  return { speaking, handleSpeak };
}

// 给小朋友的鼓励语
export const encouragements = [
  'Great job! 🌟',
  'Amazing! 🌈',
  'Wonderful! 🎉',
  'Super! ⭐',
  'Excellent! 🏆',
  'Fantastic! 🎊',
  'Good job! 👏',
  'You are smart! 🧠',
  'Perfect! 💖',
  'Wow! 🎈',
];

// 儿童英语词汇库 - 按主题分类
// 每个词包含: 英文, 中文, emoji图标, 发音文本

const vocabulary = {
  animals: {
    name: '动物',
    nameEn: 'Animals',
    icon: '🐾',
    color: '#FF6B6B',
    words: [
      { en: 'cat', zh: '猫', emoji: '🐱' },
      { en: 'dog', zh: '狗', emoji: '🐶' },
      { en: 'bird', zh: '鸟', emoji: '🐦' },
      { en: 'fish', zh: '鱼', emoji: '🐟' },
      { en: 'rabbit', zh: '兔子', emoji: '🐰' },
      { en: 'bear', zh: '熊', emoji: '🐻' },
      { en: 'lion', zh: '狮子', emoji: '🦁' },
      { en: 'tiger', zh: '老虎', emoji: '🐯' },
      { en: 'elephant', zh: '大象', emoji: '🐘' },
      { en: 'monkey', zh: '猴子', emoji: '🐵' },
      { en: 'panda', zh: '熊猫', emoji: '🐼' },
      { en: 'duck', zh: '鸭子', emoji: '🦆' },
      { en: 'chicken', zh: '鸡', emoji: '🐔' },
      { en: 'cow', zh: '奶牛', emoji: '🐮' },
      { en: 'pig', zh: '猪', emoji: '🐷' },
      { en: 'sheep', zh: '羊', emoji: '🐑' },
      { en: 'horse', zh: '马', emoji: '🐴' },
      { en: 'frog', zh: '青蛙', emoji: '🐸' },
      { en: 'turtle', zh: '乌龟', emoji: '🐢' },
      { en: 'butterfly', zh: '蝴蝶', emoji: '🦋' },
      { en: 'bee', zh: '蜜蜂', emoji: '🐝' },
      { en: 'ant', zh: '蚂蚁', emoji: '🐜' },
      { en: 'owl', zh: '猫头鹰', emoji: '🦉' },
      { en: 'penguin', zh: '企鹅', emoji: '🐧' },
      { en: 'dolphin', zh: '海豚', emoji: '🐬' },
      { en: 'whale', zh: '鲸鱼', emoji: '🐳' },
      { en: 'giraffe', zh: '长颈鹿', emoji: '🦒' },
      { en: 'zebra', zh: '斑马', emoji: '🦓' },
      { en: 'kangaroo', zh: '袋鼠', emoji: '🦘' },
      { en: 'fox', zh: '狐狸', emoji: '🦊' },
      { en: 'snake', zh: '蛇', emoji: '🐍' },
      { en: 'mouse', zh: '老鼠', emoji: '🐭' },
      { en: 'squirrel', zh: '松鼠', emoji: '🐿️' },
      { en: 'wolf', zh: '狼', emoji: '🐺' },
      { en: 'deer', zh: '鹿', emoji: '🦌' },
      { en: 'parrot', zh: '鹦鹉', emoji: '🦜' },
    ]
  },
  colors: {
    name: '颜色',
    nameEn: 'Colors',
    icon: '🎨',
    color: '#FF9F43',
    words: [
      { en: 'red', zh: '红色', emoji: '🔴' },
      { en: 'blue', zh: '蓝色', emoji: '🔵' },
      { en: 'green', zh: '绿色', emoji: '🟢' },
      { en: 'yellow', zh: '黄色', emoji: '🟡' },
      { en: 'orange', zh: '橙色', emoji: '🟠' },
      { en: 'purple', zh: '紫色', emoji: '🟣' },
      { en: 'pink', zh: '粉色', emoji: '🩷' },
      { en: 'brown', zh: '棕色', emoji: '🟤' },
      { en: 'black', zh: '黑色', emoji: '⚫' },
      { en: 'white', zh: '白色', emoji: '⚪' },
      { en: 'gray', zh: '灰色', emoji: '🩶' },
    ]
  },
  numbers: {
    name: '数字',
    nameEn: 'Numbers',
    icon: '🔢',
    color: '#6C5CE7',
    words: [
      { en: 'one', zh: '一', emoji: '1️⃣' },
      { en: 'two', zh: '二', emoji: '2️⃣' },
      { en: 'three', zh: '三', emoji: '3️⃣' },
      { en: 'four', zh: '四', emoji: '4️⃣' },
      { en: 'five', zh: '五', emoji: '5️⃣' },
      { en: 'six', zh: '六', emoji: '6️⃣' },
      { en: 'seven', zh: '七', emoji: '7️⃣' },
      { en: 'eight', zh: '八', emoji: '8️⃣' },
      { en: 'nine', zh: '九', emoji: '9️⃣' },
      { en: 'ten', zh: '十', emoji: '🔟' },
    ]
  },
  fruits: {
    name: '水果',
    nameEn: 'Fruits',
    icon: '🍎',
    color: '#E17055',
    words: [
      { en: 'apple', zh: '苹果', emoji: '🍎' },
      { en: 'banana', zh: '香蕉', emoji: '🍌' },
      { en: 'orange', zh: '橙子', emoji: '🍊' },
      { en: 'grape', zh: '葡萄', emoji: '🍇' },
      { en: 'strawberry', zh: '草莓', emoji: '🍓' },
      { en: 'watermelon', zh: '西瓜', emoji: '🍉' },
      { en: 'pear', zh: '梨', emoji: '🍐' },
      { en: 'peach', zh: '桃子', emoji: '🍑' },
      { en: 'cherry', zh: '樱桃', emoji: '🍒' },
      { en: 'lemon', zh: '柠檬', emoji: '🍋' },
      { en: 'mango', zh: '芒果', emoji: '🥭' },
      { en: 'pineapple', zh: '菠萝', emoji: '🍍' },
      { en: 'kiwi', zh: '猕猴桃', emoji: '🥝' },
      { en: 'blueberry', zh: '蓝莓', emoji: '🫐' },
    ]
  },
  body: {
    name: '身体',
    nameEn: 'Body',
    icon: '🧍',
    color: '#00B894',
    words: [
      { en: 'eye', zh: '眼睛', emoji: '👁️' },
      { en: 'ear', zh: '耳朵', emoji: '👂' },
      { en: 'nose', zh: '鼻子', emoji: '👃' },
      { en: 'mouth', zh: '嘴巴', emoji: '👄' },
      { en: 'hand', zh: '手', emoji: '✋' },
      { en: 'foot', zh: '脚', emoji: '🦶' },
      { en: 'head', zh: '头', emoji: '🗣️' },
      { en: 'arm', zh: '胳膊', emoji: '💪' },
      { en: 'leg', zh: '腿', emoji: '🦵' },
      { en: 'finger', zh: '手指', emoji: '☝️' },
      { en: 'tooth', zh: '牙齿', emoji: '🦷' },
      { en: 'hair', zh: '头发', emoji: '💇' },
      { en: 'knee', zh: '膝盖', emoji: '🦿' },
      { en: 'tongue', zh: '舌头', emoji: '👅' },
    ]
  },
  transport: {
    name: '交通工具',
    nameEn: 'Transport',
    icon: '🚗',
    color: '#0984E3',
    words: [
      { en: 'car', zh: '小汽车', emoji: '🚗' },
      { en: 'bus', zh: '公交车', emoji: '🚌' },
      { en: 'train', zh: '火车', emoji: '🚂' },
      { en: 'airplane', zh: '飞机', emoji: '✈️' },
      { en: 'boat', zh: '小船', emoji: '⛵' },
      { en: 'bicycle', zh: '自行车', emoji: '🚲' },
      { en: 'truck', zh: '卡车', emoji: '🚛' },
      { en: 'helicopter', zh: '直升机', emoji: '🚁' },
      { en: 'motorcycle', zh: '摩托车', emoji: '🏍️' },
      { en: 'ship', zh: '轮船', emoji: '🚢' },
      { en: 'rocket', zh: '火箭', emoji: '🚀' },
      { en: 'tractor', zh: '拖拉机', emoji: '🚜' },
    ]
  },
  food: {
    name: '食物',
    nameEn: 'Food',
    icon: '🍕',
    color: '#FD79A8',
    words: [
      { en: 'bread', zh: '面包', emoji: '🍞' },
      { en: 'rice', zh: '米饭', emoji: '🍚' },
      { en: 'noodle', zh: '面条', emoji: '🍜' },
      { en: 'egg', zh: '鸡蛋', emoji: '🥚' },
      { en: 'milk', zh: '牛奶', emoji: '🥛' },
      { en: 'water', zh: '水', emoji: '💧' },
      { en: 'juice', zh: '果汁', emoji: '🧃' },
      { en: 'cake', zh: '蛋糕', emoji: '🎂' },
      { en: 'cookie', zh: '饼干', emoji: '🍪' },
      { en: 'pizza', zh: '披萨', emoji: '🍕' },
      { en: 'ice cream', zh: '冰淇淋', emoji: '🍦' },
      { en: 'cheese', zh: '奶酪', emoji: '🧀' },
      { en: 'candy', zh: '糖果', emoji: '🍬' },
      { en: 'chocolate', zh: '巧克力', emoji: '🍫' },
      { en: 'donut', zh: '甜甜圈', emoji: '🍩' },
    ]
  },
  clothes: {
    name: '衣服',
    nameEn: 'Clothes',
    icon: '👕',
    color: '#A29BFE',
    words: [
      { en: 'hat', zh: '帽子', emoji: '🧢' },
      { en: 'shoe', zh: '鞋子', emoji: '👟' },
      { en: 'shirt', zh: '衬衫', emoji: '👕' },
      { en: 'pants', zh: '裤子', emoji: '👖' },
      { en: 'sock', zh: '袜子', emoji: '🧦' },
      { en: 'dress', zh: '裙子', emoji: '👗' },
      { en: 'coat', zh: '外套', emoji: '🧥' },
      { en: 'glove', zh: '手套', emoji: '🧤' },
      { en: 'scarf', zh: '围巾', emoji: '🧣' },
      { en: 'boots', zh: '靴子', emoji: '👢' },
    ]
  },
  home: {
    name: '家里',
    nameEn: 'Home',
    icon: '🏠',
    color: '#FDCB6E',
    words: [
      { en: 'house', zh: '房子', emoji: '🏠' },
      { en: 'door', zh: '门', emoji: '🚪' },
      { en: 'window', zh: '窗户', emoji: '🪟' },
      { en: 'chair', zh: '椅子', emoji: '🪑' },
      { en: 'table', zh: '桌子', emoji: '🪹' },
      { en: 'bed', zh: '床', emoji: '🛏️' },
      { en: 'lamp', zh: '台灯', emoji: '💡' },
      { en: 'clock', zh: '时钟', emoji: '🕐' },
      { en: 'phone', zh: '电话', emoji: '📱' },
      { en: 'key', zh: '钥匙', emoji: '🔑' },
      { en: 'book', zh: '书', emoji: '📖' },
      { en: 'cup', zh: '杯子', emoji: '🥤' },
      { en: 'plate', zh: '盘子', emoji: '🍽️' },
      { en: 'mirror', zh: '镜子', emoji: '🪞' },
    ]
  },
  nature: {
    name: '自然',
    nameEn: 'Nature',
    icon: '🌿',
    color: '#55EFC4',
    words: [
      { en: 'sun', zh: '太阳', emoji: '☀️' },
      { en: 'moon', zh: '月亮', emoji: '🌙' },
      { en: 'star', zh: '星星', emoji: '⭐' },
      { en: 'cloud', zh: '云', emoji: '☁️' },
      { en: 'rain', zh: '雨', emoji: '🌧️' },
      { en: 'snow', zh: '雪', emoji: '❄️' },
      { en: 'wind', zh: '风', emoji: '💨' },
      { en: 'tree', zh: '树', emoji: '🌳' },
      { en: 'flower', zh: '花', emoji: '🌸' },
      { en: 'mountain', zh: '山', emoji: '⛰️' },
      { en: 'river', zh: '河流', emoji: '🏞️' },
      { en: 'sea', zh: '大海', emoji: '🌊' },
      { en: 'rainbow', zh: '彩虹', emoji: '🌈' },
      { en: 'leaf', zh: '叶子', emoji: '🍃' },
    ]
  },
  toys: {
    name: '玩具',
    nameEn: 'Toys',
    icon: '🧸',
    color: '#E84393',
    words: [
      { en: 'ball', zh: '球', emoji: '⚽' },
      { en: 'doll', zh: '娃娃', emoji: '🪆' },
      { en: 'teddy bear', zh: '泰迪熊', emoji: '🧸' },
      { en: 'blocks', zh: '积木', emoji: '🧱' },
      { en: 'puzzle', zh: '拼图', emoji: '🧩' },
      { en: 'balloon', zh: '气球', emoji: '🎈' },
      { en: 'kite', zh: '风筝', emoji: '🪁' },
      { en: 'drum', zh: '鼓', emoji: '🥁' },
      { en: 'robot', zh: '机器人', emoji: '🤖' },
      { en: 'train set', zh: '火车套装', emoji: '🚂' },
    ]
  },
};

export default vocabulary;

// 获取所有词汇（扁平化）
export function getAllWords() {
  const all = [];
  Object.values(vocabulary).forEach(category => {
    category.words.forEach(word => {
      all.push({ ...word, category: category.name, categoryKey: getCategoryKey(category.nameEn) });
    });
  });
  return all;
}

function getCategoryKey(nameEn) {
  const map = {};
  Object.entries(vocabulary).forEach(([key, val]) => {
    map[val.nameEn] = key;
  });
  return map[nameEn] || '';
}

// 获取所有分类
export function getCategories() {
  return Object.entries(vocabulary).map(([key, val]) => ({
    key,
    ...val,
  }));
}

let cards = []

function getOwned(){
  const data = localStorage.getItem("ownedCards")
  return data ? JSON.parse(data) : []
}

function toggleOwned(id){
  let owned = getOwned()

  if(owned.includes(id)){
    owned = owned.filter(i => i !== id)
  } else {
    owned.push(id)
  }

  localStorage.setItem("ownedCards", JSON.stringify(owned))
}

function goDetail(id){
  location.href = "card.html?id=" + id
}

function selectAll(){
  const all = cards.map(c => c.id)
  localStorage.setItem("ownedCards", JSON.stringify(all))
  if(typeof render === "function") render()
}

function clearAll(){
  localStorage.setItem("ownedCards", JSON.stringify([]))
  if(typeof render === "function") render()
}

const departmentOrder = ["本部", "交際部", "管理部", "強行部","交渉部","特務部","その他"]

const characterDepartment = {
  "皇坂逢": "本部",
  "城瀬由鶴": "本部",
  "須王芦佳": "本部",
  "綾戸恋": "交際部",
  "宇京真央": "交際部",
  "樋宮明星": "交際部",
  "環野揺": "交際部",
  "槻本大河": "管理部",
  "壱川春日": "管理部",
  "隠岐谷誓": "管理部",
  "節見静": "強行部",
  "御門尊": "強行部",
  "新開戦": "強行部",
  "相沢篠信": "強行部",
  "在間樹帆": "交渉部",
  "祠堂恭耶": "交渉部",
  "立科吏来": "交渉部",
  "恩田灯世": "特務部",
  "新名有": "特務部",
  "神家": "特務部",
  "麻波麗": "特務部",
}

const eventOrder = [
  "Florist 花に染む言の葉",
  "シルクにかさねるDecoration",
  "Prequel 揺蕩う泡沫の春に",
  "ホッと一息 不思議なTeaParty",
  "Reflection 夜空に満つ光芒の華",
  "Prequel 強かな熱を抱いて",
  "放課後 day by day",
  "寝覚月に舞う花びら",
  "Prequel 誰そ彼の家路",
  "幽界からの招待状",
  "Prequel 深雪に差す薄日",
  "Blessings 願い降る聖夜に",
  "迎春 新年依頼はじめ",
  "Lament 幕切れに毒薬を",
  "Prequel 幾望の晩餐",
  "鏡の花、写真の中の街",
  "Threshold 波打ち際の遊楽",
  "Coming up!彩りのスペシャルメニュー",
  "Prequel 礎を仰ぐ瞳",
  "1st Anniversary -Knotting Point-",
  "Blooming 夜の庭が灯れば",
  "花束に祈る Happyily Ever After",
  "Travelogue 花景色に映る夢",
  "Resonance 尾が触れあう水槽で",
  "Night out! ネオンサインから照らす横顔",
  "Travelogue 夕映に解く贈り物",
  "Framed in the Gallery",
  "Unbreakable 誰が為のRiff",
  "Travelogue 白に綴る線",
  "或る、満月の夜に妖物",
  "Travelogue 虹彩に浮かぶ軌跡",
  "Welcome! KAWAII Cafe♡ Aporia×Sanrio characters",
  "Wish come true またたく聖樹の下で",
  "Favで溢れる キュレーテッド・コレクション with ZOZOTOWN",
  "Travelogue 重なる影の先に",
  "運命に似せた Chocolaterie",
  "Converge 燦光に焦がされて",
  "Revise 窓辺に射す曙光",
  "Travelogue 蒼海に結ぶ思い出",
  "Drowsy 終日たどる探し物",
  "2nd Anniversary -Dualism-",
  "Place your bets 裏返しの機略",
  "Cherish 日々を歩む息吹",
  "Vignette -Emperor/Skip-",
  "Milky Way 幾重の想いに約束を",
  "Grasp 電界に繋ぐ眼差し"
]

const characterOrder = [
  // 本部
  "皇坂逢","城瀬由鶴","須王芦佳",
  // 交際部
  "綾戸恋","宇京真央","樋宮明星","環野揺",
  // 管理部
  "槻本大河","壱川春日","隠岐谷誓",
  // 強行部
  "節見静","御門尊","新開戦","相沢篠信",
  // 交渉部
  "在間樹帆","祠堂恭耶","立科吏来",
  // 特務部
  "恩田灯世","新名有","神家","麻波麗"
]

const specialOrders = {

  "2025/1/6":[
   "#DE7DF3",
   "餅はどんな願い宿るか",
   "新春の祈り",
   "新年を切り開く一戦"
  ],

  "2025/1/22": [
   "#61C892",
   "名のないジュリエット",
   "ロミオとして捧げる",
   "マキューシオの夢語り"
  ],

  "2026/3/20": [
   "Yuzuru's special day",
   "大都市が動く朝",
   "勝利のハイファイブ",
   "会議前くすぶる火種"  
  ],

  "2026/6/23":[
   "Present for Soyogu",
   "統率者の横顔",
   "先導者の背中"
  ]
}

const rarityOrder = ["SSR","SR","R","CR","XR"]

const comboOrder = [...characterOrder]

document.addEventListener("contextmenu", e => {

  if(e.target.tagName === "IMG"){
    e.preventDefault()
  }

})

document.addEventListener("dragstart", e => {

  if(e.target.tagName === "IMG"){
    e.preventDefault()
  }

})

function getNoImage(card){

  const whiteCharacters = [
    "須王芦佳","綾戸恋","樋宮明星","環野揺","槻本大河","節見静","御門尊","新開戦","立科吏来","恩田灯世","新名有","神家","麻波麗",
    "須王&綾戸","須王&樋宮","須王&環野","須王&槻本","須王&節見","須王&御門","須王&新開","須王&立科","須王&恩田","須王&新名","須王&神家","須王&麻波",
    "綾戸&樋宮","綾戸&環野","綾戸&槻本","綾戸&節見","綾戸&御門","綾戸&新開","綾戸&立科","綾戸&恩田","綾戸&新名","綾戸&神家","綾戸&麻波",
    "樋宮&環野","樋宮&槻本","樋宮&節見","樋宮&御門","樋宮&新開","樋宮&立科","樋宮&恩田","樋宮&新名","樋宮&神家","樋宮&麻波",
    "環野&槻本","環野&節見","環野&御門","環野&新開","環野&立科","環野&恩田","環野&新名","環野&神家","環野&麻波",
    "槻本&節見","槻本&御門","槻本&新開","槻本&立科","槻本&恩田","槻本&新名","槻本&神家","槻本&麻波",
    "節見&御門","節見&新開","節見&立科","節見&恩田","節見&新名","節見&神家","節見&麻波",
    "御門&新開","御門&立科","御門&恩田","御門&新名","御門&神家","御門&麻波",
    "新開&立科","新開&恩田","新開&新名","新開&神家","新開&麻波",
    "立科&恩田","立科&新名","立科&神家","立科&麻波",
    "恩田&新名","恩田&神家","恩田&麻波",
    "新名&神家","新名&麻波",
    "神家&麻波",
  ]

  const halfCharacters = [
    "皇坂&須王","皇坂&綾戸","皇坂&樋宮","皇坂&環野","皇坂&槻本","皇坂&節見","皇坂&御門","皇坂&新開","皇坂&立科","皇坂&恩田","皇坂&新名","皇坂&神家","皇坂&麻波",
    "城瀬&須王","城瀬&綾戸","城瀬&樋宮","城瀬&環野","城瀬&槻本","城瀬&節見","城瀬&御門","城瀬&新開","城瀬&立科","城瀬&恩田","城瀬&新名","城瀬&神家","城瀬&麻波",
    "須王&宇京","須王&壱川","須王&隠岐谷","須王&相沢","須王&在間","須王&祠堂",
    "綾戸&宇京","綾戸&壱川","綾戸&隠岐谷","綾戸&相沢","綾戸&在間","綾戸&祠堂",
    "宇京&樋宮","宇京&環野","宇京&槻本","宇京&節見","宇京&御門","宇京&新開","宇京&立科","宇京&恩田","宇京&新名","宇京&神家","宇京&麻波",
    "樋宮&壱川","樋宮&隠岐谷","樋宮&相沢","樋宮&在間","樋宮&祠堂",
    "環野&壱川","環野&隠岐谷","環野&相沢","環野&在間","環野&祠堂",
    "槻本&壱川","槻本&隠岐谷","槻本&相沢","槻本&在間","槻本&祠堂",
    "壱川&節見","壱川&御門","壱川&新開","壱川&立科","壱川&恩田","壱川&新名","壱川&神家","壱川&麻波",
    "隠岐谷&節見","隠岐谷&御門","隠岐谷&新開","隠岐谷&立科","隠岐谷&恩田","隠岐谷&新名","隠岐谷&神家","隠岐谷&麻波",
    "節見&相沢","節見&在間","節見&祠堂",
    "御門&相沢","御門&在間","御門&祠堂",
    "新開&相沢","新開&在間","新開&祠堂",
    "相沢&立科","相沢&恩田","相沢&新名","相沢&神家","相沢&麻波",
    "在間&立科","在間&恩田","在間&新名","在間&神家","在間&麻波",
    "祠堂&立科","祠堂&恩田","祠堂&新名","祠堂&神家","祠堂&麻波"
  ]

  if(whiteCharacters.includes(card.character)){
    return "image/画像準備中_白.png"
  }

  if(halfCharacters.includes(card.character)){
    return "image/画像準備中_白黒.png"
  }

  return "image/画像準備中_黒.png"
}

const eventImages = {

  "1st Anniversary -Knotting Point-": "event/1st Anniversary -Knotting Point-.png",

  "2nd Anniversary -Dualism-": "event/2nd Anniversary -Dualism-.png"

}


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
  "Cherish 日々を歩む息吹"
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
  ]
}

const rarityOrder = ["SSR","SR","R","XR"]

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
    "須王芦佳",
    "綾戸恋",
    "樋宮明星",
    "環野揺",
    "槻本大河",
    "節見静",
    "御門尊",
    "新開戦",
    "立科吏来",
    "恩田灯世",
    "新名有",
    "神家",
    "麻波麗",
  ]

  return whiteCharacters.includes(card.character)
    ? "image/画像準備中_白.png"
    : "image/画像準備中_黒.png"
}
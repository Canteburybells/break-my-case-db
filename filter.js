const combinationCharacters = {
  "皇坂&城瀬":["皇坂逢","城瀬由鶴"],"皇坂&須王":["皇坂逢","須王芦佳"],"皇坂&綾戸":["皇坂逢","綾戸恋"],"皇坂&宇京":["皇坂逢","宇京真央"],"皇坂&樋宮":["皇坂逢","樋宮明星"],"皇坂&環野":["皇坂逢","環野揺"],"皇坂&槻本":["皇坂逢","槻本大河"],"皇坂&壱川":["皇坂逢","壱川春日"],"皇坂&隠岐谷":["皇坂逢","隠岐谷誓"],"皇坂&節見":["皇坂逢","節見静"],"皇坂&御門":["皇坂逢","御門尊"],"皇坂&新開":["皇坂逢","新開戦"],"皇坂&相沢":["皇坂逢","相沢篠信"],"皇坂&在間":["皇坂逢","在間樹帆"],"皇坂&祠堂":["皇坂逢","祠堂恭耶"],"皇坂&立科": ["皇坂逢", "立科吏来"],"皇坂&恩田":["皇坂逢","恩田灯世"],"皇坂&新名":["皇坂逢","新名有"],"皇坂&神家":["皇坂逢","神家"],"皇坂&麻波":["皇坂逢","麻波麗"],
  "城瀬&須王":["城瀬由鶴","須王芦佳"],"城瀬&綾戸":["城瀬由鶴","綾戸恋"],"城瀬&宇京":["城瀬由鶴","宇京真央"],"城瀬&樋宮":["城瀬由鶴","樋宮明星"],"城瀬&環野":["城瀬由鶴","環野揺"],"城瀬&槻本":["城瀬由鶴","槻本大河"],"城瀬&壱川":["城瀬由鶴","壱川春日"],"城瀬&隠岐谷":["城瀬由鶴","隠岐谷誓"],"城瀬&節見":["城瀬由鶴","節見静"],"城瀬&御門":["城瀬由鶴","御門尊"],"城瀬&新開":["城瀬由鶴","新開戦"],"城瀬&相沢":["城瀬由鶴","相沢篠信"],"城瀬&在間":["城瀬由鶴","在間樹帆"],"城瀬&祠堂":["城瀬由鶴","祠堂恭耶"],"城瀬&立科":["城瀬由鶴","立科吏来"],"城瀬&恩田":["城瀬由鶴","恩田灯世"],"城瀬&新名":["城瀬由鶴","新名有"],"城瀬&神家":["城瀬由鶴","神家"],"城瀬&麻波":["城瀬由鶴","麻波麗"],
  "須王&綾戸":["須王芦佳","綾戸恋"],"須王&宇京":["須王芦佳","宇京真央"],"須王&樋宮":["須王芦佳","樋宮明星"],"須王&環野":["須王芦佳","環野揺"],"須王&槻本":["須王芦佳","槻本大河"],"須王&壱川":["須王芦佳","壱川春日"],"須王&隠岐谷":["須王芦佳","隠岐谷誓"],"須王&節見":["須王芦佳","節見静"],"須王&御門":["須王芦佳","御門尊"],"須王&新開":["須王芦佳","新開戦"],"須王&相沢":["須王芦佳","相沢篠信"],"須王&在間":["須王芦佳","在間樹帆"],"須王&祠堂":["須王芦佳","祠堂恭耶"],"須王&立科":["須王芦佳","立科吏来"],"須王&恩田":["須王芦佳","恩田灯世"],"須王&新名":["須王芦佳","新名有"],"須王&神家":["須王芦佳","神家"],"須王&麻波":["須王芦佳","麻波麗"],
  "綾戸&宇京":["綾戸恋","宇京真央"],"綾戸&樋宮":["綾戸恋","樋宮明星"],"綾戸&環野":["綾戸恋","環野揺"],"綾戸&槻本":["綾戸恋","槻本大河"],"綾戸&壱川":["綾戸恋","壱川春日"],"綾戸&隠岐谷":["綾戸恋","隠岐谷誓"],"綾戸&節見":["綾戸恋","節見静"],"綾戸&御門":["綾戸恋","御門尊"],"綾戸&新開":["綾戸恋","新開戦"],"綾戸&相沢":["綾戸恋","相沢篠信"],"綾戸&在間":["綾戸恋","在間樹帆"],"綾戸&祠堂":["綾戸恋","祠堂恭耶"],"綾戸&立科":["綾戸恋","立科吏来"],"綾戸&恩田":["綾戸恋","恩田灯世"],"綾戸&新名":["綾戸恋","新名有"],"綾戸&神家":["綾戸恋","神家"],"綾戸&麻波":["綾戸恋","麻波麗"],
  "宇京&樋宮":["宇京真央","樋宮明星"],"宇京&環野":["宇京真央","環野揺"],"宇京&槻本":["宇京真央","槻本大河"],"宇京&壱川":["宇京真央","壱川春日"],"宇京&隠岐谷":["宇京真央","隠岐谷誓"],"宇京&節見":["宇京真央","節見静"],"宇京&御門":["宇京真央","御門尊"],"宇京&新開":["宇京真央","新開戦"],"宇京&相沢":["宇京真央","相沢篠信"],"宇京&在間":["宇京真央","在間樹帆"],"宇京&祠堂":["宇京真央","祠堂恭耶"],"宇京&立科":["宇京真央","立科吏来"],"宇京&恩田":["宇京真央","恩田灯世"],"宇京&新名":["宇京真央","新名有"],"宇京&神家":["宇京真央","神家"],"宇京&麻波":["宇京真央","麻波麗"],
  "樋宮&環野":["樋宮明星","環野揺"],"樋宮&槻本":["樋宮明星","槻本大河"],"樋宮&壱川":["樋宮明星","壱川春日"],"樋宮&隠岐谷":["樋宮明星","隠岐谷誓"],"樋宮&節見":["樋宮明星","節見静"],"樋宮&御門":["樋宮明星","御門尊"],"樋宮&新開":["樋宮明星","新開戦"],"樋宮&相沢":["樋宮明星","相沢篠信"],"樋宮&在間":["樋宮明星","在間樹帆"],"樋宮&祠堂":["樋宮明星","祠堂恭耶"],"樋宮&立科":["樋宮明星","立科吏来"],"樋宮&恩田":["樋宮明星","恩田灯世"],"樋宮&新名":["樋宮明星","新名有"],"樋宮&神家":["樋宮明星","神家"],"樋宮&麻波":["樋宮明星","麻波麗"],
  "環野&槻本":["環野揺","槻本大河"],"環野&壱川":["環野揺","壱川春日"],"環野&隠岐谷":["環野揺","隠岐谷誓"],"環野&節見":["環野揺","節見静"],"環野&御門":["環野揺","御門尊"],"環野&新開":["環野揺","新開戦"],"環野&相沢":["環野揺","相沢篠信"],"環野&在間":["環野揺","在間樹帆"],"環野&祠堂":["環野揺","祠堂恭耶"],"環野&立科":["環野揺","立科吏来"],"環野&恩田":["環野揺","恩田灯世"],"環野&新名":["環野揺","新名有"],"環野&神家":["環野揺","神家"],"環野&麻波":["環野揺","麻波麗"],
  "槻本&壱川":["槻本大河","壱川春日"],"槻本&隠岐谷":["槻本大河","隠岐谷誓"],"槻本&節見":["槻本大河","節見静"],"槻本&御門":["槻本大河","御門尊"],"槻本&新開":["槻本大河","新開戦"],"槻本&相沢":["槻本大河","相沢篠信"],"槻本&在間":["槻本大河","在間樹帆"],"槻本&祠堂":["槻本大河","祠堂恭耶"],"槻本&立科":["槻本大河","立科吏来"],"槻本&恩田":["槻本大河","恩田灯世"],"槻本&新名":["槻本大河","新名有"],"槻本&神家":["槻本大河","神家"],"槻本&麻波":["槻本大河","麻波麗"],
  "壱川&隠岐谷":["壱川春日","隠岐谷誓"],"壱川&節見":["壱川春日","節見静"],"壱川&御門":["壱川春日","御門尊"],"壱川&新開":["壱川春日","新開戦"],"壱川&相沢":["壱川春日","相沢篠信"],"壱川&在間":["壱川春日","在間樹帆"],"壱川&祠堂":["壱川春日","祠堂恭耶"],"壱川&立科":["壱川春日","立科吏来"],"壱川&恩田":["壱川春日","恩田灯世"],"壱川&新名":["壱川春日","新名有"],"壱川&神家":["壱川春日","神家"],"壱川&麻波":["壱川春日","麻波麗"],
  "隠岐谷&節見":["隠岐谷誓","節見静"],"隠岐谷&御門":["隠岐谷誓","御門尊"],"隠岐谷&新開":["隠岐谷誓","新開戦"],"隠岐谷&相沢":["隠岐谷誓","相沢篠信"],"隠岐谷&在間":["隠岐谷誓","在間樹帆"],"隠岐谷&祠堂":["隠岐谷誓","祠堂恭耶"],"隠岐谷&立科":["隠岐谷誓","立科吏来"],"隠岐谷&恩田":["隠岐谷誓","恩田灯世"],"隠岐谷&新名":["隠岐谷誓","新名有"],"隠岐谷&神家":["隠岐谷誓","神家"],"隠岐谷&麻波":["隠岐谷誓","麻波麗"],
  "節見&御門":["節見静","御門尊"],"節見&新開":["節見静","新開戦"],"節見&相沢":["節見静","相沢篠信"],"節見&在間":["節見静","在間樹帆"],"節見&祠堂":["節見静","祠堂恭耶"],"節見&立科":["節見静","立科吏来"],"節見&恩田":["節見静","恩田灯世"],"節見&新名":["節見静","新名有"],"節見&神家":["節見静","神家"],"節見&麻波":["節見静","麻波麗"],
  "御門&新開":["御門尊","新開戦"],"御門&相沢":["御門尊","相沢篠信"],"御門&在間":["御門尊","在間樹帆"],"御門&祠堂":["御門尊","祠堂恭耶"],"御門&立科":["御門尊","立科吏来"],"御門&恩田":["御門尊","恩田灯世"],"御門&新名":["御門尊","新名有"],"御門&神家":["御門尊","神家"],"御門&麻波":["御門尊","麻波麗"],
  "新開&相沢":["新開戦","相沢篠信"],"新開&在間":["新開戦","在間樹帆"],"新開&祠堂":["新開戦","祠堂恭耶"],"新開&立科":["新開戦","立科吏来"],"新開&恩田":["新開戦","恩田灯世"],"新開&新名":["新開戦","新名有"],"新開&神家":["新開戦","神家"],"新開&麻波":["新開戦","麻波麗"],
  "相沢&在間":["相沢篠信","在間樹帆"],"相沢&祠堂":["相沢篠信","祠堂恭耶"],"相沢&立科":["相沢篠信","立科吏来"],"相沢&恩田":["相沢篠信","恩田灯世"],"相沢&新名":["相沢篠信","新名有"],"相沢&神家":["相沢篠信","神家"],"相沢&麻波":["相沢篠信","麻波麗"],
  "在間&祠堂":["在間樹帆","祠堂恭耶"],"在間&立科":["在間樹帆","立科吏来"],"在間&恩田":["在間樹帆","恩田灯世"],"在間&新名":["在間樹帆","新名有"],"在間&神家":["在間樹帆","神家"],"在間&麻波":["在間樹帆","麻波麗"],
  "祠堂&立科":["祠堂恭耶","立科吏来"],"祠堂&恩田":["祠堂恭耶","恩田灯世"],"祠堂&新名":["祠堂恭耶","新名有"],"祠堂&神家":["祠堂恭耶","神家"],"祠堂&麻波":["祠堂恭耶","麻波麗"],
  "立科&恩田":["立科吏来","恩田灯世"],"立科&新名":["立科吏来","新名有"],"立科&神家":["立科吏来","神家"],"立科&麻波":["立科吏来","麻波麗"],
  "恩田&新名":["恩田灯世","新名有"],"恩田&神家":["恩田灯世","神家"],"恩田&麻波":["恩田灯世","麻波麗"],
  "新名&神家":["新名有","神家"],"新名&麻波":["新名有","麻波麗"],
  "神家&麻波":["神家","麻波麗"]
}

function toggleFilter(){

    const panel = document.getElementById("filterPanel");

    if(panel.style.display === "none" || panel.style.display === ""){
        panel.style.display = "block";
    }else{
        panel.style.display = "none";
    }

}

function getCheckedValues(selector){
  return [...document.querySelectorAll(selector + ":checked")]
    .map(el => el.value)
}

function removeFilter(value){
  document.querySelectorAll('input[type="checkbox"]').forEach(el=>{
    if(el.value === value){
      el.checked = false
    }
  })
  render()
}

function applyFilters(cards){
  const characterList = getCheckedValues('input[name="character"]')
  const rarityList = getCheckedValues('input[name="rarity"]')
  const attrList = getCheckedValues('input[name="attr"]')
  const deptList = getCheckedValues('input[name="dept"]')
  const spList = getCheckedValues('input[name="sp"]')
  const autoList = getCheckedValues('input[name="auto"]')
  const comboList = getCheckedValues('input[name="combo"]')

  const keyword =
      document.getElementById("keywordSearch")
        ?.value
        .trim()
        .toLowerCase()

  return cards.filter(card => {

    if(characterList.length) {
      const matched = characterList.some(character => {
        if (card.character === character) {
          return true
        }
        if (card.rarity === "CR"){
          const characters = combinationCharacters[card.character] || []
          return characters.includes(character)
        }
        return false
      })
      if(!matched) return false  
    }
    if(rarityList.length && !rarityList.includes(card.rarity)) return false
    if(attrList.length && !attrList.includes(card.attribute)) return false
    if(deptList.length && !deptList.some(v => [].concat(card.department || []).includes(v))) return false
    if(spList.length && !spList.some(v => [].concat (card.spSkill || []).includes(v))) return false
    if(autoList.length && !autoList.some(v => [].concat (card.autoSkill || []).includes(v))) return false
    if(comboList.length && !comboList.includes(card.combination)) return false

    if(keyword){

      const text = [
      card.leaderSkill || "",
      card.spDetail || "",
      card.autoDetail || ""
    ]
    .join(" ")
    .toLowerCase()

    if(!text.includes(keyword)) return false
  }
    
    return true
    
  })

}

function renderActiveFilters(){

  const rarityList = getCheckedValues('input[name="rarity"]')
  const attrList = getCheckedValues('input[name="attr"]')
  const deptList = getCheckedValues('input[name="dept"]')
  const spList = getCheckedValues('input[name="sp"]')
  const autoList = getCheckedValues('input[name="auto"]')
  const comboList = getCheckedValues('input[name="combo"]')

  const active = [
    ...rarityList,
    ...attrList,
    ...deptList,
    ...spList,
    ...autoList,
    ...comboList
  ]

  let tagHTML = ""

  active.forEach(v => {
    tagHTML += `
      <span class="filter-tag" onclick="removeFilter('${v}')">
        ${v} ×
      </span>
    `
  })

  const box = document.getElementById("activeFilters")
  if(box) box.innerHTML = tagHTML
}

function applyAndCloseFilter(){
  render() 
  document.getElementById("filterPanel").style.display = "none"
}

function createComboFilter(){
  const combos = [...new Set(
    cards
      .map(c => c.combination)
      .filter(c => c && c !== "")
  )]

  let html = ""

  departmentOrder.forEach(dept => {

    const deptCombos = characterOrder.filter(name =>
      characterDepartment[name] === dept &&
      combos.includes(name)
    )

    if (!deptCombos.length) return

    html += `<div class="character-row">`

    deptCombos.forEach(name => {
      html += `
        <label>
          <input type="checkbox" name="combo" value="${name}" onchange="render()">
          ${name}
        </label>
      `
    })

    html += `</div>`
  })

  document.getElementById("comboFilter").innerHTML = html
}

document
  .getElementById("filterButton")
  ?.addEventListener("click", toggleFilter);
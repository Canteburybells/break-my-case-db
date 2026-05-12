function toggleFilter(){
  const panel = document.getElementById("filterPanel")
  panel.style.display =
    panel.style.display === "none" ? "block" : "none"
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

  const rarityList = getCheckedValues('input[name="rarity"]')
  const attrList = getCheckedValues('input[name="attr"]')
  const deptList = getCheckedValues('input[name="dept"]')
  const spList = getCheckedValues('input[name="sp"]')
  const autoList = getCheckedValues('input[name="auto"]')
  const comboList = getCheckedValues('input[name="combo"]')

  return cards.filter(card => {

    if(rarityList.length && !rarityList.includes(card.rarity)) return false
    if(attrList.length && !attrList.includes(card.attribute)) return false
    if(deptList.length && !deptList.includes(card.department)) return false
    if(spList.length && !spList.some(v => [].concat (card.spSkill || []).includes(v))) return false
    if(autoList.length && !autoList.some(v => [].concat (card.autoSkill || []).includes(v))) return false
    if(comboList.length && !comboList.includes(card.combination)) return false

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
  render() // フィルタ反映
  document.getElementById("filterPanel").style.display = "none"
}

function createComboFilter(){

  const combos = [...new Set(
  cards
    .map(c => c.combination)
    .filter(c => c && c !== "")
)]

combos.sort((a,b)=>
  comboOrder.indexOf(a) - comboOrder.indexOf(b)
)

  let html = ""

  combos.forEach(name=>{
    html += `
      <label>
        <input type="checkbox" name="combo" value="${name}" onchange="render()">
        ${name}
      </label>
    `
  })

  document.getElementById("comboFilter").innerHTML = html
}

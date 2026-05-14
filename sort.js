function sortByCharacter(cards){

  return [...cards].sort((a,b)=>{

    return characterOrder.indexOf(a.character) -
           characterOrder.indexOf(b.character)

  })

}

function sortCardsDefault(cards){

  return [...cards].sort((a,b)=>{

    // ① レアリティ順
    const rarity =
      rarityOrder.indexOf(a.rarity) -
      rarityOrder.indexOf(b.rarity)

    if(rarity !== 0) return rarity

    // ② 登場日
    const date =
      new Date(a.date || "1900-01-01") -
      new Date(b.date || "1900-01-01")

    if(date !== 0) return date

    // ③ 同日特別順
    const special =
      sameDateOrder.indexOf(a.title) -
      sameDateOrder.indexOf(b.title)

    if(
      sameDateOrder.includes(a.title) &&
      sameDateOrder.includes(b.title)
    ){
      return special
    }

    // ④ キャラクター順
    const character =
      characterOrder.indexOf(a.character) -
      characterOrder.indexOf(b.character)

    return character

  })

}

function sortCards(cards){

  cards = cards.filter(c => c && c.title)

  const type = document.getElementById("sortType")?.value || "default"
  const order = document.getElementById("sortOrder")?.value || "asc"

  let sorted = [...cards]

  sorted.sort((a,b)=>{

    console.log(a.title, sameDateOrder.indexOf(a.title))

    // 安全なindex取得
    const getChar = c => {
      const i = characterOrder.indexOf(c.character)
      return i === -1 ? 999 : i
    }

    const getRarity = c => {
      const i = rarityOrder.indexOf(c.rarity)
      return i === -1 ? 999 : i
    }

    const getDate = c =>
      new Date(c.date || "1900-01-01").getTime()

    const getSpecial = c => {
      const i = sameDateOrder.indexOf(c.title)
      return i === -1 ? 999 : i
    }

    let result = 0 

    if(type === "default"){
      // レア → 日付 →キャラ 
      result =
        getRarity(a) - getRarity(b) ||
        getDate(a) - getDate(b) ||
        getSpecial(a) - getSpecial(b) ||
        getChar(a) - getChar(b)
    }

    else if(type === "character"){
      // キャラ → レア → 日付
      result =
        getChar(a) - getChar(b) ||
        getRarity(a) - getRarity(b) ||
        getDate(a) - getDate(b)
    }

    else if(type === "power"){
      // 総合力（高い順）
      result = (b.power || 0) - (a.power || 0)
    }

    return order === "desc" ? -result : result
  })

  return sorted
}

function sortBirthdayCards(cards){

  const type = document.getElementById("sortType").value
  const order = document.getElementById("sortOrder").value

  let sorted = [...cards]

  // 🔸デフォルト（排出順）
  if(type === "default"){
    sorted.sort((a,b)=>{
      return new Date(a.date || "1900-01-01")-
             new Date(b.date || "1900-01-01")
    })
  }

  // 🔸キャラ順
  if(type === "character"){
    sorted.sort((a,b)=>{
      return characterOrder.indexOf(a.character) -
             characterOrder.indexOf(b.character)
    })
  }

  // 🔸総合力
  if(type === "power"){
    sorted.sort((a,b)=>{
      return (a.power || 0) - (b.power || 0)
    })
  }

  // 🔸昇順・降順
  if(order === "desc"){
    sorted.reverse()
  }

  return sorted
}

function sortEventCards(cards){

  return [...cards].sort((a,b)=>{

    // ① レアリティ（高い順）
    const rarityDiff =
      rarityOrder.indexOf(a.rarity) -
      rarityOrder.indexOf(b.rarity)

    if(rarityDiff !== 0) return rarityDiff

    // ② キャラクター順
    return characterOrder.indexOf(a.character) -
           characterOrder.indexOf(b.character)
  })
}
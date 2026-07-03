// ==============================
// 共通
// ==============================

const getChar = card => {

  const firstCharacter = card.character.split("&")[0]

  const fullName =
    characterOrder.find(name => name.startsWith(firstCharacter))

  const i = characterOrder.indexOf(fullName)

  return i === -1 ? 999 : i

}

const getRarity = card => {
  const i = rarityOrder.indexOf(card.rarity)
  return i === -1 ? 999 : i
}

const getDate = card =>
  new Date(card.date || "1900-01-01").getTime()

const getSpecial = card => {

  const order = specialOrders[card.date]

  if(!order) return 999

  const i = order.indexOf(card.title)

  return i === -1 ? 999 : i

}

// ==============================
// キャラクター順のみ
// ==============================

function sortByCharacter(cards){

  return [...cards].sort((a,b)=>

    getChar(a)-getChar(b)

  )

}

// ==============================
// カード一覧
// ==============================

function sortCards(cards){

  cards = cards.filter(card => card && card.title)

  const type =
    document.getElementById("sortType")?.value || "default"

  const order =
    document.getElementById("sortOrder")?.value || "desc"

  const sorted = [...cards]

  sorted.sort((a,b)=>{

    switch(type){

      // --------------------------
      // デフォルト
      // --------------------------

      case "default":{

        let result =
          order==="asc"
            ? getRarity(b)-getRarity(a)
            : getRarity(a)-getRarity(b)

        if(result) return result

        result =
          getDate(a)-getDate(b)

        if(result) return result

        result =
          getSpecial(a)-getSpecial(b)

        if(result) return result

        return getChar(a)-getChar(b)

      }

      // --------------------------
      // キャラクター
      // --------------------------

      case "character":{

        let result =
          order==="asc"
            ? getChar(b)-getChar(a)
            : getChar(a)-getChar(b)

        if(result) return result

        result =
          getDate(a)-getDate(b)

        if(result) return result

        result =
          getSpecial(a)-getSpecial(b)

        if(result) return result

        return getRarity(a)-getRarity(b)

      }

      // --------------------------
      // 総合力
      // --------------------------

      case "power":{

        let result =
          order==="asc"
            ? (a.power||0)-(b.power||0)
            : (b.power||0)-(a.power||0)

        if(result) return result

        result =
          getRarity(a)-getRarity(b)

        if(result) return result

        result =
          getDate(a)-getDate(b)

        if(result) return result

        result =
          getSpecial(a)-getSpecial(b)

        if(result) return result

        return getChar(a)-getChar(b)

      }

    }

  })

  return sorted

}

// ==============================
// 誕生日カード
// ==============================

function sortBirthdayCards(cards){

  const type =
    document.getElementById("sortType").value

  const sorted = [...cards]

  let compare

  switch(type){

    case "character":

      compare = (a,b)=>

        getChar(a)-getChar(b)

      break

    case "power":

      compare = (a,b)=>

        (a.power||0)-(b.power||0)

      break

    default:

      compare = (a,b)=>

        getDate(a)-getDate(b)

  }

    sorted.sort(compare)

  return sorted

}

// ==============================
// イベントカード
// ==============================

function sortEventCards(cards){

  return [...cards].sort((a,b)=>

    getRarity(a)-getRarity(b) ||

    getChar(a)-getChar(b)

  )

}
const getChar = card => {

  const firstCharacter = (card.character || "").split("&")[0]

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

  if (!card.sortId) return 999

  const specialOrder = specialOrders.special || []

  const specialIndex =
    specialOrder.indexOf(card.sortId)

  if (specialIndex !== -1) {
    return specialIndex
  }

  return 999
}

const getDateSpecial = card => {

  const order = specialOrders[card.date]

  if (!order) return 999

  const i = order.indexOf(card.title)

  return i === -1 ? 999 : i
}

function sortByCharacter(cards){

  return [...cards].sort((a, b) =>

    getChar(a) - getChar(b)

  )

}

function sortCards(cards){

  cards = cards.filter(card => card && card.title)

  const type =
    document.getElementById("sortType")?.value || "default"

  const order =
    document.getElementById("sortOrder")?.value || "desc"

  const sorted = [...cards]


  sorted.sort((a, b) => {

    switch(type){

      case "default": {

  let result =
    order === "asc"
      ? getRarity(b) - getRarity(a)
      : getRarity(a) - getRarity(b)

  if(result) return result

  const specialA = getSpecial(a)
  const specialB = getSpecial(b)

  if(specialA !== 999 && specialB !== 999){

    result = specialA - specialB

    if(result) return result
  }

  result =
    getDate(a) - getDate(b)

  if(result) return result

  result =
    getDateSpecial(a) - getDateSpecial(b)

  if(result) return result

  return getChar(a) - getChar(b)
}

      case "character": {

        let result =
          order === "asc"
            ? getChar(b) - getChar(a)
            : getChar(a) - getChar(b)

        if(result) return result

        result =
          getDate(a) - getDate(b)

        if(result) return result

        result =
          getSpecial(a) - getSpecial(b)

        if(result) return result

        result =
          getDateSpecial(a) - getDateSpecial(b)

        if(result) return result

        return getRarity(a) - getRarity(b)

      }

      case "power": {

        let result =
          order === "asc"
            ? (a.power || 0) - (b.power || 0)
            : (b.power || 0) - (a.power || 0)

        if(result) return result

        result =
          getRarity(a) - getRarity(b)

        if(result) return result

        result =
          getDate(a) - getDate(b)

        if(result) return result

        result =
          getSpecial(a) - getSpecial(b)

        if(result) return result

        result =
          getDateSpecial(a) - getDateSpecial(b)

        if(result) return result

        return getChar(a) - getChar(b)

      }

    }

  })

  return sorted

}

function sortBirthdayCards(cards){

  const type =
    document.getElementById("sortType")?.value || "default"

  const sorted = [...cards]

  let compare

  switch(type){

    case "character":

      compare = (a, b) =>
        getChar(a) - getChar(b)

      break


    case "power":

      compare = (a, b) =>
        (a.power || 0) - (b.power || 0)

      break


    default:

      compare = (a, b) =>
        getDate(a) - getDate(b)

  }

  sorted.sort(compare)

  return sorted

}

function sortEventCards(cards){

  return [...cards].sort((a, b) =>

    getRarity(a) - getRarity(b) ||

    getChar(a) - getChar(b)

  )

}
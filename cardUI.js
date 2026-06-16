function createCard(card, showOwned = false){

  const owned = getOwned().includes(card.id)

  return `
  <div class="card"
    onclick="${
      showOwned
        ? `toggleOwned(${card.id}); if(typeof render==='function'){render()}`
        : `goDetail(${card.id})`
    }"
  >
    <img
      src="${card.image}"
      draggable="false"
      style="opacity:${showOwned ? (owned ? 1 : 0.3) : 1}"
      onerror="this.src='${getNoImage(card)}'"
    >

    <p>${card.title || card.name}</p>
  </div>
  `
}

function showRewardCards(){

  let rewardCards =
    cards.filter(c => c.type === "報酬")

  rewardCards = sortCards(rewardCards)

  let html = ""

  rewardCards.forEach(card => {
    html += createCard(card)
  })

  document.getElementById("cardlist").innerHTML = html
}

function showEventList(cards){

  const events = [...new Set(
    cards.map(c => (c.event || "").trim()).filter(e => e)
  )]

  events.sort((a,b)=>{
    return eventOrder.indexOf(a) - eventOrder.indexOf(b)
  })

  let html = ""

  events.forEach(e => {

    html += `
      <div class="event-item"
        onclick="location.href='event.html?name=${encodeURIComponent(e)}'">
        ${e}
      </div>
    `
  })

  document.getElementById("cardlist").innerHTML = html
}

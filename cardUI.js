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

function showEventList(cards, order){

  const events = [...new Set(
    cards.map(c => (c.event || "").trim()).filter(e => e)
  )]

  if(order === "asc"){

  events.sort((a,b)=>

    eventOrder.indexOf(b) -
    eventOrder.indexOf(a)

  )

}else{

  events.sort((a,b)=>

    eventOrder.indexOf(a) -
    eventOrder.indexOf(b)

  )

}

  let html = ""

  events.forEach(e => {

  const rewards = cards.filter(card =>
    card.event === e &&
    card.type === "報酬"
  )

  let images = ""

  if (rewards.length) {

    rewards.forEach(card => {

      images += `
        <img
          src="${card.image}"
          class="event-banner"
          onerror="this.src='${getNoImage(card)}'"
        >
      `

    })

  } else {

    images = `
      <img
        src="${eventImages[e] || "image/event/イベント画像準備中.png"}"
        class="event-banner"
      >
    `

  }

  html += `
    <div class="event-item"
      onclick="location.href='event.html?name=${encodeURIComponent(e)}'">

      <div class="event-images">
        ${images}
      </div>

      <p>${e}</p>
    </div>
  `
})

  document.getElementById("cardlist").innerHTML = html
}
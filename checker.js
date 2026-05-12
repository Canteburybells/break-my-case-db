function render(){

  let owned = getOwned()

  let rate = cards.length === 0 ? 0 :
    (owned.length / cards.length * 100).toFixed(1)

  document.getElementById("rate").innerText =
    owned.length + " / " + cards.length + " (" + rate + "%)"

  // ★ここが重要
  let sorted = sortCards(cards)

  let html = ""
  sorted.forEach(card=>{
    html += createCard(card, true)
  })

  document.getElementById("cardlist").innerHTML = html
}

fetch("cards.json")
  .then(res => res.json())
  .then(data => {
    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))
    render()
  })
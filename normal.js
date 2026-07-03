fetch("cards.json")
  .then(res => res.json())
  .then(data => {

    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))

    document.getElementById("sortOrder").value = "desc";

    render()
  })

function render(){

  let filtered = cards.filter(card =>
    (card.type || "").trim() === "恒常"
  )

  filtered = applyFilters(filtered)

  renderActiveFilters()

  filtered = sortCards(filtered)

  let html = ""

  filtered.forEach(card => {
    html += createCard(card)
  })

  const cardlist =
    document.getElementById("cardlist")

  if(cardlist){
    cardlist.innerHTML = html
  }
}

document
  .getElementById("sortType")
  ?.addEventListener("change", render)

document
  .getElementById("sortOrder")
  ?.addEventListener("change", render)
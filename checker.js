function render(){

  let owned = getOwned()

  let rate = cards.length === 0 ? 0 :
    (owned.length / cards.length * 100).toFixed(1)

  document.getElementById("rate").innerText =
    owned.length + " / " + cards.length + " (" + rate + "%)"

  let filtered = applyFilters(cards)

  let sorted = sortCards(filtered)

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

    document.getElementById("sortOrder").value = "desc";

    createComboFilter()
    render()
  })
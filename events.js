fetch("cards.json")
  .then(res => res.json())
  .then(data => {

    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))

    render()

  })

function render(){

  let keyword =
    document.getElementById("search")
    ?.value
    .toLowerCase() || ""

  let filtered = cards.filter(card => {

    const eventName =
      (card.event || "").toLowerCase()

    return eventName.includes(keyword)

  })

  showEventList(filtered)
}

document
  .getElementById("search")
  ?.addEventListener("input", render)

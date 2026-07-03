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

  const keyword =
    document.getElementById("search")
      ?.value
      .toLowerCase() || ""

  const order =
    document.getElementById("sortOrder")
      ?.value || "desc"

  const filtered = cards.filter(card => {

    const eventName =
      (card.event || "").toLowerCase()

    return eventName.includes(keyword)

  })

  showEventList(filtered, order)

}

document
  .getElementById("search")
  ?.addEventListener("input", render)

document
  .getElementById("sortOrder")
  ?.addEventListener("change", render)
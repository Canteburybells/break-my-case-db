function render(){

  const themeElement =
    document.getElementById("themeFilter")

  let theme =
    themeElement ? themeElement.value : "all"

  let filtered = cards
    .filter(c =>
      (c.type || "").trim() === "誕生日"
    )
    .filter(c =>
      theme === "all" || c.theme === theme
    )

  filtered = sortBirthdayCards(filtered)

  let html = ""

  filtered.forEach(c => {
    html += createCard(c)
  })

  const cardlist =
    document.getElementById("cardlist")

  if(cardlist){
    cardlist.innerHTML = html
  }
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

document
  .getElementById("themeFilter")
  ?.addEventListener("change", render)

document
  .getElementById("sortType")
  ?.addEventListener("change", render)

document
  .getElementById("sortOrder")
  ?.addEventListener("change", render)
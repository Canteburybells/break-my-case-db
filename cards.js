fetch("cards.json")
  .then(res => res.json())
  .then(data => {
    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))

    createComboFilter()
    render()
  })

function render(){

  let keyword = document.getElementById("search")?.value.toLowerCase() || ""
  let year = document.getElementById("yearFilter").value

  let filtered = cards.filter(card=>{
    let title = (card.title || "").toLowerCase()
    let character = (card.character || "").toLowerCase()
    
    const matchKeyword =
    !keyword || title.includes(keyword) || character.includes(keyword)

    const matchYear =
      year === "all" || card.year == year

    return matchKeyword && matchYear
  })

  filtered = applyFilters(filtered)

  renderActiveFilters()
 
  filtered = sortCards(filtered)

  let html=""
  filtered.forEach(card=>{
    html += createCard(card)
  })

  document.getElementById("cardlist").innerHTML = html
}

document.getElementById("search").addEventListener("input", render)
document.getElementById("yearFilter").addEventListener("change", render)
document.getElementById("sortType").addEventListener("change", render)
document.getElementById("sortOrder").addEventListener("change", render)

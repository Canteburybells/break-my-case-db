fetch("cards.json")
  .then(res => res.json())
  .then(data => {
    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))
    render()
  })

let params = new URLSearchParams(location.search)
let eventName = params.get("name")

const title = document.getElementById("title")

if(title){
  title.innerText = eventName
}

function render(){

  let type = document.getElementById("sortType").value
  let order = document.getElementById("sortOrder").value

 let eventCards = cards
  .filter(card => card.event === eventName)

 eventCards = applyFilters(eventCards)

renderActiveFilters()

  if(type === "default"){
  eventCards = sortEventCards(eventCards)

}else if(type === "character"){
  eventCards.sort((a,b)=>
    characterOrder.indexOf(a.character) -
    characterOrder.indexOf(b.character)
  )

}else if(type === "power"){
  eventCards.sort((a,b)=>
    (a.power || 0) - (b.power || 0)
  )
}

  if(order === "desc"){
    eventCards.reverse()
  }

  let html = ""
  eventCards.forEach(card => {
    html += createCard(card)
  })

  document.getElementById("cardlist").innerHTML = html
}

document
  .getElementById("sortType")
  ?.addEventListener("change", render)

document
  .getElementById("sortOrder")
  ?.addEventListener("change", render)


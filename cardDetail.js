let params = new URLSearchParams(location.search)
let id = Number(params.get("id")) 

fetch("cards.json")
  .then(res => res.json())
  .then(data => {

    cards = data.map((card, index) => ({
      ...card,
      id: index
    }))

    let card = cards.find(c => c.id === id)

    if(card){

      document.getElementById("detail").innerHTML = `

        <div class="detail-links">
          <a href="javascript:history.back()">← 戻る</a>
        </div>

        <h1>${card.title || card.name}</h1>

        <img
          src="${card.image}"
          class="detail-image"
          onerror="this.src='image/画像準備中.png'"
        >

        <p>キャラ: ${card.character}</p>

        <p>レア度: ${card.rarity}</p>

        <p>属性: ${card.attribute}</p>

        <p>総合力: ${card.power || "-"}</p>

        <p>種類: ${card.type}</p>

        ${card.event ? `<p>イベント: ${card.event}</p>` : ""}

        <hr>

        ${card.leaderSkill ? `
          <h3>LEADER</h3>
          <p>${card.leaderSkill}</p>
          ` : ""}

        <h3>SPスキル</h3>
        <p>分類：${[].concat(card.spSkill || []).join(" / ")}</p>
        <p>${card.spDetail || ""}</p>

        <h3>オートスキル</h3>
        <p>分類：${[].concat(card.autoSkill || []).join(" / ")}</p>
        <p>${card.autoDetail || ""}</p>

        ${
        card.combination
        ? `<p>コンビネーション: ${card.combination}</p>`
        : ""
        }

        <div class="detail-links">
          <a href="#top">↑ 上へ戻る</a>
          <a href="javascript:history.back()">← 戻る</a>
        </div>

      `
    }

  })
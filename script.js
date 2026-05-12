
combos.sort((a,b)=>
  comboOrder.indexOf(a) - comboOrder.indexOf(b)
)

  let html = ""

  combos.forEach(name=>{
    html += `
      <label>
        <input type="checkbox" name="combo" value="${name}" onchange="render()">
        ${name}
      </label>
    `
  })

  document.getElementById("comboFilter").innerHTML = html



function pos(e) {
    const x = e.clientX 
    const y = e.clientY
    const timeStamp = e.timeStamp

    const div = document.getElementById("event-info")

    const info = `
        <p>Mouse Position: ${x}, ${y}</p>
        <p>Time stamp: ${timeStamp.toFixed(2)}</p>
    `

    div.innerHTML = info
}

document.onmouseup = pos
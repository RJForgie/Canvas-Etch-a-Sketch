var app = function () {
  var canvas = document.querySelector("#main-canvas")
  var context = canvas.getContext("2d")

  // context.strokeStyle = "dodgerBlue"
  context.fillStyle = "dodgerBlue"
  // context.strokeRect(10, 10, 50, 50)
  context.fillRect(10, 10, 50, 50)

  context.beginPath()
  context.moveTo(100, 100)
  context.lineTo(100, 200)
  context.stroke()

  context.beginPath()
  context.moveTo(200, 200)
  context.lineTo(200, 300)
  context.lineTo(100, 300)
  context.closePath()
  context.fill()

  context.beginPath()
  context.arc(300, 300, 40, 0, 360)
  context.closePath()
  context.stroke()
  context.fill()



  canvas.addEventListener("move", function (event) {
    // console.log("clicked", event)
    drawCircle(event.x, event.y)
  })

  var img = document.createElement("img")
  img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"
    var drawDoge = function () {
      context.drawImage(img, 400, 400, 90, 90)
    }

    img.addEventListener("move", drawDoge)

    var changeColour = function () {
      context.fillStyle = this.value
    }

    var colourPicker = document.querySelector("#input-colour")
    colourPicker.addEventListener("change", changeColour)

    var drawCircle = function (x, y) {
      context.beginPath()
      context.arc(x, y, 40, 0, 360)
      context.closePath()
      context.stroke()
      context.fill()

    }
}

window.addEventListener("load", app)

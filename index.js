document.addEventListener("DOMContentLoaded", () => {

    var seconds = 0;
    var tens = 0;
    var countTens = document.getElementById('tens')
    var countSeconds = document.getElementById('seconds')
    var startButton = document.getElementById('start')
    var stopButton = document.getElementById('stop')
    var resetButton = document.getElementById('reset')
    var time;
    //will run when click on start
    console.log(startButton)

    function startTimer() {
        tens++;
        if (tens < 9) {
            countTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            countTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            countSeconds.innerHTML = seconds + " :";
            tens = 0
            countTens.innerHTML = "0" + 0
        }

        if (seconds > 9) {
            countSeconds.innerHTML = seconds;
        }
    }

    startButton.addEventListener("click", function () {
        time = setInterval(startTimer, 10)
    });

    stopButton.addEventListener("click", function () {
        clearInterval(time);
    });

    resetButton.addEventListener("click", function () {
        clearInterval(time);
        let tensCode = "00"
        let secondsCode = "0 :"
        seconds = 0
        tens = 0
        countSeconds.innerHTML = secondsCode
        countTens.innerHTML = tensCode
    })


    //canvas
   
    //FIELD
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 800;
    canvasEl.height = 600;
    const ctx = canvasEl.getContext("2d");
    //dugouts
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 800, 700)
    ctx.fillStyle = "yellow"
    ctx.fillRect(0, 300, 75, 200)
    ctx.fillStyle = "blue"
    ctx.fillRect(725, 300, 75, 200)
    
    //basepaths
    ctx.beginPath()
    ctx.moveTo(400, 400)
    ctx.lineTo(250, 250)
    ctx.lineTo(400, 100)
    ctx.lineTo(550, 250)
    ctx.lineTo(380, 420)
    ctx.lineWidth= 60
    ctx.strokeStyle = 'brown'
    ctx.stroke()

    //foullines
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(400, 400)
    ctx.lineTo(800, 0)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.stroke()

    //mound
    ctx.beginPath();
    ctx.arc(400, 250, 20, 0, Math.PI * 2, false)
    ctx.fillStyle = 'brown'
    ctx.fill()
    ctx.stroke();

    //bases
    //home @ (400, 400)
    ctx.beginPath()
    ctx.arc(400, 400, 7, 0, Math.PI * 2, false)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke();

    //first @ 550, 250
    ctx.beginPath()
    ctx.arc(550, 250, 7, 0, Math.PI * 2, false)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke();

    //second @400, 100
    ctx.beginPath()
    ctx.arc(400, 100, 7, 0, Math.PI * 2, false)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke();

    //third @  250, 250 
    ctx.beginPath()
    ctx.arc(250, 250, 7, 0, Math.PI * 2, false)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke();

    function draw(ctx) { 
        ctx.clearRect(0, 0, 800, 600)
        ctx.fillStyle
    }


    let x = 400;
    let y = 400;
    let dx = 1;
    let dy = 1;
    let radius = 20

     function animate() { 
         requestAnimationFrame(animate);
         //ctx.clearRect(0, 0, 700, 700)
         
         ctx.beginPath();
         ctx.arc(x, y, 10, 0, Math.PI * 2, false);
         ctx.strokeStyle = "red"
         ctx.stroke();
         
         if (x + radius > 570 || x - radius < 230)
             dx = -dx
         if (y + radius < 120 || y + radius > 420)
             dy = -dy
         x += dx;
         y -= dy;
     }

     animate();

    class Player { 
        constructor(x, y) { 
            this.x = x;
            this.y = y;
        }

        advance() { 
            if (this.x === 400 && this.y === 400) {
                while (x + radius < 500 || y + radius < 480) { 
                    let dx = 1
                    let dy = 1
            }
        }

        }
    }
      });
    let p1 = new Player(0, 0)



    // let x = 350;
    // let dx = 1
    // let dy = 1
    // let y = 500;
    // let radius = 20

    // function animate() { 
    //     requestAnimationFrame(animate);
    //     ctx.clearRect(0, 0, ctx.width,ctx.height)
    //     ctx.beginPath();
    //     ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    //     ctx.strokeStyle = "white"
    //     ctx.stroke();
    //     if (x + radius > 500 || x - radius < 200)
    //         dx = -dx
    //     if (y + radius < 260 || y - radius > 480)
    //         dy = -dy

    //     x += dx;
    //     y -= dy;
    // }

    // animate();
  
   
//     // ctx.beginPath();
//     // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//     // ctx.strokeStyle = "green";
//     // ctx.lineWidth = 5;
//     // ctx.stroke();
//     // ctx.fillStyle = "blue";
//     // ctx.fill();
       

// })

// class Game { 
//     constructor() { 
//         this.field = field
//         this.player = player
//         this.baserunners = [] 
//     }

//     atBatMedium() { 
//         if (stopWatch > 0.90 && stopWatch < 0.95) { 
//             this.baseRunners.map(el => el ++)
//             this.baseRunners.push(1)
//         }
//         if (stopWatch >= 0.95 && stopWatch < 0.99) { 
//             this.baseRunners.map(el => el += 2)
//             this.baseRunners.push(2)
//         }
//         if (stopWatch === 0.99) { 
//             this.baseRunners.map(el => el += 3)
//             this.baseRunners.push(3)
//         }
//         if (stopWatch = 1.00 ) { 
//             this.baseRunners.map(el => el + 4)
//             this.baseRunners.push(4)
//         }
//     }

//     Score() { 
//         count = 0 
//         let runs = this.baserunners.filter(x => x >= 4).length
//         return runs;
//     }
// /


//checks what base players are at
//while loop
//check what base
//advance
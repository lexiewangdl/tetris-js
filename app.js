document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') 

    // Store all the cells in an array, each will have its unique index
    // 0 indexed
    let squares = Array.from(document.querySelectorAll('.grid div')) 
    
    const ScoreDisplay = document.querySelector('#score')
    const StartButton = document.querySelector('#start-button')
    
    const width = 10

    // The Tetrominoes
    const lTet = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTet = [
        [width*2, width*2+1, width+1, width+2],
        [0, width, width+1, width*2+1],
        [width*2, width*2+1, width+1, width+2],
        [0, width, width+1, width*2+1]
    ]

    const tTet = [
        [width, 1, width+1, width+2],
        [1, width+1, width*2+1, width+2],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const oTet = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const iTet = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

    const tets = [lTet, zTet, tTet, oTet, iTet]

    let currentPosition = 4
    let currentRotation = 0

    // Randomly select a tetromino and its first rotation
    let r = Math.floor(Math.random()*tets.length)
    let current = tets[r][currentRotation]

    // Draw the tetromino
    function draw() {
        current.forEach(index => {
            squares[currentPosition+index].classList.add('tetromino')
        })
    }

    // Undraw the tetromino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }


    // Make tetromino move down every second
    timerId = setInterval(moveDown, 1000)

    function moveDown() {
        undraw()
        current += width
        draw()
        freeze()
    }

    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
        }
        // New tetromino starts falling
        r = Math.floor(Math.random * tets.length)
        current = tets[r][currentRotation]
        currentPosition = 4
        draw()
    }

    // Move the tetromino left
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        
        }
})


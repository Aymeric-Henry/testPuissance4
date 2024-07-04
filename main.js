function displayTable(input) {
  let toDisplay = ""
  let xSize = 7
  let ySize = 7
  let winSize = 4

  let dataTable = new Array(xSize).fill([]).map(() => new Array(ySize).fill(0))
  let stackSize = new Array(xSize).fill(0)
  let i = 0;

  const regexRow = new RegExp(`(1{${winSize}}|2{${winSize}})`)
  const columnRegex = new RegExp(`(2.{${xSize}}){${winSize}}|(1.{${xSize}}){${winSize}}`)
  const diagonalIncrRegex = new RegExp(`(2.{${xSize + 1}}){${winSize}}|(1.{${xSize + 1}}){${winSize}}`)
  const diagonalDecrRegex = new RegExp(`(2.{${xSize - 1}}){${winSize}}|(1.{${xSize - 1}}){${winSize}}`)


  for (let token of input) {
    let height = stackSize[token]
    dataTable[height][token] = i % 2 ? 1 : 2
    i++
    stackSize[token]++

    // Here adding E as EOL to block edge case for contigunous but not on the same row and diagonal check 
    const resultString = dataTable.map((d) => d.join("")).join("E")

    if (resultString.match(regexRow)) {
      break
    }
    if (resultString.match(columnRegex)) {
      break
    }

    if (resultString.match(diagonalIncrRegex)) {
      break
    }
    if (resultString.match(diagonalDecrRegex)) {
      break
    }
  }


  for (let x = xSize - 1; x >= 0; x--) {
    for (let y = 0; y < ySize; y++) {
      toDisplay += " "
      switch (dataTable[x][y]) {
        case 0:
          toDisplay += "-"
          break
        case 2:
          toDisplay += "X"
          break
        case 1:
          toDisplay += "0"
          break

      }
    }
    toDisplay += "\n"
  }

  console.log(toDisplay)

  return toDisplay
}

const diagonalIncr = [0, 1, 1, 2, 3, 2, 2, 3, 3, 4, 3, 4, 2, 3, 1]
const diagonalDecr = [0, 0, 0, 0, 1, 1, 2, 1, 5, 2, 5, 3]
const diagonalIncrFalse = [6, 4, 0, 0, 1, 2, 1, 1, 1, 2, 2, 3, 2, 3, 1, 2, 0]
const column = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]

displayTable(diagonalIncrFalse)

export default displayTable

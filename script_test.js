
// function getRainbowiterator () {
//   const colors = [' красный ', ' оранжевый ', ' желтый ', ' зеленый ',
//     ' голубой ', ' синий ', ' фиолетовый ']
//   let colorIndex = -1
//   return {
//     next () {
//       if (++colorIndex >= colors.length) colorIndex = 0
//       console.log('colorIndex:' + colorIndex)
//       return { value: colors[colorIndex], done: false }
//     }
//   }
// }
// const rainbowIterator = getRainbowiterator()
// setInterval(() => {
//   console.log(rainbowIterator.next().value)
// }, 1000)

/// //////////////////////////////////////////

// var i
// for (i = 5; i >= 0; i--) {
//   setTimeout(function () {
//     console.log(i === 0 ? 'Старт!' : 'IN:' + i)
//   }, (5 - i) * 1000)
//   console.log('OUT2:' + i)
// }

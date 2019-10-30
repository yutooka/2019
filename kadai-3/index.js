const day  = parseInt(process.argy[2])

if (day % 3 === 0) {
    console.log('あなたは寂しがりやな性格です')
} else if (day % 3 === 1) {
    console.log('あなたは怒りっぽい性格です')
} else if (day % 3 === 2) {
    console.log('あなたは自己中心的な性格です')
}

const getTodo = callback => {
  setTimeout(() => {
    callback ({ text: 'Complete Code Example' })
  }, 2000)
}

getTodo(todo => {
  console.log(todo.text)
})

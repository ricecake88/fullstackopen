
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age ? props.age: 12} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const App = () => {
  const friends = [
    {name: 'Peter', age: 14},
    {name: 'Maya', age: 10}
  ]

  return (
    <>
        <h1>Greetings</h1>
        Maybe { friends.map((friend, idx) => {
         return <div key={idx}>
          <p>Name: {friend.name}</p>
          </div>
        })}
        <Footer />
    </>
  )
}

export default App

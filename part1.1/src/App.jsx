const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    parts.map((item, id) => {
      return <p key={id}>{item.chapter} {item.numOfExercises}
      </p>
    })
  )

}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts.reduce((sum, obj) => { return sum += obj.numOfExercises}, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [{
    chapter: 'Fundamentals of React',
    numOfExercises: 10
  },
  {
    chapter:'Using props to pass data',
    numOfExercises: 7
  },
  {
    chapter: 'State of a component',
    numOfExercises: 14
  }];


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default App

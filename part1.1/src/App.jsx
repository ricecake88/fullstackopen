const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.parts.chapter} {props.parts.numOfExercises}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
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

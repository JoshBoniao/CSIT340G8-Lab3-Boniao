
function App ()  {
  const name = 'Josh C. Boniao'
  const section = 'G8'
  const course ='BSIT'
  const part1 = 'Industry Elective'
  const exercises1 = 3
  const part2 = 'Data Structures'
  const exercises2 = 3
  const part3 = 'Application Development'
  const exercises3 = 3
  const Part = ({part, exercise}) => {
    return(
    <div>
        <p>
        {part}: {exercise} Units
        </p>
    </div>
    )
  }

  const Header = ({course}) => {
  return (
    <div>

      <p>{course}</p>
    </div>
  )
}
  const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
    <div>
        <Part part = {part1} exercise = {exercises1}></Part>
        <Part part = {part2} exercise = {exercises2}></Part>
        <Part part = {part3} exercise = {exercises3}></Part>

    </div>
  )
}
const Footer = ({ name, course, section }) => {
  return (
    <footer>
      {name} - {course} - {section}
    </footer>
  )
}

  return (
    <>
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 ={exercises2} exercises3 = {exercises3}/>
      <div>
        
        
        <p>Number of Units {exercises1 + exercises2 + exercises3}</p>
      </div>
      <Footer name = {name} course = {course} section = {section}></Footer>
    </div>
    </>
  )
}

export default App


function App ()  {
  const course = 'BSIT'
  const name = 'Josh C. Boniao'
  const section = 'G8'
  const Part1 = {
    name: 'Industry Elective',
    units: 3
  }
  const Part2 = {
    name: 'Data Structures',
    units: 3
  }
  const Part3 = {
    name: 'Application Development',
    units: 3
  }

  const total = Part1.units + Part2.units + Part3.units

  const Footer = ({ name, course, section }) => {
  return (
    <footer>
      {name} - {course} - {section}
    </footer>
  )
}



  return (
    <div>
      <h1><b>Course:</b> {course}</h1>
      <p>{Part1.name} - {Part1.units} Units </p>
      <p>{Part2.name} - {Part1.units} Units </p>
      <p>{Part3.name} - {Part1.units} Units </p>
      <p>Total Amount of Units: {total}</p>

      <hr/>
      <Footer name = {name} course = {course} section = {section}/>
    </div>
  )

}

export default App

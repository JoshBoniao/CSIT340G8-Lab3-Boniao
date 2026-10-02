
const Footer = ({ name, course, section }) => {
  return (
    <footer>
      {name} - {course} - {section}
    </footer>
  );
};


function App ()  {
  const course = 'Industry Elective'
  const name = 'Josh C. Boniao'
  const section = 'G8'
  const part = [
    {
      name: "Industry Elective",
      units: 3,
    },
    {
      name: "Data Structures",
      units: 3,
    },
    {
      name: "Application Development",
      units: 3,
    }
  ];
  
  
  const total = part[0].units + part[1].units + part[2].units

  return (
    <div>
      <h1><b>Course:</b> {course}</h1>
      <p>{part[0].name} - {part[0].units} Units </p>
      <p>{part[1].name} - {part[1].units} Units </p>
      <p>{part[2].name} - {part[2].units} Units </p>
      <p>Total Amount of Units: {total}</p>

      <hr />
      <Footer name = {name} course = {course} section = {section}/>
    </div>
  )

}

export default App


function App ()  {
  const name = 'Josh C. Boniao'
  const section = 'G8'
  const course ='CSIT340'
  const part1 = 'Industry Elective'
  const exercises1 = 3
  const part2 = 'Data Structures'
  const exercises2 = 3
  const part3 = 'Application Development'
  const exercises3 = 3

  return (
    <>
      <div>
        <h1>{course}</h1>
        <p>
          {part1}: {exercises1} Units
        </p>
        <p>
          {part2}: {exercises2} Units
        </p>
        <p>
          {part3}: {exercises3} Units
        </p>
        <p>Total Number of Units: {exercises1 + exercises2 + exercises3} Units</p>
      </div>
      
      <footer>{name} - {course} - {section}</footer>
         
      
    </>
  )
}

export default App

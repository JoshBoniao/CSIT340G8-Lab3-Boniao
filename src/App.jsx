import "./App.css"; 

const Footer = ({ name, course, section }) => {
  return (
    <footer className="footer">
      <span>{name}</span> • <span>{course}</span> • <span>{section}</span>
    </footer>
  );
};

function App() {
  const name = "Josh C. Boniao";
  const courseCode = "CSIT340";
  const section = "G8";
  const course = {
    name: "Bachelor of Science Information Technology",
    part: [
      { name: "Industry Elective", units: 3 },
      { name: "Data Structures", units: 3 },
      { name: "Application Development", units: 3 },
    ],
  };

  const total =
    course.part[0].units + course.part[1].units + course.part[2].units;

  return (
    <div className="container">
      <h1 className="course-title">
        <b>Course:</b> {course.name}
      </h1>

      <div className="part-item">
        <span>{course.part[0].name}</span>
        <span>{course.part[0].units} Units</span>
      </div>
      <div className="part-item">
        <span>{course.part[1].name}</span>
        <span>{course.part[1].units} Units</span>
      </div>
      <div className="part-item">
        <span>{course.part[2].name}</span>
        <span>{course.part[2].units} Units</span>
      </div>

      <p className="total-units">Total Amount of Units: {total}</p>

      <hr />
      <Footer name={name} course={courseCode} section={section} />
    </div>
  );
}

export default App;

const StudentDataBase = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/Java_Lessons/tree/main/src/main/com/Projects/StudentDatabaseApplication/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <img
                src="https://www.shutterstock.com/image-illustration/stack-textbooks-isolated-on-white-600w-83105218.jpg"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
                alt="student course registration image"
              />
              <figcaption>student course registration</figcaption>
              <div class="image__overlay">
                <div class="image__title">Student Registration</div>
                <p class="image__description">
                  Java program where an individual can enroll as a student and
                  start registering for different courses
                </p>
              </div>
            </div>
          </a>
          <div>
            <a
              className="right"
              onClick={() => {
                console.log(
                  "When Clicked, it will send the person to live display"
                );
              }}
            >
              Live
            </a>
          </div>
        </ul>
      </figure>
    </>
  );
};
export default StudentDataBase;

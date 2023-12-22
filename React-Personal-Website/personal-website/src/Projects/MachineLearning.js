const MachineLearning = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            a
            href="https://github.com/Vasili2797/11-Machine-Learning/tree/main/11-Machine-Learning/Instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="credit risk analysis using algorithms"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
                // style=" min-width: 30px; max-width: 450; height: 300px;"
              />
              <figcaption>machine learning exercise in python</figcaption>

              <div className="image__overlay">
                <div className="image__title">Credit Risk Sampling</div>
                <p className="image__description">
                  Using several machine learning models on given data to predict
                  credit risk
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
export default MachineLearning;

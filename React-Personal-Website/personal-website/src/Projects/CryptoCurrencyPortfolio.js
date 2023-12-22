const CryptoCurrencyPortfolio = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/13-AWS-Lex-Clustering-Crypto/tree/main/Instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <img
                src="https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cryptocurrency"
                height="300px"
                width="450px"
                style={{ minWidth: "30px", width: "450px", height: "300px" }}
                //   alt="cryptocurrency portfolio image"
              />
              <figcaption>Cryptocurrency Portfolio Allocator</figcaption>
              <div className="image__overlay">
                <div className="image__title">
                  Cryptocurrency Portfolio Allocator
                </div>
                <p className="image__description">
                  Generating a report on what cryptocurrencies are available on
                  the trading markets using Python maching learning library
                  scikit-learn
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

export default CryptoCurrencyPortfolio;

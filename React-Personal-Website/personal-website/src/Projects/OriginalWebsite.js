const OriginalWebSite = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/Personal_Website/tree/main/newWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <img
                src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1693321404/catalog/1696537762808541184/ksludrmq15x88tbrckzh.jpg"
                alt="Personal Website"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                personal website
              </figcaption>

              <div class="image__overlay">
                <div class="image__title">Personal Website in HTML and CSS</div>
                <p class="image__description">
                  Personal website done only in HTML and CSS
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
export default OriginalWebSite;

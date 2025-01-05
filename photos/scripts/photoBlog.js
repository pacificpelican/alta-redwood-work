// create a photo-blog web component that takes an arbitrary photo from the directory "./assets" and displays it in a card-like format. The component should have a button that allows the user to cycle through the photos in the directory. The component should also have a button that allows the user to download the photo. The component should be able to be used multiple times on the same page.


class PhotoBlog extends HTMLElement {
  constructor() {
    super();
    this.photos = [];
    this.currentIndex = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadPhotos();
    this.render();
  }

  loadPhotos() {
    // Assuming the photos are stored in the "./assets" directory
    const photoDir = '../photos/assets';
    // Fetch the list of photos from the directory
    // first, use JavaScript to create an array of the photo file names that are in the directory
    // then, use the array to set the photos property of the component
    
    // Fetch the list of photos from the directory
    fetch(photoDir)
      .then(response => response.text())
      .then(data => {
        // Extract the list of photo file names from the directory listing
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const links = doc.querySelectorAll('a');
        this.photos = Array.from(links)
          .map(link => link.href)
          .filter(href => href.match(/\.(jpe?g|png|avif|gif)$/i));
        this.render();
      });

  }

  render() {
    const currentPhoto = this.photos[this.currentIndex];

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .photo {
          width: 300px;
          height: 200px;
          background-image: url(${currentPhoto});
          background-size: cover;
          background-position: center;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: center;
        }
        button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }
      </style>
      <div class="card">
        <div class="photo"></div>
        <div class="buttons">
          <button id="prevButton">Previous</button>
          <button id="nextButton">Next</button>
          <button id="downloadButton">Download</button>
        </div>
      </div>
    `;

    const prevButton = this.shadowRoot.getElementById('prevButton');
    const nextButton = this.shadowRoot.getElementById('nextButton');
    const downloadButton = this.shadowRoot.getElementById('downloadButton');

    prevButton.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
      this.render();
    });

    nextButton.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
      this.render();
    });

    downloadButton.addEventListener('click', () => {
      // Implement the logic to download the current photo
      // You can use the HTML5 download attribute or any other method to initiate the download
      // Here, we are simply opening the photo in a new tab for demonstration purposes
      window.open(currentPhoto, '_blank');
    });

    const photoElement = this.shadowRoot.querySelector('.photo');
    photoElement.style.backgroundImage = `url(${currentPhoto})`;
  }
}

customElements.define('photo-blog', PhotoBlog);
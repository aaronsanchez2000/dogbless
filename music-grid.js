document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    /* TEMPLATE

    {
      title: "",
      image: "",
      alt: "",
      link: ""
    },

    REMEMBER: add hyperfollow links from distrokid
    */

    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    },
    {
      title: "Lucidity",
      image: "images/LUCIDITY ART.png",
      alt: "Lucidity Album Cover",
      link: "https://www.google.com"
    }
  ];

  const grid = document.getElementById("music-grid-container");

  albums.forEach(album => {
    const fig = document.createElement("figure");
    fig.className = "music-album";

    fig.innerHTML = `
      <a href="${album.link}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${album.title}">
        <img src="${album.image}" alt="${album.alt}">
        <figcaption>${album.title}</figcaption>
      </a>
    `;

    grid.appendChild(fig);
  });
});

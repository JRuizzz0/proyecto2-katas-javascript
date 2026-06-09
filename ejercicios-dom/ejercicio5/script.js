const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const styles = document.createElement('style');
styles.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        background-color: #121212;
        color: #fff;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header {
        background-color: #1e1e1e;
        width: 100%;
        text-align: center;
        padding: 20px 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    }
    .album-list {
        list-style: none;
        padding: 0;
        margin-top: 30px;
        width: 80%;
        max-width: 600px;
    }
    .album-list li {
        background-color: #2c2c2c;
        margin-bottom: 10px;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        border-left: 5px solid #d32f2f;
        transition: transform 0.2s;
    }
    .album-list li:hover {
        transform: scale(1.02);
        background-color: #383838;
    }
`;
document.head.appendChild(styles);

const header = document.createElement('header');
header.className = 'header';
const title = document.createElement('h1');
title.textContent = 'Colección de Álbumes de Metal';
header.appendChild(title);
document.body.appendChild(header);


const ulAlbums = document.createElement('ul');
ulAlbums.className = 'album-list';

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ulAlbums.appendChild(li);
});

document.body.appendChild(ulAlbums);
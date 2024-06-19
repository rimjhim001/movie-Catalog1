document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "Inception",
            image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology Releasing on *16 JULY 2010*."
        },
        {
            title: "Interstellar",
            image: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF350,350_QL50_.jpg",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival Releasing on *7 JULY 2014*."
        },
        {
            title: "The Dark Knight",
            image: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham Releasing on *18 JULY 2008*."
        },{
            title: "The Conjuring",
            image: "https://musicart.xboxlive.com/7/8ac41100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
            description: "In THE CONJURING, in the early 1970s, the Perron family -- Roger (Ron Livingston), Carolyn (Lili Taylor), and their five daughters -- move into a new home in the Rhode Island countryside. Before long, they start encountering strange noises and smells, stopped clocks, slamming doors, and figures lurking in dark corners. Releasing on *19 JULY 2013*."
        },
        {
            title: "Annabelle",
            image: "https://play-lh.googleusercontent.com/osLwpqRavy7bpzR-6c7f7-fcu2ZQW6gKtqN9vIoU0T86IKLSuk2IOYbcKZMBfSMfnfVE",
            description: "Annabelle is an allegedly-haunted Raggedy Ann doll, housed in the now closed occult museum of the paranormal investigators Ed and Lorraine Warren. Annabelle was moved there after supposed hauntings in 1970. A character based on the doll is one of the antagonists that appear in The Conjuring Universe.. Releasing on *3 OCTOBER 2014*."
        },
        
        {
            title: "The Nun",
            image: "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg",
            description: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order's unholy secret... Releasing on *7 SEPTEMBER 2018*."
        },
        
        
    ];

    const movieContainer = document.getElementById('movie-container');

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;

        movieContainer.appendChild(movieElement);
    });
});

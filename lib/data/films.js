// data
const listeFilms = [
    {
        "id": 1,
        "Titre": "The Cotton Club",
        "Annee": "1984",
        "Duree": "127",
        "Categorie": "Drame",
        "Realisateur": "Francis Ford Coppola",
        "Acteurs": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        "Complot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
        "Image": "/data/pc1.jpg"
    },
    {
        "id": 2,
        "Titre": "Crocodile Dundee",
        "Annee": "1986",
        "Duree": "97",
        "Categorie": "Comedie",
        "Realisateur": "Peter Faiman",
        "Acteurs": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        "Complot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
        "Image": "/data/pc2.jpg"
    },
    {
        "id": 3,
        "Titre": "Ratatouille",
        "Annee": "2007",
        "Duree": "111",
        "Categorie": "Comedie",
        "Realisateur": "Brad Bird, Jan Pinkava",
        "Acteurs": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        "Complot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        "Image": "/data/pc3.jpg"
    },
    {
        "id": 4,
        "Titre": "City of God",
        "Annee": "2002",
        "Duree": "130",
        "Categorie": "Drame",
        "Realisateur": "Fernando Meirelles, Kátia Lund",
        "Acteurs": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
        "Complot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
        "Image": "/data/pc4.jpg"
    },
    {
        "id": 5,
        "Titre": "Stardust",
        "Annee": "2007",
        "Duree": "127",
        "Categorie": "Aventure",
        "Realisateur": "Matthew Vaughn",
        "Acteurs": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
        "Complot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
        "Image": "/data/pc5.jpg"
    },
    {
        "id": 6,
        "Titre": "Apocalypto",
        "Annee": "2006",
        "Duree": "139",
        "Categorie": "Aventure",
        "Realisateur": "Mel Gibson",
        "Acteurs": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
        "Complot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
        "Image": "/data/pc6.jpg"
    },
    {
        "id": 7,
        "Titre": "No Country for Old Men",
        "Annee": "2007",
        "Duree": "122",
        "Categorie": "Thriller",
        "Realisateur": "Ethan Coen, Joel Coen",
        "Acteurs": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        "Complot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "Image": "/data/pc7.jpg"
    },
    {
        "id": 8,
        "Titre": "The Third Man",
        "Annee": "1949",
        "Duree": "93",
        "Categorie": "Film-Noir",
        "Realisateur": "Carol Reed",
        "Acteurs": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
        "Complot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
        "Image": "/data/pc8.jpg"
    },
    {
        "id": 9,
        "Titre": "The Beach",
        "Annee": "2000",
        "Duree": "119",
        "Categorie": "Romance",
        "Realisateur": "Danny Boyle",
        "Acteurs": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
        "Complot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Image": "/data/pc9.jpg"
    },
    {
        "id": 10,
        "Titre": "Scarface",
        "Annee": "1983",
        "Duree": "170",
        "Categorie": "Drame",
        "Realisateur": "Brian De Palma",
        "Acteurs": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        "Complot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        "ImgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
        "Image": "/data/pc10.jpg"
    }
];


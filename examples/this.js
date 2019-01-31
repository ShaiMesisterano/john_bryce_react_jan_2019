const movie1 = {
    name: "Titanic",
    rating: 5,
    getRating: function(){
        return this.rating
    }
}

const movie2 = {
    name: "Avatar",
    rating: 4
}

const getMovie2Rating = movie1.getRating.bind(movie2);
console.log(getMovie2Rating());
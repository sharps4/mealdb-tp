import axios from 'axios';

class Api {
    static getApiResult(func, url, params = {}) {
        let get = '';
        for (let key in params) {
            get += key + '=' + params[key] + '&';
        }

        axios.get('https://www.themealdb.com/api/json/v1/1/' + url + '?' + get).then((response) => {
            func(response.data.meals);
        }).catch((error) => {
            console.error(error);
        }); 
    }

    static getAllMeals(func) {
        this.getApiResult(func, 'search.php', { s: '' });
    }

    static getMealById(func, id) {
        this.getApiResult(func, 'lookup.php', { i: id });
    }

    static getMealByName(func, name) {
        this.getApiResult(func, 'search.php', { s: name });
    }

    static getMealByFirstLetter(func, letter) {
        this.getApiResult(func, 'search.php', { f: letter });
    }

    static getMealByCategory(func, category) {
        this.getApiResult(func, 'filter.php', { c: category });
    }
}

Api.getAllMeals((data) => {
    console.log(data);
});

export default Api;
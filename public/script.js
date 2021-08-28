$(() => {

    $('.search-button').click(evt => {
        evt.preventDefault();
        clearDivById('results');
        var searchTerm = $(".search-input").val();
        $(".search-input").val("");

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/site/search?query=" + searchTerm,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0c83579fe6mshd0405805d3a9156p17446ejsn37f9673f2659",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {

            var results = response.Recipes;
            var length = results.length;
            for(i = 0; i< length; i++){
                console.log(results[i]);
                $('#results').append('<div >' + results[i].name + '<br>' + '<a href=' + results[i].link + '><img src=' + results[i].image + '></a></div>');
            }
        });
    });

    $('.search-nutrition').click(evt => {
        evt.preventDefault();
        clearDivById('resultsNutrition');
        var searchTerm = $(".searchN-input").val();
        $(".searchN-input").val("");

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" + searchTerm,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0c83579fe6mshd0405805d3a9156p17446ejsn37f9673f2659",
                "x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response[0]);
            $('#resultsNutrition').append('<h2>' + response[0].name + '</h2>');
            $('#resultsNutrition').append('Calories: ' + response[0].calories + '<br>');
            $('#resultsNutrition').append('Carbohydrates total G : ' + response[0].carbohydrates_total_g + '<br>');
            $('#resultsNutrition').append('Fat Saturated G : ' + response[0].fat_saturated_g + '<br>');
            $('#resultsNutrition').append('Fat Total G : ' + response[0].fat_total_g + '<br>');
            $('#resultsNutrition').append('Fiber G : ' +response[0].fiber_g + '<br>');
            $('#resultsNutrition').append('Potassium Mg : ' +response[0].potassium_mg + '<br>');
            $('#resultsNutrition').append('Protein G : ' + response[0].protein_g + '<br>');
            $('#resultsNutrition').append('Serving Size G : ' + response[0].serving_size_g + '<br>');
            $('#resultsNutrition').append('Sodium Mg : ' + response[0].sodium_mg + '<br>');
            $('#resultsNutrition').append('Sugar : ' + response[0].sugar_g + '<br>');

        });
    });
});
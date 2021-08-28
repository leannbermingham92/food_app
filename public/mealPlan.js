var timeFrame = document.getElementById("timeFrame");
var diet = document.getElementById("diet");
var calories = document.getElementById("calories");



function validateMealPlan(){
    if(timeFrame.value=='' || diet.value=='' || calories.value=='' ){
        alert("All fields are required!");
        document.getElementById("submitMealPlan").removeEventListener("click", generateMealPlan);
    }
}
document.getElementById("submitMealPlan").addEventListener("click", validateMealPlan);

function generateMealPlan() {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=" + timeFrame.value + "&targetCalories=" + calories.value + "&diet=" + diet.value + "&exclude=shellfish%2C%20olives",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0c83579fe6mshd0405805d3a9156p17446ejsn37f9673f2659",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        const myJSON = JSON.stringify(response);
        var textFile = new Blob([JSON.stringify(response)], { type: "application/json" });
        saveAs(textFile, "meal_plan.txt");
        if(timeFrame.value == 'week'){
            console.log(true)
            for(let x =0; x <20; x++){
                console.log(response.items[x].value)
            }
        }
    });

}
document.getElementById("submitMealPlan").addEventListener("click", generateMealPlan);
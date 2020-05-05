 $(document).ready(function(){

    $('#addIngrediants').click(function(){
        $('#addIngrediant').append('<br><input type="text" class="amount" name="amount" placeholder=" Enter Amount: "><input type="text" name="unit of measure" class="measure" placeholder="Unit of Measure: "><input type="text" name="ingrediant" class="ingrediant" placeholder="Ingediant: ">');
    });

    $('#addInstructions').click(function(){
        $('#addInstruction').append('<br><input type="text" class="instructions" name="instructions" placeholder=" Enter Instructions">');
    });

    let recipes = [];
    const addRecipe = (ev)=>{
    ev.preventDefault();

        // setting values for input fields
        let name = $('#recipeName').val().trim();
        let servingSize =  $('#servingSize').val().trim();
        let prepTime =  $('#prepTime').val().trim();
        let prepTimeLength = $('#prepLength').val();
        let cookTime =  $('#cookTime').val().trim();
        let cookTimeLength = $('#cookLength').val();
        let difficulty = $('#difficulty').val();
        let amount =  $('.amount').val().trim();
        let measure = $('.measure').val().trim();
        let ingrediant = $('.ingrediant').val().trim();
        let instructions =  $('.instructions').val().trim();

        //validations for input fields
        if(name == '' || name == 'undefined' || name == 'null'){
            $('#nameErrMsg').html(' Enter a valid name ');
            return false;
        }else if(servingSize == '' || servingSize == 'undefined' || servingSize == 'null' || isNaN(servingSize)){
           $('#SSErrMsg').html(' Enter a valid serving size ');
            return false;
        }else if(prepTime == '' || prepTime == 'undefined' || prepTime == 'null' || isNaN(prepTime)){
            $('#prepTimeErrMsg').html(' Enter a valid Preperation ');
            return false;
        }else if(prepTimeLength == "default"){
            $('#prepTimeErrMsg').html(' Enter a valid Preperation ');
            return false;
        }else if(cookTime == '' || cookTime == 'undefined' || cookTime == 'null' || isNaN(cookTime)){
            $('#cookTimeErrMsg').html(' Enter a valid serving size ');
            return false;
        }else if(cookTimeLength == 'default'){
            $('#cookTimeErrMsg').html(' Enter a valid serving size ');
            return false;
        }else if(difficulty == "default"){
            $('#difficultyErrMsg').html(' Select a difficulty');
            return false;
        }else if(amount == '' || amount == 'undefined' || amount == 'null' || isNaN(amount)){
            $('#ingrediantsErrMsg').html(' Enter a valid Amount ');
            return false;
        }else if(measure = "" || measure == "undefined" || measure == "null"){
            $('#ingrediantsErrMsg').html(' Enter a valid Amount ');
            return false
        }else if(ingrediant == "" || ingrediant == "null" || ingrediant == "undefined"){
            $('#ingrediantsErrMsg').html(' Enter a valid Amount ');
            return false;
        }else if(instructions == '' || instructions == 'undefined' || instructions == 'null'){
            $('#instructionsErrMsg').html(' Enter a valid serving size ');
            return false;
        }

        // storing the recipe into a JS object
        let recipe = {
            Name: $('#recipeName').val(),
            serving_Size: $('#servingSize').val(),
            prep_time: $('#prepTime').val(),
            prep_length: $('#prepLength').val(),
            cook_time: $('#cookTime').val(),
            cook_length: $('#cookLength').val(),
            Difficulty: $('#difficulty').val(),
            Ingrediants: [$('.amount').val(), $('.measure').val(), $('.ingrediant').val()] ,
            Instructions: $('.instructions').val()
        }
        recipes.push(recipe);
        //document.forms[0].reset();

        console.log('added', {recipes} );

        //local storage
        localStorage.setItem('recipeList', JSON.stringify(recipes));
        var user = JSON.parse(localStorage.getItem('recipeList'));

        for(i = 0; i < recipes.length; i++){
            document.querySelector('#recipeOutput').innerHTML += 
             "<div id='displayRecipe'>" + 
                "<ul>" +
                    "<li>" + "<h3> Name: " +  recipes[i].Name + "</h3>" + "</li>" +
                    "<li>" + "<h3> Serving Size: " + recipes[i].serving_Size + "</h3>" + "</li>" +
                    "<li>" + "<h3> Preperation Time: " + recipes[i].prep_time + " " + recipes[i].prep_length + "</h3>" + "</li>" +
                    "<li>" + "<h3> Cook Time: " + recipes[i].cook_time + " " + recipes[i].cook_length + "</h3>" + "</li>" +
                    "<li>" + "<h3> Difficulty: " + recipes[i].Difficulty + "</h3>" + "</li>" +
                    "<li>" + "<h3> Ingrediants: " + recipes[i].Ingrediants + "</h3>" + "</li>" +
                    "<li>" + "<h3> Instructions: " + recipes[i].Instructions + "</h3>" + "</li>" +
                "</ul>" +
            "</div>";
        }

    }

    document.querySelector('#submit').addEventListener('click', addRecipe);

    $('#reset').click(function(){
        //alert("reset"); // testing the function
        // Reset error messages
        $('#nameErrMsg').html('');
        $('#SSErrMsg').html('');
        $('#prepTimeErrMsg').html('');
        $('#cookTimeErrMsg').html('');
        $('#difficultyErrMsg').html('');
        $('#ingrediantsErrMsg').html('');
        $('#instructionsErrMsg').html('');
        $('#addIngrediant').html('<input type="text" class="amount" name="amount" placeholder=" Enter Amount: "><input type="text" name="unit of measure" class="measure" placeholder="Unit of Measure: "><input type="text" name="ingrediant" class="ingrediant" placeholder="Ingediant: ">');
        $('#addInstruction').html('<input type="text" class="instructions" name="instructions" placeholder=" Enter Instructions">');
    });
 });
 
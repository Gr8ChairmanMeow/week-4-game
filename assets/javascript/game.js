$(document).ready(function(){
	var mathArr = [];
	var wins = 0;
	var losses = 0;

	the_num_gen();
	the_value_gen();


	$("img").on("click", function() {
		var total = 0;
		var selection = $(this).attr("value");

		mathArr.push(selection);
		console.log(mathArr);

		for (j=0;j<mathArr.length;j++){

			total += parseInt(mathArr[j]);

		}

		$("#tot_score").html(total);



		if($("#the_num").text() === $("#tot_score").text()){

			wins++;

			alert("You won!");

			$("#wins").html(wins);


			if(confirm("Would you like to play again?")){
			
				mathArr = [];
				$("#tot_score").html("0")
				the_num_gen();
				the_value_gen();

			}
			else {

				alert("You won!");
				mathArr = [];
				wins = 0;
				losses = 0;
				$("#tot_score").html("0")
				$("#wins").html(wins);
				$("#losses").html(losses);
				the_num_gen();
				the_value_gen();

			}

			//play_again(mathArr,total);

		}

		var num_int = parseInt($("#the_num").text())
		var score_int = parseInt($("#tot_score").text())


		if(num_int < score_int){

			losses++;

			alert("You went too high!")

			$("#losses").html(losses);

			if(confirm("Would you like to play again?")){
			
				mathArr = [];
				$("#tot_score").html("0")
				the_num_gen();
				the_value_gen();

			}
			else {

				alert("You lost!");
				mathArr = [];
				wins = 0;
				losses = 0;
				$("#wins").html(wins);
				$("#losses").html(losses);
				$("#tot_score").html("0")
				the_num_gen();
				the_value_gen();

			}

		}

	});

});

function the_num_gen(){
	var num = 19+Math.floor(Math.random()*((120-19)+1));
	$("#the_num").html(num);
};

function the_value_gen(){
	var crystals = ["#red","#green","#blue","#purple"];
	var no_duplicates = [];

	for(i=0;i<crystals.length;i++){
		var num = Math.floor(Math.random()*12)+1;

		if(no_duplicates.indexOf(num) === -1){

			$(crystals[i]).attr("value", num);

			no_duplicates.push(num);

		}

		else{

			i--;

		}

	};	
	console.log(no_duplicates)
};

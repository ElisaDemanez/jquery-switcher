var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	
	$('.button').click(function(){
		var animal = $(this).attr('data-animal')		//récupère l'attribut data-animal
		var image = species[animal]						//donne la variation de nom pour les images (si "cat", ça permettra après de faire le img/cat.jpg via STRING)
		$("#holder").html('<img src=img/'+image+' alt="" />')	//.html permet de changer un contenu html
	});

	}

	// $(".button").click (function() {
	// 	console.log($(this.attr)) })


	// 	var y = $(".button")[0];
	// 	console.log(y) ;
	// 	var x = y.getAttribute('data-animal');
	// 	console.log("x"+ x) ;

	// 	if ( x === "cat" ) {

	// 		console.log("catta"); }
	// 	var img = species.cat;
	// 	console.log("img: " + img);
	// 	var displ =  $(".myImg").src = species.cat; 
	// 	console.log("displ:  " + displ);
 	// var appe = $("#holder")[0];
	// var elementAjoute = appe.appendChild({});
 	// console.log("elementajouté "+elementAjoute);
	// 	var a =('<img src="'+' img/cat.jpg'+ '">' ).prepend($(".holder"));
	// 	console.log(a);
	// }
 	// else 
	// 	{console.log("non")}



	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	




	$(document).ready(function(){
		main();
	});
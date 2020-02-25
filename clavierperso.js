


/*3 on fait le document ready qui se trouve avant la création de touches 
mais c'est parce que le document ready et les fonction affiliées sont toujours en haut */
$(document).ready(function(){//tjr des parenthèses même vides aprés une function
//document ready c'est quand le document vient de finir de charger.
 
    $(".touche").click(function(){

        $(".touche").removeClass ("click");//on enlève la class click de toutes les touches
        $(this).addClass ("click");//$(this)cible la touche particulière qui vient d'être cliquée
        lettre = $(this).text();//on cible la lettre particulière attribué a cette touche par le split en tableau
/*!!!!! pensez à regarder ici pour le pendu!*/
        $("#screen").append (lettre);//on ajoute la lettre de la touche ciblée a la suite du texte déja écrit c'est synchrone
    
    })//tjrs une parenthése fermante derrière l'accolade fermante de la function sinon c kil ya un bug

    $(".touche.clear").click (function(){

        $("#screen").text("");//on ecrit du texte vide
/*!!!! se renseigner sur la propriété text pour le pendu*/
    })


})

//1 on explose les lettres dans un tableau
let lettres="AZERTYUIOPQSDFGHJKLMWXCVBN";
array_lettres= lettres.split('');//mets les lettres dans un tableau implode sort les lettres d'un tableau (attention implode fonction php a voir en js le bon lexique)
//console.log (array_lettres);//verification a virer par la suite

//2on crée les touches et on leur donne une classe pour pouvoir les cibler
/*portion pour créer les touches*/
ligne = $('#clavier').children('.ligne')[0];//faire d'une classe une variable en commençant par la première div
$ligne= $(ligne);// on crée la première ligne pour rentrer les lettres

for (var i=0; i < array_lettres.length; i++){//boucle pour faire les 26 touches
    $ligne.append("<div class='touche'>"+array_lettres[i]+"</div>");//on inscrit le code dans le html
    
    if(array_lettres[i]==M || array_lettres[i]==P){
        $ligne = $($ligne).next();//sauter a la prochaine ligne la "next" div koi
    }
}
$ligne.append("<div class='touche clear'>Clear</div>");/*on rajoute la touche clear en fin de la dernier variable $(ligne)
$(ligne)étant la classe devenue variable*/ 

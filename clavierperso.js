let lettres="AZERTYUIOPQSDFGHJKLMWXCVBN";
array_lettres= lettres.split('');//mets les lettres dans un tableau implode sort les lettres d'un tableau (attention implode fonction php a voir en js le bon lexique)
console.log (array_lettres);//verification a virer par la suite





/*portion pour créer les touches*/
ligne=$('#clavier').children('.ligne')[0];//faire d'une classe une variable en commençant par la première div
$ligne= $(ligne);// on crée la première ligne pour rentrer les lettres

for (let i=0;i<array_lettres.lengh;i++){//boucle pour faire les 26 touches
    $ligne.append("<div class 'touche'>"+array_lettres[i]+"</div>");//on inscrit le code dans le html
    
    if(array_lettres[i]==M || array_lettres[i]==P){
        $ligne=$ligne.next();//sauter a la prochaine ligne la "next" div koi
    }
}


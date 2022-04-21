window.onload = function()

{

    var canvas = document.getElementById('canevas_circuit_eco');

        if(!canvas)

        {

            alert("Impossible de récupérer le canvas");

            return;

        }


    var context = canvas.getContext('2d');

        if(!context)

        {

            alert("Impossible de récupérer le context du canvas");

            return;

        }//width: 200 à 600px height 400

        context.beginPath();
        context.fillStyle = "#5b4024";
        context.ellipse(400, 70, 85, 62, 0, 0, Math.PI*2);
        context.closePath();
        context.ellipse(285, 245, 85, 62, 0, 0, Math.PI*2);
        context.closePath();
        context.ellipse(515, 245, 85, 62, 0, 0, Math.PI*2);
        context.fill();

        context.closePath();
        context.beginPath();

        context.fillStyle = "#675948";
        context.ellipse(400, 176, 60, 40, 0, 0, Math.PI*2);
        context.fill();
        context.closePath();

        context.font = "24px pt_sansregular, Helvetica, arial";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
        context.fillStyle = "#8e7357";
        context.fillText("PRODUCTION", 330, 78);//strokeText(); fonctionne aussi, vous vous en doutez.

        context.font = "19px pt_sansregular, Helvetica, arial";
        context.fillText("INVESTISSEMENT", 212, 233);//strokeText(); fonctionne aussi, vous vous en doutez.
        context.fillText("ET", 274, 255);//strokeText(); fonctionne aussi, vous vous en doutez.
        context.fillText("CONSOMMATION", 214, 277);//strokeText(); fonctionne aussi, vous vous en doutez.

        context.fillText("REPARTITION", 460, 233);//strokeText(); fonctionne aussi, vous vous en doutez.
        context.fillText("DE LA", 490, 255);
        context.fillText("RICHESSE", 473, 277);

        context.font = "20px pt_sansregular, Helvetica, arial";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
        context.fillStyle = "#D1C6A8";
        context.fillText("DES CHOIX", 351, 170);//strokeText(); fonctionne aussi, vous vous en doutez.
        context.fillText("DE SOCIETE", 348, 193);//strokeText(); fonctionne aussi, vous vous en doutez.

        context.beginPath();
        context.lineWidth = 12;

        context.moveTo(314, 108);//trait long fleche haut gauche x1 (haut) y1 (droite)
        context.quadraticCurveTo(279, 133, 277, 177);//x2 y2 x3 (gauche) y3 (bas)

        context.moveTo(276, 115);//trait courbe haut gauche x1 (gauche) y1
        context.quadraticCurveTo(335, 80, 310, 142);//x2 y2 x3 y3 (droite, bas)

        context.moveTo(483, 103);//trait long fleche haut droite
        context.quadraticCurveTo(522, 128, 520, 172);

        context.moveTo(498, 151);//trait courbe haut droite
        context.quadraticCurveTo(525, 197, 538, 143);

        context.moveTo(362, 290);//trait long fleche bas
        context.quadraticCurveTo(402, 315, 442, 290);

        context.moveTo(398, 283);//trait courbe bas
        context.quadraticCurveTo(331, 283, 388, 322);

        context.stroke();
    //C'est ici que l'on placera tout le code servant à nos dessins.

}

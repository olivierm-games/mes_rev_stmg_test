<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8"/>
		<link rel="stylesheet" href="../../css/page_css.css"/>
		<title>La résolution de tous les problèmes de gestion est-elle automatisable ? Question 3 SIG Systèmes d'information de gestion Terminale STMG</title>
	</head>
	<body id="body_sig">
		<div id="haut"></div>
		<header>
			<a href="../../" id="bouton1">Accueil</a>
      <a href="../../Cours_1ere_STMG/Acces_par_matiere.html" id="bouton2">Cours 1ère STMG</a>
      <a href="../Acces_par_matiere.html" id="bouton3">Cours Terminale STMG</a>
	    <a id="bouton4">Cours pédagogiques</a>
	    <a id="bouton5">Quiz STMG</a>
		</header>
		<div id="page">
			<h1 id="h1_sig">Question 3 : La résolution de tous les problèmes de gestion est-elle automatisable ?</h1>
      <h2>I. Introduction à la programmation</h2>
			<h3>A. Démarche algorithmique</h3>
			<p>L'algorithmique est une démarche de résolution des problèmes dont la logique est : à partir de données (1) dont on dispose initialement, effectuer des traitements (2) afin d'arriver à un résultat (3).</p>
			<table class="tab_sig">
				<caption id="captionex">Exemple : Calcul d'un âge en années révolues</caption>
				<tbody>
					<tr>
						<td class="td_centre_gros td_sig td_background_sig" style="width: 20%;">Étapes</td>
						<td class="td_centre_gros td_sig td_background_sig">Mise en œuvre</td>
						<td class="td_centre_gros td_sig td_background_sig">Exemple</td>
					</tr>
					<tr>
						<td rowspan="2" class="td_gauche_gros td_sig">1 - Données</td>
						<td class="td_sig">Date de naissance : saisie au clavier</td>
						<td class="td_sig">23/07/2000</td>
					</tr>
					<tr>
						<td class="td_sig">Date du jour : récupération automatique auprès de l'horloge interne de l'ordinateur</td>
						<td class="td_sig">15/10/2016</td>
					</tr>
					<tr>
						<td rowspan="3" class="td_gauche_gros td_sig">2 - Traitements</td>
						<td class="td_sig">Calcul du nombre de jours depuis la naissance</td>
						<td class="td_sig">15/10/2016 - 23/07/2000 = 5928 jours</td>
					</tr>
					<tr>
						<td class="td_sig">Conversion de ce nombre de jours en années</td>
						<td class="td_sig">5829 / 365,25 = 16,23 années</td>
					</tr>
					<tr>
						<td class="td_sig">Arrondi inférieur du nombre d'années obtenu</td>
						<td class="td_sig">Arrondi inférieur de 16,23 = 16 ans</td>
					</tr>
					<tr>
						<td class="td_gauche_gros td_sig">3 - Résultats</td>
						<td class="td_sig">Affichage de l'âge</td>
						<td class="td_sig">« Vous avez actuellement 16 ans. »</td>
					</tr>
				</tbody>
			</table>
			<h3>B. Programmation</h3>
			<p>Une fois le raisonnement établi, il peut être codé dans un langage de programmation afin de l'automatiser. Cela va être illustré en PHP.</p>
			<p>PHP est un langage de programmation notamment <b>utilisé pour produire des pages web dynamiques</b> (leur contenu change selon les actions de l'utilisateur, à l'inverse du HTML qui génère des pages web statiques). Dans ce cadre, un <a href="http://www.dicodunet.com/definitions/developpement/script.htm" target="_blank" class="approf_sig" title="voir définition">script</a> php est exécuté par l'interpréteur d'un serveur web, en interaction, via le protocole HTTP (voir chapitre 6), avec un navigateur client (auquel il renvoie du HTML).</p>
			<div style="margin-top: -2%;">Outre cet usage, PHP peut fonctionner de façon « non web » sur un poste disposant d'un interpréteur.</div>
			<p style="display: flex;"><img src="../../doc_externe/architecture_client_serveur_bdd.png" alt="architecture client serveur base de données" style="width: 100%; height: 100%;" /></p>
			<ol>
				<li>Lorsqu'un internaute demande à consulter une page web, son navigateur (client) envoie une requête HTTP au serveur web.</li>
			</ol>
			<i>Si la page web ne contient aucun script php (elle est format .html ou .htm), on passe directement à l'étape 6.</i>
			<ol start="2">
				<li>Lorsque la ressource demandée nécessite un traitement, le serveur web fait appel à un interpréteur de script associé et lui transmet des valeurs éventuelles de paramètres (reçues du client).</li>
			</ol>
			<i>Si le script php ne contient aucun recours à une base de données, on passe directement à l'étape 5.</i>
			<ol start="3">
				<li>Le script peut demander des données issues d'une base : une connexion (autorisée) s'établit alors avec un serveur de données auquel des requêtes sont transmises (<a href="Question_4_Comment_peut_on_produire_de_l_information_a_partir_de_donnees_contenues_dans_une_base.html" class="approf_sig">voir</a> <span class="dot_underline" title="Comment peut-on produire de l'information à partir de données contenues dans une base ?">question 4</span>).</li>
				<li>Le SGBDR (système de gestion de base de données relationnel) exécute les requêtes et transmet en retour, un résultat (un code de succès ou non et les données éventuellement demandées).</li>
				<li>L'interpréteur (du serveur web) achève ses traitements à l'aide des données et fournit un code HTML.</li>
				<li>Le serveur web transmet ce code HTML par le protocole HTTP dont le navigateur assure la présentation.</li>
			</ol>
			<p>Les notions de <b>client</b> et de <b>serveur</b> sont des <b>notions logicielles</b>. Ces logiciels peuvent donc être installés et exécutés sur une à plusieurs machines (appelées par extension postes client et serveur).</p>
			<h2>II. Variables</h2>
			<p><u>Le calcul d'un âge (en année) répond à une démarche algorithmique</u> :</p>
			<ul>
				<li>il fait appel à deux données « en entrée » : l'année de naissance et l'année actuelle ;</li>
				<li>Il calcule une donnée en sortie : l'âge atteint au cours de l'année actuelle.</li>
			</ul>
			<table class="tab_sig">
				<tbody>
					<tr>
						<td colspan="2" class="td_sig td_centre_gros td_background_sig">Exemple en PHP</td>
					</tr>
					<tr>
						<td style="width: 3%;" class="td_left">1</td>
						<td class="text_red_php td_left">&lt;&#63;php</td>
					</tr>
					<tr>
						<td class="td_left">2</td>
						<td class="td_left pad_left_indent"><span class="text_red">$anneeNaissance</span>=<span class="text_orange">2000</span>;</td>
					</tr>
					<tr>
						<td class="td_left">3</td>
						<td class="td_left pad_left_indent"><span class="text_red">$anneeActuelle</span>=<span class="text_orange">2016</span>;</td>
					</tr>
					<tr>
						<td class="td_left">4</td>
						<td class="td_left pad_left_indent"><span class="text_red">$age</span><span style="color:purple;">=</span><span class="text_red">$anneeActuelle</span><span style="color: purple;">-</span><span class="text_red">$anneeNaissance</span><span style="color: purple;">;</span></td>
					</tr>
					<tr>
						<td class="td_left">5</td>
						<td class="td_left pad_left_indent"><span class="text_turquoise">echo</span><span class="text_vert">&nbsp;"Vous&nbsp;avez&nbsp;eu&nbsp;ou&nbsp;aurez&nbsp;"</span>&nbsp;.&nbsp;<span class="text_red">$age</span>&nbsp;.&nbsp;<span class="text_vert">"&nbsp;ans en&nbsp;"</span>&nbsp;.&nbsp;<span class="text_red">$anneeActuelle</span>&nbsp;.&nbsp;<span class="text_vert">"."</span>;</td>
					</tr>
					<tr>
						<td class="td_left">6</td>
						<td class="text_red_php td_left">?></td>
					</tr>
					<tr>
						<td colspan="2" class="td_sig td_left">Vous avez eu ou aurez 16 ans en 2016.</td>
					</tr>
				</tbody>
			</table>
			<p><u>Analysons ce script ligne par ligne (chaque ligne comporte une instruction)</u> :</p>
			<ol>
				<li>ouverture d'une section de code PHP (fermée en ligne 6) ;</li>
				<li><b>affectation</b> de la valeur 2000 à la <b>variable</b> $anneeNaissance :
					<ul>
						<li>une variable est un emplacement en mémoire qui stocke temporairement une <b>valeur</b>, qui peut-être différente à chaque exécution du programme (et qui est perdue en fin de programme),</li>
						<li>son contenu peut être caractérisé par un <b>type</b> de valeur prédéterminé (entier, réel avec décimales, date, booléen ou chaîne de caractères),</li>
						<li>le <b>libellé</b> d'une variable doit refléter son contenu,</li>
						<li>en PHP ce libellé est préfixé par un $ et ne comporte ni espaces, ni caractères accuentés, il est également sensible à la casse ($age et $Age seraient deux variables différentes),</li>
						<li>la valeur d'une variable est issue d'une saisie dans un formulaire, d'un calcul ou d'une base de données,</li>
						<li>l'affectation est une opération qui stocke la valeur à droite du = dans la variable à gauche du = ;</li>
					</ul>
				</li>
				<li>affectation de la valeur 2016 à la variable $anneeActuelle (perfectionnement possible par une récupération directe de l'année actuelle dans l'horloge de l'ordinateur) ;</li>
				<li>affectation du résultat d'un calcul à la variable $age ;</li>
				<li>echo "..."; est une instruction d'envoi de contenu au navigateur (qui va l'afficher) :
					<ul>
						<li>ici l'instruction opère une <b>concaténation</b> (assemblage) de message (entre guillemets) et de variables dont les valeurs vont être insérées dans le message,</li>
						<li>le . est l'opérateur de concaténation qui permet d'accoler deux éléments du message.</li>
					</ul></li>
			</ol>
			<p>Une variable dite <b>élémentaire</b> ne peut contenir à un moment donné qu'une seule valeur ; toute nouvelle valeur affectée à cette variable remplace son ancienne valeur stockée.</p>
			<p>Une <b>variable structurée</b> peut stocker plusieurs valeurs simultanément, c'est le cas des <b>tableaux</b>.</p>
			<p>Un tableau est composé de "cases" qui déterminent sa longueur (le nombre de cases et donc le nombre de valeurs pouvant être stockées simultanément). En PHP, cette longueur est déterminée par le nombre de valeurs stockées et donc peut-être agrandie en cours de programme.</p>
			<h2>III. Structures alternatives</h2>
			<p>La <b>structure alternative</b> propose <b>plusieurs séquences d'instruction</b> possibles. Le programme réalise le choix ce celle à exécuter selon résultat d'une condition. Cela contribue à l'automatisation et permet de ne concevoir qu'un seul programme traitant plusieurs cas, plutôt que plusieurs programmes.</p>
			<h3>A. Conditions</h3>
			<p>Une condition est exprimée à l'aide d'opérateurs de comparaison : >, >=, &lt;, &lt;=, == (égal à), != (différent de).<br />Le résultat d'une condition est booléen : la condition est vérifiée (<i>True</i>) ou non (<i>False</i>).<br />Une condition peur relier plusieurs sous conditions par des opérateurs logiques : ET (&& en PHP), OU (||).</p>
			<h3>B. Structure alternative simple</h3>
			<p>La <b>structure alternative</b> la plus courante est <b>SI... ALORS... SINON</b> :</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="2" class="td_centre_gros td_sig td_background_sig">Structure alternative simple</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="td_left" style="width: 40%;">SI <span style="color: blue;">condition</span></td>
						<td>Si la condition est vrai</td>
					</tr>
					<tr>
						<td class="td_left" style="padding-left: 4%;"><span style="font-size: 230%; display: inline; position: absolute; transform: translate(-55%, -36%);">|&nbsp;&nbsp;</span>ALORS<span style="color: green;">&nbsp;&nbsp; instruction(s)</span></td>
						<td>Alors exécuter cette (ces) instruction(s)</td>
					</tr>
					<tr>
						<td class="td_left" style="padding-left: 4%;"><span style="font-size: 230%; display: inline; position: absolute; transform: translate(-55%, -31%);">|&nbsp;&nbsp;</span>SINON<span  style="color: red;">&nbsp;&nbsp; instruction(s)</span></td>
						<td>Sinon exécuter celle(s)-ci</td>
					</tr>
					<tr>
						<td class="td_left">FIN SI</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div style="margin: 5% 0; display: block;"></div>
			<table class="tab_sig">
				<tbody>
					<tr>
						<td class="td_sig td_centre td_background_sig">Exemples en PHP</td>
						<td rowspan="5" class="td_sig td_centre td_background_sig">Affichage</td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_purple">if</span>(<span class="text_red">$age</span>&lt;=<span class="text_orange">17</span>)</td>
					</tr>
					<tr>
						<td class="td_left pad_left_indent">{<span class="text_turquoise">echo</span><span class="text_vert">&nbsp;"Mineur"</span>;}</td>
					</tr>
					<tr>
						<td class="td_left text_purple">else</td>
					<tr>
						<td class="td_left td_sig_bord_b pad_left_indent">{<span class="text_turquoise">echo</span><span class="text_vert">&nbsp;"Majeur"</span>;}</td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_red">$a</span>=<span class="text_orange">5</span>;</td>
						<td rowspan="5" class="td_sig">Aucun</td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_red">$b</span>=<span class="text_orange">7</span>;</td>
					</tr>
					<tr>
						<td></td>
					</tr>
					<tr>
						<td class="td_left"><span style="color: purple;">if&nbsp;</span>(<span class="text_red">$a</span>==<span class="text_red">$b</span>)</td>
					</tr>
					<tr>
						<td class="td_left td_sig_bord_b pad_left_indent">{<span class="text_turquoise">echo&nbsp;</span><span class="text_vert">"a&nbsp;et b&nbsp;égaux"</span>;}</td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_red">$statut</span>=<span class="text_vert">"étudiant"</span>;</td>
						<td rowspan="7" class="td_sig">Tarif réduit</td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_red">$age</span>=<span class="text_orange">21</span>;</td>
					</tr>
					<tr>
						<td></td>
					</tr>
					<tr>
						<td class="td_left"><span class="text_purple">if&nbsp;</span>(<span class="text_red">$age</span>&lt;=<span class="text_orange">18</span>||<span class="text_red">$statut</span>==<span class="text_vert">"étudiant"</span>)</td>
					</tr>
					<tr>
						<td class="td_left pad_left_indent">{<span class="text_turquoise">echo&nbsp;</span><span class="text_vert">"Tarif&nbsp;réduit"</span>;}</td>
					</tr>
					<tr>
						<td class="td_left text_purple">else</td>
					</tr>
					<tr>
						<td class="td_left pad_left_indent">{<span class="text_turquoise">echo&nbsp;</span><span class="text_vert">"Tarif&nbsp;plein"</span>;}</td>
					</tr>
				</tbody>
			</table>
			<p>Chaque bloc d'instruction conditionnel est placé entre accolades en PHP : {instruction(s)}. Ces blocs sont décalés vers la droite, il s'agit d'une <b>indentation</b> qui permet une meilleure lisibilité pour le développeur. Elle n'a aucune importance pour la « machine ».</p>
			<p>Lorsque le nombre de cas possibles dépasse 2, il faut imbriquer plusieurs structures alternatives.</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="3" class="td_centre td_sig td_background_sig">Exemple en PHP</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="width: 3%; padding: 0 0.5%;">1</td>
						<td style="width: 48.5%;" class="td_left"><span class="text_purple">if</span>(<span class="text_red">$age</span>&lt;<span class="text_orange">18</span>)</td>
						<td style="width: 48.5%;" class="td_left td_sig_bord_g"><span class="text_purple">if</span>(<span class="text_red">$age</span>><span class="text_orange">18</span>)</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">2</td>
						<td class="td_left pad_left_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Mineur"</span>;}</td>
						<td class="td_left td_sig_bord_g pad_left_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Senior"</span>;}</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">3</td>
						<td class="td_left text_purple">else</td>
						<td class="td_left td_sig_bord_g text_purple">else</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">4</td>
						<td class="td_left pad_left_indent">{</td>
						<td class="td_left td_sig_bord_g pad_left_indent">{</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">5</td>
						<td class="td_left pad_left_2_indent"><span class="text_purple">if</span>(<span class="text_red">$age</span>&lt;=<span class="text_orange">40</span>)</td>
						<td class="td_left td_sig_bord_g pad_left_2_indent"><span class="text_purple">if</span>(<span class="text_red">$age</span>><span class="text_orange">40</span>)</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">6</td>
						<td class="td_left pad_left_3_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Senior"</span>;}</td>
						<td class="td_left td_sig_bord_g pad_left_3_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Vétéran"</span>;}</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">7</td>
						<td class="td_left pad_left_2_indent text_purple">else</td>
						<td class="td_left td_sig_bord_g pad_left_2_indent text_purple">else</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">8</td>
						<td class="td_left pad_left_3_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Vétéran"</span>;}</td>
						<td class="td_left td_sig_bord_g pad_left_3_indent">{<span class="text_turquoise">echo</span><span class="text_vert"> "Mineur"</span>;}</td>
					</tr>
					<tr>
						<td style="padding: 0 0.5%;">9</td>
						<td class="td_left pad_left_indent">}</td>
						<td class="td_left td_sig_bord_g pad_left_indent">}</td>
					</tr>
					<tr>
						<td colspan="2" class="td_sig td_top_gauche">On remarque l'imbrication d'une structure dans une autre afin de pouvoir traiter 3 cas.<div class="marge_top_bot"><u>Lignes exécutées avec des exemples</u> :</div>age = 17 : lignes 1 et 2 ;<br />age = 35 : lignes 1, 3, 4, 5, 6, 9 ;<br />age = 44 : lignes 1, 3, 4, 5, 7, 8, 9 ;<br /></td>
						<td class="td_sig td_top_gauche">Attention : un mauvais ordonnancement des cas peut conduire à des résultats faux comme ici : la première branche du premier if sera exécutée dès que le nombre dépasse 18 (par exemple 50 affichera "Senior").</td>
					</tr>
				</tbody>
			</table>
			<h2>IV. Structures itératives</h2>
			<p>Les structures <b>itératives</b> permettent de répéter une séquence d'instructions (ce qui évite de les écrire plusieurs fois ou de relancer le programme), selon le résultat d'une condition.</p>
			<h3>A. Structure itérative avec compteur</h3>
			<p>Cette structure permet de répéter un bloc d'instructions pour un nombre de répétitions (itérations) connu à l'avance. Elle utilise un compteur dont les valeurs de départ et d'arrivée sont bornées :</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td class="td_centre_gros td_sig td_background_sig">Structure itérative avec compteur (POUR...FIN POUR)</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="td_left">POUR <span style="color: blue;">varCompteur</span> DE <span style="color: blue;">debBoucle</span> À <span style="color: blue;"> finBoucle</span> [PAS <span style="color: blue;">valeurPas</span>]</td>
					</tr>
					<tr>
						<td style="padding-left: 5%;"><span style="font-size: 210%; display: inline; position: absolute; transform: translate(-65%, -34%); color: black;">|&nbsp;&nbsp;</span><span style="color: green;">&nbsp;&nbsp; instruction(s)</span></td>
					</tr>
					<tr>
						<td class="td_left">FIN POUR</td>
					</tr>
					<tr>
						<td class="td_left">... (suite du programme)</td>
					</tr>
				</tbody>
			</table>
			<p><u>Explications</u> :</p>
			<ul>
				<li><span style="color: blue;">varCompteur</span> est la variable qui indique la valeur initiale du compteur, il s'agit de l'<b>initialisation</b> ;</li>
				<li>Vient ensuite la <b>condition</b> (DE <span style="color: blue;">debBoucle</span> À <span style="color: blue;"> finBoucle</span>), elle délimite le nombre d'itérations de la boucle par un opérateur booléen. Tant que la condition est vraie, la boucle continue ;</li>
				<li>Enfin il y a l'<b>incrémentation</b> (ou décrémentation, voire opération ; [PAS <span style="color: blue;">valeurPas</span>]), qui conditionne la progression du compteur. Dans la plupart des cas, on a besoin d’une variable qui augmente de 1 à chaque tour de boucle : on ne précise alors rien ;</li>
				<li>la présentation [entre crochets] de certains arguments indique leur caractère facultatif, mais lorsqu'ils seront mise en œuvre, les crochets ne devront pas être saisis.</li>
			</ul>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="3" class="td_background_sig td_sig td_centre">Structure en PHP</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="3">for (initialisation;condition;incrémentation)</td>
					</tr>
					<tr>
						<td colspan="3" class="pad_left_indent">{instruction(s);}</td>
					</tr>
					<tr>
						<td colspan="3" class="td_background_sig td_sig td_centre">Exemples en PHP</td>
					</tr>
					<tr>
						<td colspan="2"><span class="text_turquoise">echo</span><span class="text_vert"> "table des 4 &lt;br />"</span>;</td>
						<td class="td_sig_bord_g"><span class="text_turquoise">echo</span><span class="text_vert"> "décompte&lt;br />"</span>;</td>
					</tr>
					<tr>
						<td colspan="2">
							<span style="color: purple;">for
							</span>(<span class="text_red">$i</span>=<span class="text_orange">1</span>;<span class="text_red">$i</span>&lt;=<span class="text_orange">10</span>;<span class="text_red">$i</span>++)</td>
						<td class="td_sig_bord_g"><span class="text_purple">for </span>(<span class="text_red">$i</span>=<span class="text_orange">10</span>;<span class="text_red">$i</span>>=<span class="text_orange">0</span>;<span class="text_red">$i</span>--)</td>
					</tr>
					<tr>
						<td colspan="2" class="pad_left_indent">{<span class="text_turquoise">echo </span><span class="text_vert">"4x"</span> . <span
							class="text_red">$i</span> . <span class="text_vert">"="</span> . (4*<span class="text_red">$i</span>) . <span class="text_vert">"&lt;br />"</span>;}</td>
						<td class="td_sig_bord_g pad_left_indent">{<span class="text_turquoise">echo </span><span class="text_red">$i</span> . <span class="text_vert">"&lt;br />"</span>;}</td>
					</tr>
					<tr>
						<td colspan="2" class="td_sig_bord_b"></td>
						<td class="td_sig_bord_g td_sig_bord_b pad_left_indent"><span class="text_turquoise">echo </span><span class="text_vert">"Départ !"</span>;</td>
					</tr>
					<tr>
						<td rowspan="6" class="td_background_sig td_sig td_centre">Affichage</td>
						<td>table des 4</td>
						<td class="td_sig_bord_g">décompte</td>
					</tr>
					<tr>
						<td>4x1=4</td>
						<td class="td_sig_bord_g">10</td>
					</tr>
					<tr>
						<td>4x2=8</td>
						<td class="td_sig_bord_g">9</td>
					</tr>
					<tr>
						<td>4x3=12</td>
						<td class="td_sig_bord_g">...</td>
					</tr>
					<tr>
						<td>...</td>
						<td class="td_sig_bord_g">0</td>
					</tr>
					<tr>
						<td>4x10=40</td>
						<td class="td_sig_bord_g">Départ !</td>
					</tr>
				</tbody>
			</table>
			<p><u>Remarques</u> :</p>
			<ul>
				<li>&lt;br /> est une balise HTML qui permet de passer à la ligne. L'interpréteur du serveur web la reconnait et la traite ;</li>
				<li>$i++ signifie qu'à chaque tour de boucle, la variable compteur ($i) augmentera de 1 (simplification de $i=$i+1).</li>
			</ul>
			<h3>B. Structure itérative sans compteur</h3>
			<p>Dans les structures sans compteur, le nombre d'itérations n'est pas connu à l'avance car lié à la réalisation d'une condition qui peut changer de valeur à chaque itération, en cours d'exécution du programme.</p>
			<p><u>Une <b>structure itérative courante</b> est de type <b>TANT QUE</b></u> :</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="2" class="td_centre_gros td_sig td_background_sig">Structure alternative simple</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style=" padding-left: 22%;">TANT QUE <span style="color: blue;">condition</span></td>
						<td>(1)</td>
					</tr>
					<tr>
						<td style="color: green; padding-left: 26%;"><span style="font-size: 230%; display: inline; position: absolute; transform: translate(-55%, -34%); color: black;">|&nbsp;&nbsp;</span>instruction(s)</td>
						<td>(2)</td>
					</tr>
					<tr>
						<td style="padding-left: 22%;">FIN TANT QUE</td>
						<td>(3)</td>
					</tr>
					<tr>
						<td style="padding-left: 22%;">(...suite...)</td>
						<td>(4)</td>
					</tr>
				</tbody>
			</table>
			<p><u>Explications</u> :</p>
			<ul>
				<li>lorsque le test de la condition (1) est <span style="color: green;">VRAI</span> la séquence d'instruction(s) s'exécute une fois (2) et prend fin (3), puis la condition est de nouveau testée (retour à (1)),</li>
				<li>lorsque le test de la condtion (1) est <span style="color: red;">FAUX</span>, une sortie de la boucle s'effectue (passage direct à (3) et poursuite de l'algorithme en (4)).</li>
			</ul>
			<table class="tab_sig">
				<thead>
					<tr>
						<td class="td_background_sig td_sig td_centre td_larg_35">Structure en PHP</td>
						<td class="td_background_sig td_sig td_centre td_larg_65">Interprétation</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="td_left">while (condition)</td>
						<td rowspan="4" class="td_sig_bord_g">Tant que (while) la condition booléenne est vérifiée, exécuter l'(les) instruction(s).<br />Il se peut qu'il n'y ai aucune itération si la condition est d'emblée vérifiée.</td>
					</tr>
					<tr>
						<td class="pad_left_indent td_left">{</td>
					</tr>
					<tr>
						<td class="pad_left_2_indent td_left">instruction(s);</td>
					</tr>
					<tr>
						<td class="pad_left_indent td_left">}</td>
					</tr>
					<tr>
						<td class="td_background_sig td_sig td_centre">Exemple en PHP</td>
						<td class="td_background_sig td_sig td_centre">Affichage</td>
					</tr>
					<tr>
						<td><span class="text_red">$i</span>=<span class="text_orange">2</span>;</td>
						<td class="td_sig_bord_g">4</td>
					</tr>
					<tr>
						<td></td>
						<td class="td_sig_bord_g">16</td>
					</tr>
					<tr>
						<td><span class="text_purple">while </span>(<span class="text_red">$i</span>&lt;=<span class="text_orange">10</span>)</td>
						<td class="td_sig_bord_g">256</td>
					</tr>
					<tr>
						<td class="pad_left_indent">{</td>
							<td class="td_sig_bord_g">65536</td>
					</tr>
					<tr>
						<td class="pad_left_2_indent"><span class="text_red">$i</span>=<span class="text_red">$i</span>*<span class="text_red">$i</span>;</td>
						<td class="td_sig_bord_g"></td>
					</tr>
					<tr>
						<td class="pad_left_2_indent"><span class="text_turquoise">echo </span><span class="text_red">$i</span> . <span class="text_vert">"&lt;br />"</span>;</td>
						<td class="td_sig_bord_g"></td>
					</tr>
					<tr>
						<td class="pad_left_indent">}</td>
						<td class="td_sig_bord_g"></td>
					</tr>
				</tbody>
			</table>
			<h2>V. Fonctions</h2>
			<p>Lorsqu'un traitement particulier est appelé à se répéter plusieurs fois dans un même programme ou dans différents programmes, il est efficace de créer un sous-programme prenant en charge ce traitement. Ce sous-programme sera appelé par les programmes dits « principaux » ce qui évite ainsi d'avoir à ré-écrire ce traitement plusieurs fois.</p>
			<p>On peut ainsi constituer une <b>bibliothèque de fonctions réutilisables</b> dans de nombreux programmes. Leur utilisation fait gagner du temps au développeur.</p>
			<p><u>Une fonction est un programme qui a deux particularités</u> :</p>
			<ul>
				<li><b>en fin d'exécution</b>, elle <b>renvoie une valeur-résultat</b> (au type spécifié) <b>au programme qui l'a appelé</b>,</li>
				<li>elle <b>peut recevoir des valeurs en entrées</b> qui lui sont <b>transmises par le programme</b> (principal) <b>appelant</b> : <span class="text_purple">nomFonction (arg1, arg2,...)</span> (les arguments ou paramètres doivent porter des noms désignant les valeurs attendues).</li>
			</ul>
			<h3>Fonctions prédéfinies</h3>
			<p>Les langages de programmation fournissent des fonctions prédéfinies.</p>
			<p><u>Illustrons par des exemples en PHP</u> :</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="2" class="td_background_sig td_centre td_sig">Description d'une fonction prédéfinie sans arguments en entrée : time()</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2" class="td_sig"><span class="text_purple">int</span><span class="text_turquoise"> time </span>()</td>
					</tr>
					<tr>
						<td colspan="2">Cette description signifie que la fonction renvoie un entier (<span class="text_purple">int</span>).</td>
					</tr>
					<tr>
						<td colspan="2">Cette fonction interroge l'horloge du serveur web et renvoie le nombre de secondes écoulées depuis le début de l'époque UNIX (1<sup>er</sup> janvier 1970 00:00:00 GMT).</td>
					</tr>
					<tr>
						<td colspan="2">Elle n'a donc pas d'argument (parenthèses vides).</td>
					</tr>
					<tr>
						<td class="td_background_sig td_centre td_sig">Exemple</td>
						<td class="td_background_sig td_centre td_sig">Affichage</td>
					</tr>
					<tr>
						<td><span class="text_turquoise">echo</span><span class="text_vert"> "Il y a "</span> . <span class="text_turquoise">time</span>()/(<span class="text_orange">365.25</span>*<span class="text_orange">24</span>*
							<span class="text_orange">60</span>*<span class="text_orange">60</span>) . <span class="text_vert">" années, naissait UNIX."</span>;<span class="text_grey"> /* commentaire : conversion secondes en années */</span></td>
						<td class="td_sig_bord_g"> <?php echo "Il y a " . time()/(365.25*24* 60*60) . " années, naissait UNIX."; ?> </td>
					</tr>
				</tbody>
			</table>
			<div style="margin: 5% 0; display: block;"></div>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="2" class="td_background_sig td_centre td_sig">Description d'une fonction prédéfinie avec un argument en entrée : date()</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2" class="td_sig"><span class="text_purple">string</span><span class="text_turquoise"> date </span>(<span class="text_purple">string</span><span class="text_red"> $format </span>[
							, <span class="text_purple">int</span><span class="text_red"> $timestamp </span>=<span class="text_turquoise"> time</span>()])</td>
						</tr>
					<tr>
						<td colspan="2">Cette description signifie que la fonction renvoie une chaîne de caractères (<span class="text_purple">string</span>).</td>
					</tr>
					<tr>
						<td colspan="2">Cette fonction requiert au moins un argument (une chaîne de caractères aussi), le second, facultatif donc (entre [crochets] ; la virgule permet de différencier, séparer les arguments), doit être de type entier (comme la fonction time() vu plus haut qui est par défaut le deuxième paramètre).</td>
					</tr>
					<tr>
						<td colspan="2">La fonction <span class="text_turquoise">date</span>(<span class="text_grey">'arg'</span>) retourne une date (le premier argument (<span class="text_red">$format</span>), demande un format de date :
							<a href="https://secure.php.net/manual/fr/function.date.php" class="approf_sig" target="_blank">voir</a> tous les formats).</td>
					</tr>
					<tr>
						<td class="td_background_sig td_centre td_sig">Exemples</td>
						<td class="td_background_sig td_centre td_sig">Affichages</td>
					</tr>
					<tr>
						<td class="td_sig"><span class="text_turquoise">echo</span> <span class="text_vert">"Nous sommes en l'an "</span> . <span class="text_turquoise">date</span>(<span class="text_vert">'Y'</span>) . <span class="text_vert">"."</span>;</td>
						<td class="td_sig"> <?php echo "Nous sommes en l'an " . date('Y') . "."; ?> </td>
					</tr>
					<tr>
						<td class="td_sig"><span class="text_turquoise">echo</span> <span class="text_vert">"Aujourd'hui nous sommes le "</span> . <span class="text_turquoise">date</span>(<span class="text_vert">'d / m / y'</span>) . <span class="text_vert">"."</span>;</td>
						<td class="td_sig"> <?php echo "Aujourd'hui nous sommes le " . date('d / m / y', time()+7200) . "."; ?> </td>
					</tr>
				</tbody>
			</table>
			<div style="margin: 5% 0; display: block;"></div>
			<table class="tab_sig">
				<thead>
					<tr>
						<td colspan="2" class="td_background_sig td_centre td_sig">Description d'une fonction prédéfinie avec plusieurs arguments en entrée : round()</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2" class="td_sig"><span class="text_purple">float</span><span class="text_turquoise"> round</span>(<span class="text_purple">float</span><span class="text_red"> $val </span>[ , <span class="text_purple">int</span><span class="text_red"> $precision </span>=<span class="text_orange"> 0</span>])</td>
						</tr>
					<tr>
						<td colspan="2" class="td_sig_bord_g">Cette description signifie que la fonction renvoie un nombre à virgule flottante (1<sup>er</sup> <span class="text_purple">float</span>, nombre réel ou naturel).</td>
					</tr>
					<tr>
						<td colspan="2">Cette fonction arrondit un nombre (<span class="text_red">$val</span>). Si le deuxième argument est omis (<span class="text_red">$precision</span>, ou à 0), ce nombre sera arrondi à l'entier. Pour spécifier le nombre limite de chiffres après la virgule, il suffit de l'inscrire dans le deuxième paramètre. Pour arrondir un nombre à gauche de la virgule (aux dizaines, centaines...), il faut inscrire un nombre négatif.</td>
					</tr>
					<tr>
						<td class="td_background_sig td_centre td_sig">Exemples</td>
						<td class="td_background_sig td_centre td_sig">Affichages</td>
					</tr>
					<tr>
						<td><span class="text_turquoise">echo</span><span class="text_turquoise"> round</span>(<span class="text_orange">4383</span>, -<span class="text_orange">1</span>);</td>
						<td class="td_sig_bord_g">4380</td>
					</tr>
					<tr>
						<td class="td_sig_bord_h_dot"><span class="text_turquoise">echo</span><span class="text_turquoise"> round</span>(<span class="text_orange">4383</span>, <span class="text_orange">0</span>);</td>
						<td class="td_sig_bord_h_dot td_sig_bord_g">4383</td>
					</tr>
					<tr>
						<td class="td_sig_bord_h_dot"><span class="text_turquoise">echo</span><span class="text_turquoise"> round</span>(<span class="text_orange">4385</span>, -<span class="text_orange">1</span>);</td>
						<td class="td_sig_bord_h_dot td_sig_bord_g">4390</td>
					</tr>
					<tr>
						<td class="td_sig_bord_h_dot"><span class="text_turquoise">echo</span><span class="text_turquoise"> round</span>(<span class="text_orange">3.564</span>, <span class="text_orange">2</span>);</td>
						<td class="td_sig_bord_h_dot td_sig_bord_g">3.56</td>
					</tr>
					<tr>
						<td class="td_sig_bord_h_dot"><span class="text_turquoise">echo</span><span class="text_turquoise"> round</span>((<span class="text_orange">1</span>/<span class="text_orange">3</span>), <span class="text_orange">4</span>);</td>
						<td class="td_sig_bord_h_dot td_sig_bord_g">0.3333</td>
					</tr>
				</tbody>
			</table>
			<h3>B. Fonctions personnalisées</h3>
			<p>PHP permet de créer des fonctions, voyons cela à partir d'un exemple :</p>
			<table class="tab_sig">
				<thead>
					<tr>
						<td class="td_background_sig td_sig td_centre">Syntaxe</td>
						<td class="td_background_sig td_sig td_centre">Exemple</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="td_left"><u>Définition</u></td>
						<td class="td_sig_bord_g td_left"><span class="text_purple">function</span><span class="text_blue"> nbsec</span>(<span class="text_red">$nbh</span>, <span class="text_red">$nbmin</span>)</td>
					</tr>
					<tr>
						<td class="td_left">function nom_fonction (paramètre(s) formel(s))</td>
						<td class="td_sig_bord_g pad_left_indent">{</td>
					</tr>
					<tr>
						<td class="pad_left_indent">{</td>
						<td class="td_sig_bord_g pad_left_2_indent"><span class="text_red">$sec</span>=<span class="text_orange">3600</span>*<span class="text_red">$nbh</span>+<span class="text_orange">60</span>*<span class="text_red">$nbmin</span>;</td>
					</tr>
					<tr>
						<td class="pad_left_2_indent">instruction(s);</td>
						<td class="td_sig_bord_g pad_left_2_indent"><span class="text_purple">return</span> <span class="text_red">$sec</span>;</td>
					</tr>
					<tr>
						<td class="pad_left_2_indent">return $resultat;</td>
						<td class="td_sig_bord_g pad_left_indent">}</td>
					</tr>
					<tr>
						<td class="pad_left_indent">}</td>
						<td class="td_sig_bord_g"></td>
					</tr>
					<tr>
						<td class="td_left td_sig_bord_h_dot"><u>Appel</u></td>
						<td class="td_sig_bord_g td_left td_sig_bord_h_dot"><span class="text_red">$tpssec</span>=<span class="text_blue">nbsec</span>(<span class="text_orange">2</span>, <span class="text_orange">10</span>);</td>
					</tr>
					<tr>
						<td class="td_left">nom_fonction (paramètre(s) effectif(s))</td>
						<td class="td_sig_bord_g td_left">(2 est la valeur effective qui sera transmise dans le paramètre formel <span class="text_red">$nbh</span> ; 10 sera transmis à <span class="text_red">$nbmin</span>)</td>
					</tr>
					<tr>
						<td class="td_left">ou $var=nom_fonction (paramètre(s) effectif(s))</td>
						<td class="td_sig_bord_g td_left">(<span class="text_red">$tpssec</span> recevra 7800)</td>
					</tr>
				</tbody>
			</table>
			<h2>VI. Accès aux données d'une base</h2>
			<p>Les données d'un programme ne sont pas persistantes puisque toutes les variables sont effacées en fin d'exécution du programme. Les données à conservées sont souvent enregistrées dans des bases de données auxquelles les programmes peuvent avoir accès (en insertion, mise à jour, interrogation ou suppression).</p>
			<h3>A. Connexion à la base de données</h3>
			<p>Avant de se connecter à une base de données, il faut d'abord se connecter au SGBDR du serveur qui l'héberge ; par exemple s'il s'agit d'un serveur MySQL :</p>
			<p><span class="text_red">$cxServeur</span>=<span class="text_turquoise">mysql_connect</span>(<span class="text_red">$IPserveurMySQL</span>, <span class="text_red">$nomUtilisateurMySQL</span>, <span class="text_red">$motPasseUtilisateurMySQL</span>);</p>
			<p>Si la connexion réussit, la variable $cxServeur reçoit un identifiant de session ouverte avec le serveur MySQL, sinon elle reçoit <i>False</i>. La connexion à la base de données se réalise ensuite en reprenant cet identifiant :</p>
			<p><span class="text_red">$cxBase</span>=<span class="text_turquoise">mysql_select_db</span>(<span class="text_red">$nomBase</span>, <span class="text_red">$cxServeur</span>);</p>
			<p>On gagnera à inclure ces instructions de connexion dans un fichier spécifique (et protégé) que pourront appeler tous les programmes ayant recours à la base de données (ainsi si les paramètres de connexion changent, il n'y aura que ce seul fichier à mettre à jour).</p>
			<p>Une connexion (non persistante) avec la base de données se ferme automatiquement en fin de script.</p>
			<h3>B. Exécution d'une requête SQL</h3>
			<p>Le langage de communication avec les bases de données relationnelles est le SQL. Le langage de programmation PHP peut envoyer au SGBDR des requêtes SQL pour en demander l'exécution et en récupérer le résultat :</p>
			<div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between;">
				<p class="pad_left_indent"><span class="text_red">$resultat</span>=<span class="text_turquoise">mysql_query</span>(<span class="text_red">$query</span>);</p>
				<p class="pad_left_indent"><span class="text_red">$query</span> contient une chaîne de caractères (entre guillemets) correspondant à une requête SQL.</p>
			</div>
			<p><u>Nous distinguerons deux types de requêtes selon la nature du résultat retourné</u> :</p>
			<ul>
				<li>
					les requêtes qui agissent sur la structure <i>(CREATE</i>, <i>ALTER</i>, <i>DROP)</i> ou sur le contenu <i>(INSERT INTO</i>, <i>UPDATE</i>, <i>DELETE)</i> de la base de données ; leur résultat est soit un échec pour cause d'erreur de syntaxe ou d'opération non autorisée (<span class="text_red">$resultat</span> reçoit la valeur <i>False)</i>, soit un succès (<span class="text_red">$resultat</span> reçoit la valeur <i>True)</i>
					<ul>
						<li><span class="text_turquoise">mysql_affected_rows</span>() : retourne le nombre d'enregistrements modifiés par la dernière requête exécutée (pour une requête <i>INSERT INTO</i>, <i>UPDATE</i>, <i>DELETE)</i>,</li>
						<li><span class="text_turquoise">mysql_insert_id</span>() : retourne la valeur du dernier identifiant auto-incrémenté par une requête <i>INSERT INTO</i></li>
					</ul>
				</li>
				<li>
					les requêtes qui interrogent la base <i>(SELECT)</i> ; leur résultat est soit un échec pour cause d'erreur de syntaxe ou d'opération non autorisée (<span class="text_red">$resultat</span> reçoit la valeur <i>False)</i>, soit un succès et <span class="text_red">$resultat</span> reçoit le <b>jeu d'enregistrements</b> retourné par le SGBDR stocké dans une <b>liste</b>
					<ul>
						<li><span class="text_turquoise">mysql_num_rows</span>(<span class="text_red">$resultat</span>) : retourne le nombre entier d'enregistrements contenu dans <span class="text_red">$resultat</span>.</li>
					</ul>
					<br />Un <b>enregistrement</b> est une « ligne » comportant des valeurs pour un à plusieurs attributs (ceux projetés dans l'ordre <i>SELECT)</i>. Un <b>jeu d'enregistrements</b> est un ensemble d'enregistrements (dans l'ordre éventuellement précisé par la clause <i>ORDER BY)</i>.
				</li>
			</ul>
			<h3>C. Lecture séquentielle d'un jeu d'enregistrements ou d'une liste</h3>
			<p>Les enregistrements d'un jeu d'enregistrements (ou liste) sont accessibles séparément grâce aux fonctions <span class="text_turquoise">mysql_fetch_assoc</span> ou <span class="text_turquoise">mysql_fetch_array</span> qui renvoient un enregistrement dans une variable de type tableau.</p>
			<p>Pour traiter tous les enregistrements de listes, on procède généralement à une <b>lecture séquentielle</b> (du premier au dernier) à l'aide d'une structure itérative (« jusqu'à ce qu'il n'y ai plus d'enregistrements à lire dans le jeu d'enregistrements ») :</p>
			<div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between;">
				<p style="padding-right: 2%;"><span class="text_red">$enreg</span>=<span class="text_turquoise">mysql_fetch_array</span>(<span class="text_red">$resultat</span>);
				<br /><span class="text_purple">while</span>(<span class="text_red">$enreg</span>!=<span class="text_orange">False</span>)
				<br />&nbsp;&nbsp; {
				<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="text_red">$enreg</span>=<span class="text_turquoise">mysql_fetch_array</span>(<span class="text_red">$resultat</span>);
				<br />&nbsp;&nbsp; }</p>
				<p style="padding-left: 2%;">affectation à <span class="text_red">$enreg</span> du premier enregistrement du jeu d'enregistrements <span class="text_red">$resultat</span>.
				<br /><br />lecture de l'enregistrement suivant, si on était au dernier, <span class="text_red">$enreg</span> reçoit la valeur <i>False</i>.</p>
			</div>
			<p>La valeur de chaque attribut de l'enregistrement en cours est ainsi accessible : <span class="text_red">$enreg</span>[<span class="text_vert">'libAttribut'</span>].</p>
    </div>
    <footer>
			<a href="Question_4_Comment_peut_on_produire_de_l_information_a_partir_de_donnees_contenues_dans_une_base.html" class="bouton_footer_sig">Question 4</a>
			<a href="Question_2_Les_evolutions_technologiques_sont_elles_exemptes_de_risques_pour_l_organisation.html" class="bouton_footer_sig">Question 2</a>
      <a href="#haut" class="bouton_footer_sig">Haut de page</a>
      <a href="Sommaire.html" class="bouton_footer_sig">Retour au sommaire</a>
    </footer>
    <!-- phpmyvisites -->
    <a href="http://st.free.fr/" title="phpMyVisites | Open source web analytics"
    onclick="window.open(this.href);return(false);"><script>
    <!--
    var a_vars = Array();
    var pagename='';

    var phpmyvisitesSite = 288732;
    var phpmyvisitesURL = "http://st.free.fr/phpmyvisites.php";
    //-->
    </script>
    <script src="http://st.free.fr/phpmyvisites.js"></script>
    <img src="http://st.free.fr/phpmyvisites.php" alt="Statistics" style="border:0; color: transparent;" /></a>
    <!-- /phpmyvisites -->
  </body>
</html>

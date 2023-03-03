# Évaluation JavaScript LyricsFinder

## Présentation

LyricsFinder est une application permettant de rechercher les paroles d'une musique en saisissant un auteur et le titre d'une musique.

Cette application utilisera l'API [lyrics.api.pierre-jehan.com](http://lyrics.api.pierre-jehan.com) pour effectuer la recherche.

La base de données de cette API contient plus de 200 000 musiques importées depuis un fichier CSV récupéré sur internet.
Cependant, les données semblent tout de même limitées (il manque de nombreuses musiques) et les paroles ne sont pas toujours correctes (probablement générées par un algorithme).

Pour récupérer par exemple les paroles de la musique "Paradise" de "Coldplay", il faut appeler l'URL suivante :
[http://lyrics.api.pierre-jehan.com/music?title=paradise&artist=coldplay](http://lyrics.api.pierre-jehan.com/music?title=paradise&artist=coldplay)

Attention ! Si le titre de la musique contient des espaces, il faut les remplacer par des tirets ("-").
Par exemple, pour la musique "Viva la vida" de "Coldplay", il faut appeler l'URL :
[http://lyrics.api.pierre-jehan.com/music?title=viva-la-vida&artist=coldplay](http://lyrics.api.pierre-jehan.com/music?title=viva-la-vida&artist=coldplay)

L'API étant hébergée sur un Raspberry Pi, il faut attendre environ 10 secondes avant qu'un résultat ne soit retourné (ce qui pourrait être gênant mais dans le cadre de cet exercice, cela nous permettra d'avoir le temps de visualiser le chargement des données).

## TODO

- [ ] (1 pt) Masquer la loupe au chargement de la page
- [ ] (2 pts) Capturer l'évènement d'envoi du formulaire et annuler la redirection
- [ ] (3 pts) Rechercher les paroles via l'API et les afficher à l'écran (en remplaçant les espaces par des tirets)
- [ ] (2 pts) Si la musique recherchée n'est pas trouvée, afficher le texte suivant : "The music you are looking for can't be found..."
- [ ] (2 pts) Lorsque la recherche est démarrée, désactiver le bouton d'envoi du formulaire, masquer le texte "Search for a song to display the lyrics..." et afficher la loupe. Une fois la recherche terminée, ré-activer le bouton, afficher les paroles (ou le message d'erreur) et masquer la loupe.

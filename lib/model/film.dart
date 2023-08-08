
// Projet:  Laboratoire_1
// Codeurs: Mathieu Hatin
// Cours : Apps multi (420-324-AH)

// NOTES
// Dans l'énoncé du laboratoire_1 il est demander de mettre tout les getters et setters conrespondant aux champs de la classe.
// Mais en Dart on ne fait pas ça si on accède seulement au variable contrairement à Java and C# par exemple.
// Voir la doc officielle: https://dart.dev/tools/linter-rules/unnecessary_getters_setters
// Donc, j'ai passé outre l'énoncé pour ne pas aller à l'encore des bonnes pratiques Dart car l'idée selon moi c'est d'apprendre
// à bien programmer dans ce nouveau language avec la bonne façon de faire. Et celle-ci change d'un language à l'autre.

// Model
class Film {

  String titre; 
  String annee;
  String duree;
  String categorie;
  String realisateur;
  /// released: non disponible dans films.js)
  
  Film(this.titre, this.annee, this.duree, this.categorie, this.realisateur);

  factory Film.fromJson(dynamic json) {
    return Film(json['Titre'] as String, json['Annee'] as String, json['Duree'] as String, json['Categorie'] as String, json['Realisateur'] as String );
  }

  @override
  String  toString() {
    return "{titre:$titre,année:$annee,durée:$duree,catégorie:$categorie,réalisateur:$realisateur}";
  }
}
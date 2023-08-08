
// Projet:  Laboratoire_1
// Codeurs: Mathieu Hatin
// Cours : Apps multi (420-324-AH)

import 'package:gestion_films/controller/film_controller.dart';
import 'package:gestion_films/view/film_console_view.dart';

void main() {
  var vue = FilmConsoleView();
  var controleur = FilmController(vue);
  print("4. Afficher tous les films");
  controleur.printAll();
  print("6. Afficher les films en ordre décroissant d'année");
  controleur.printYear(true);
  print("6. Afficher les films compris entre deux années: 2000-2006");
  controleur.printBetweenYears(2000, 2006);
  print("8. Afficher tous les films d’un réalisateur donné: Brian De Palma");
  controleur.printDirector("Brian De Palma");
  print("9. Supprimer un film de listeObjsFilm via le titre de celui-ci et afficher après la liste: Scarface");
  controleur.deleteNPrint("Scarface");
}


  // Projet:  Laboratoire_1
  // Codeurs: Mathieu Hatin
  // Cours : Apps multi (420-324-AH)

import 'package:gestion_films/controller/film_controller.dart';
import 'package:gestion_films/view/film_console_view.dart';
import 'dart:io';

void main() {

  var vue = FilmConsoleView();
  var controleur = FilmController(vue);

  stdout.writeln("4. Afficher tous les films");
  controleur.printAll();

  stdout.writeln("5. Afficher les films en ordre décroissant d'année");
  controleur.printYear(true);

  stdout.writeln("6. Afficher les films compris entre deux années. Ex: 2000-2006");
  String? years = stdin.readLineSync();
  if (years != null) {
    List<String> yearsSplit = years.split('-');
    controleur.printBetweenYears(int.parse(yearsSplit[0]), int.parse(yearsSplit[1]));
  } else {
    stdout.writeln("Invalide");
  }
  
  stdout.writeln("8. Afficher tous les films d’un réalisateur donné. Ex: Brian De Palma");
  String? realisateur = stdin.readLineSync();
  (realisateur != null) ? controleur.printDirector(realisateur) : stdout.writeln("Invalide");

  stdout.writeln("9. Supprimer un film de listeObjsFilm via le titre de celui-ci et afficher après la liste. Ex: Scarface");
  String? titre = stdin.readLineSync();
  (titre != null) ? controleur.deleteNPrint(titre) : stdout.writeln("Invalide");

}

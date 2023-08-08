
// Projet:  Laboratoire_1
// Codeurs: Mathieu Hatin
// Cours : Apps multi (420-324-AH)

import 'package:gestion_films/model/film.dart';

// View
class FilmConsoleView {

  void afficherFilms(List<Film> films) {
    for (var film in films) {
      print(film.toString());
    }
  }
  
}
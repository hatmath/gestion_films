
// Projet:  Laboratoire_1
// Codeurs: Mathieu Hatin
// Cours : Apps multi (420-324-AH)

import 'package:gestion_films/data/films.js';
import 'package:gestion_films/model/film.dart';
import 'package:gestion_films/view/film_console_view.dart';
import 'dart:convert';

// Controller
class  FilmController {

  bool sourceListeFilms = true;
  String listeFilmsStr = "";
  List listeFilmsJson = [];
  List<Film> listeObjsFilm = [];
  final FilmConsoleView vue;

  FilmController (this.vue) {
    if (sourceListeFilms) {     
      listeFilmsStr = json.encode(listeFilms);
      listeFilmsJson = json.decode(listeFilmsStr) as List;
      listeObjsFilm = listeFilmsJson.map((filmJson) => Film.fromJson(filmJson)).toList();
    }    
  }

  void printAll() {
    vue.afficherFilms(listeObjsFilm);
  }

  void printYear(bool descending) {
    if (descending) {
       listeObjsFilm.sort((a, b) => b.annee.compareTo(a.annee));
       vue.afficherFilms(listeObjsFilm);
    }
  }

  void printBetweenYears(int minYear, int maxYear) {
    var filteredList = listeObjsFilm.where((item) => int.parse(item.annee) >= minYear && int.parse(item.annee) <= maxYear).toList();
    vue.afficherFilms(filteredList);
  }

  void printDirector(String aDirector) {
    var filteredList = listeObjsFilm.where((item) => item.realisateur == aDirector).toList();
    vue.afficherFilms(filteredList);
  }
  
  void deleteNPrint(String aTitle) {
    listeObjsFilm.removeWhere((item) => item.titre == aTitle);
    vue.afficherFilms(listeObjsFilm);
  }

}




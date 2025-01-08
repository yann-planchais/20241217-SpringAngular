package fr.yopsolo.formation.springangular.service;

import java.util.List;

import fr.yopsolo.formation.springangular.entite.Categorie;

public interface CategorieService {

	List<Categorie> getAllCategories();

	Categorie getCategorie(Long id);

	Categorie findByNomCategorie(String nom);

	Categorie saveCategorie(Categorie p);

	Categorie updateCategorie(Categorie p);

	void deleteCategorie(Categorie p);

	void deleteCategorieById(Long id);

}

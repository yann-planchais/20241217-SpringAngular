package fr.yopsolo.formation.springangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import fr.yopsolo.formation.springangular.entite.Categorie;

@RepositoryRestResource(path = "rest")
public interface CategorieRepository extends JpaRepository<Categorie, Long> {

	Categorie findByNomCat(String nom);

}

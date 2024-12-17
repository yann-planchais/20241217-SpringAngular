package fr.yopsolo.formation.springangular.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.yopsolo.formation.springangular.entite.Categorie;
import fr.yopsolo.formation.springangular.entite.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
	List<Produit> findByNomProduit(String nom);
	List<Produit> findByNomProduitContains(String nom);   
	
	@Query("select p from Produit p where p.nomProduit like %:nom and p.prixProduit > :prix")
	List<Produit> findByNomPrix (@Param("nom") String nom,@Param("prix") Double prix);

	@Query("select p from Produit p where p.nomProduit like %?1and p.prixProduit > ?2")
	List<Produit> findByNomPrixAvecInterrogation (String nom,Double prix);
    
	@Query("select p from Produit p where p.categorie = ?1")
	List<Produit> findByCategorie (Categorie categorie);
	
	List<Produit> findByCategorieIdCat(Long id);
	
	List<Produit> findByOrderByNomProduitAsc();
	
	@Query("select p from Produit p order by p.nomProduit ASC, p.prixProduit DESC")
	List<Produit> trierProduitsNomsPrix ();
	              




}

package fr.yopsolo.formation.springangular.entite;

import org.springframework.data.rest.core.config.Projection;

/**
 * Permet de ne retourner que certains champs lors d'un appel Rest
 */

@Projection(name = "nomProd", types = { Produit.class })
public interface ProduitProjection {

	public String getNomProduit();
}

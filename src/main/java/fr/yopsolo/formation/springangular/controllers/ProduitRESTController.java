package fr.yopsolo.formation.springangular.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.yopsolo.formation.springangular.entite.Produit;
import fr.yopsolo.formation.springangular.service.ProduitService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRESTController {
	
	@Autowired
	ProduitService produitService;
	
	@GetMapping
	public List<Produit> getAllProduits() {
		return produitService.getAllProduits();
	 } 		
	
	@GetMapping(value="/{id}")
	public Produit getProduitById(@PathVariable Long id) {	
		return produitService.getProduit(id);
    }
	
	@PostMapping
	public Produit createProduit(@RequestBody Produit produit) {
		return produitService.saveProduit(produit);
	}

	@PutMapping
	public Produit updateProduit(@RequestBody Produit produit) {
		return produitService.updateProduit(produit);
	}

	@DeleteMapping(value="/{id}")
	public void deleteProduit(@PathVariable Long id)
	{
		produitService.deleteProduitById(id);
	}
	
	@GetMapping(value="/prodscat/{idCat}")
	public List<Produit> getProduitsByCatId(@PathVariable Long idCat) {
		return produitService.findByCategorieIdCat(idCat);
	 }


}

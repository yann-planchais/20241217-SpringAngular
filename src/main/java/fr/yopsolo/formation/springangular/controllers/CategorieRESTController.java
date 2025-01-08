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

import fr.yopsolo.formation.springangular.entite.Categorie;
import fr.yopsolo.formation.springangular.service.CategorieService;

@RestController
@RequestMapping("/api/cat")
@CrossOrigin
public class CategorieRESTController {

	@Autowired
	CategorieService categorieService;

	@GetMapping
	public List<Categorie> getAllCategories() {
		return categorieService.getAllCategories();
	}

	@GetMapping(value = "/{id}")
	public Categorie getCategorieById(@PathVariable Long id) {
		return categorieService.getCategorie(id);
	}

	@PostMapping
	public Categorie createCategorie(@RequestBody Categorie pCategorie) {
		return categorieService.saveCategorie(pCategorie);
	}

	@PutMapping
	public Categorie updateCategorie(@RequestBody Categorie pCategorie) {
		return categorieService.updateCategorie(pCategorie);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteCategorie(@PathVariable Long id) {
		categorieService.deleteCategorieById(id);
	}

}

package fr.yopsolo.formation.springangular.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.yopsolo.formation.springangular.entite.Categorie;
import fr.yopsolo.formation.springangular.repository.CategorieRepository;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class CategorieServiceImpl implements CategorieService {

	@Autowired
	CategorieRepository categorieRepository;

	@Override
	public Categorie saveCategorie(Categorie p) {
		Categorie plocal = categorieRepository.save(p);
		log.debug("Identifiant généré : {}", p.getIdCat());
		return plocal;

	}

	@Override
	public Categorie updateCategorie(Categorie p) {
		return categorieRepository.save(p);
	}

	@Override
	public void deleteCategorie(Categorie p) {
		categorieRepository.delete(p);

	}

	@Override
	public void deleteCategorieById(Long id) {
		categorieRepository.deleteById(id);

	}

	@Override
	public Categorie getCategorie(Long id) {
		return categorieRepository.findById(id).get();

	}

	@Override
	public List<Categorie> getAllCategories() {
		return categorieRepository.findAll();
	}

	@Override
	public Categorie findByNomCategorie(String pNom) {
		return categorieRepository.findByNomCat(pNom);
	}

}

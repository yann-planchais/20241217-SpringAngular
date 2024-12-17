package fr.yopsolo.formation.springangular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import fr.yopsolo.formation.springangular.entite.Produit;

@SpringBootApplication
public class SpringAngularApplication implements CommandLineRunner{

	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringAngularApplication.class, args);
	}

	/**
	 * Permet d'exposer les ID des objets lors des appels REST
	 */
	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Produit.class);
		
	}

}

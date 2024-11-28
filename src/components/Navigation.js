'use strict'

// src/components/Navigation.js
import React from 'react';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Mon Portfolio Tech</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#accueil">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partenaires">Nos Partenaires</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

// src/components/Bio.js
import React from 'react';

function Bio() {
  return (
    <section id="accueil" className="container text-center my-5">
      <h1 className="display-4">Bienvenue dans le monde de la tech</h1>
      <p className="lead">Découvrez mes projets, mes partenaires, et mes réseaux sociaux.</p>
    
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex align-items-center mt-5">
          <p className="lead">
            Passionné par la tech, je suis un développeur toujours à la recherche de nouvelles
            opportunités pour explorer, créer et collaborer dans le domaine des technologies.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/tdc.png" alt="Image Personnelle" className="img-fluid rounded-circle" />
        </div>
      </div>
    </section>
  );
}

export default Bio;

// src/components/Partenaires.js
import React from 'react';

function Partenaires() {
  const entreprises = [
    { id: 1, nom: 'Entreprise 1', description: 'Entreprise innovante spécialisée dans les solutions cloud.', logo: 'logo-entreprise1.png' },
    { id: 2, nom: 'Entreprise 2', description: 'Une entreprise de renommée mondiale dans le développement d\'IA.', logo: 'logo-entreprise2.png' },
    { id: 3, nom: 'Entreprise 3', description: 'Leader dans la sécurité informatique et la protection des données.', logo: 'logo-entreprise3.png' },
    { id: 4, nom: 'Entreprise 4', description: 'Spécialistes dans la création de solutions e-commerce.', logo: 'logo-entreprise4.png' },
    { id: 5, nom: 'Entreprise 5', description: 'Entreprise pionnière dans le développement d\'applications mobiles.', logo: 'logo-entreprise5.png' },
    { id: 6, nom: 'Entreprise 6', description: 'Entreprise de conseil en stratégie numérique et transformation digitale.', logo: 'logo-entreprise6.png' }
  ];

  return (
    <section id="partenaires" className="container my-5">
      <h2 className="text-center mb-4">Nos Partenaires</h2>
      <div className="row">
        {entreprises.map((entreprise) => (
          <div key={entreprise.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={`/img/${entreprise.logo}`} className="card-img-top" alt={entreprise.nom} />
              <div className="card-body">
                <h5 className="card-title">{entreprise.nom}</h5>
                <p className="card-text">{entreprise.description}</p>
                <a href="#" className="btn btn-primary">Découvrir</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partenaires;

// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact</h2>
      <p className="text-center">Vous pouvez me contacter via mes réseaux sociaux :</p>
      <div className="text-center">
        <a href="https://www.linkedin.com" className="btn btn-outline-primary mx-2">LinkedIn</a>
        <a href="https://www.github.com" className="btn btn-outline-secondary mx-2">GitHub</a>
        <a href="https://twitter.com" className="btn btn-outline-info mx-2">Twitter</a>
      </div>
    </section>
  );
}

export default Contact;

// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <p>&copy; 2024 Mon Portfolio Tech - Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
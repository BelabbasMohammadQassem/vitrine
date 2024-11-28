// src/components/Partenaires.js
import React from 'react';
import './Partenaires.css'; // Nouveau fichier CSS pour les styles spécifiques

const Partenaires = () => {
  const entreprises = [
    { nom: 'Entreprise 1', description: 'Spécialisée dans les solutions cloud', img: '/img/logo-entreprise1.png' },
    { nom: 'Entreprise 2', description: 'Renommée mondiale en IA', img: '/img/logo-entreprise2.png' },
    { nom: 'Entreprise 3', description: 'Leader dans le développement web', img: '/img/logo-entreprise3.png' },
    { nom: 'Entreprise 4', description: 'Expert en cybersécurité', img: '/img/logo-entreprise4.png' },
    { nom: 'Entreprise 5', description: 'Entreprise innovante en IoT', img: '/img/logo-entreprise5.png' },
    { nom: 'Entreprise 6', description: 'Start-up en pleine croissance', img: '/img/logo-entreprise6.png' },
  ];

  return (
    <section id="partenaires" className="container my-5">
      <h2 className="text-center">Nos Entreprises Partenaires</h2>
      <div className="row">
        {entreprises.map((entreprise, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img src={entreprise.img} alt={entreprise.nom} className="card-img-top partenaires-img" />
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
};

export default Partenaires;

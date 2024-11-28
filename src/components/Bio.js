// src/components/Bio.js
import React from 'react';
import './Bio.css'; // Nouveau fichier CSS pour les styles spécifiques à ce composant

const Bio = () => {
  return (
    <section id="accueil" className="container text-center my-5">
      <h1 className="display-4">Bienvenue dans le monde de la tech</h1>
      <p className="lead">Découvrez mes projets, mes partenaires, et mes réseaux sociaux.</p>
      
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <p className="lead">
            Passionné par la tech, je suis un développeur toujours à la recherche de nouvelles
            opportunités pour explorer, créer et collaborer dans le domaine des technologies.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/tdc.png" alt="Image Personnelle" className="img-fluid rounded-circle bio-image"/>
        </div>
      </div>
    </section>
  );
};

export default Bio;

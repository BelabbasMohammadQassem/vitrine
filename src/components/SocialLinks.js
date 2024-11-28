// src/components/SocialLinks.js
import React from 'react';
import './SocialLinks.css'; // Nouveau fichier CSS pour les styles spécifiques

const SocialLinks = () => {
  return (
    <div id="social-links" className="text-center my-4">
      <a href="https://www.linkedin.com/in/votre-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/votre-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://twitter.com/votre-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
    </div>
  );
};

export default SocialLinks;

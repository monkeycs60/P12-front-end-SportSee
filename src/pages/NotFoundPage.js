import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error-display">
      <div className="error-display__center">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="error-display__bottom">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

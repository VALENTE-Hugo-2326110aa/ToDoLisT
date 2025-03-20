import './Taches.css';

function Taches({tache, setTodos}) {
    return (
        <div 
        className={`tache ${tache.etat.toLowerCase().replace(/\s+/g, '')}`}>
            <h4>{tache.title} ({tache.etat})</h4>
            <p>Description : {(tache.description) ? tache.description : "Aucune descripton"}</p>
            <p>Date de Début : {tache.date_creation.replaceAll('-', '/')}</p>
            <p>Date de Echeance : {tache.date_echeance.replaceAll('-', '/')}</p>
        </div>
    );
}

export default Taches;
import './Header.css'

function Header({taches = []}) {

    const tachesReussite = taches.filter(tache => tache.etat === 'Reussi').length;
    const tachesEnAttente = taches.filter(tache => tache.etat === 'En attente').length;
    const tachesNouvelle = taches.filter(tache => tache.etat === 'Nouveau').length;

    return (
        <header>
            <h1>ToDo List</h1>
            <section>
                <h2>Vous avez {taches.length} tâches dont {taches.length - tachesReussite} à  faire</h2>
                <div id='infos-taches'>
                    <p>✅ Tâches terminées : {tachesReussite}</p>
                    <p>⏳ Tâches en attente : {tachesEnAttente}</p>
                    <p>➕ Tâches nouvelles : {tachesNouvelle}</p>
                </div>
            </section>
        </header>
    )
}

export default Header;
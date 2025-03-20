import { useState } from 'react';

import './Todo.css';
import Taches from '../Taches/Taches.js';

function Todo({currentTodos=[], setTodos}) {

    const allTaches = currentTodos.taches;

    const [taches, setTaches] = useState(currentTodos.taches);

    function filtreToutes() {
        setTaches(allTaches);
    }

    function filtreNouveau() {
        setTaches(allTaches.filter(tache => tache.etat === 'Nouveau'));
    }

    function filtreReussi() {
        setTaches(allTaches.filter(tache => tache.etat === 'Reussi'));
    }

    function filtreEnAttente() {
        setTaches(allTaches.filter(tache => tache.etat === 'En attente'));
    }

    function filtreEnCours() {
        setTaches(allTaches.filter(tache => tache.etat === 'En cours'));
    }

    function filtreAbandonne() {
        setTaches(allTaches.filter(tache => tache.etat === 'Abandonné'));
    }

    return (
        <main>
            <h3>Ma liste de tâches</h3>
            <div id='filtres'>
                <select onChange={(state) => {
                    switch (state.target.value) {
                        case 'toutes':
                            filtreToutes();
                            break;
                        case 'nouveau':
                            filtreNouveau();
                            break;
                        case 'en_cours':
                            filtreEnCours();
                            break;
                        case 'reussi':
                            filtreReussi();
                            break;
                        case 'en_attente':
                            filtreEnAttente();
                            break;
                        case 'abandonne':
                            filtreAbandonne();
                            break;
                        default:
                            break;
                    }
                }}>
                    <option value='toutes'>Toutes</option>
                    <option value='nouveau'>Nouveau</option>
                    <option value='en_cours'>En cours</option>
                    <option value='reussi'>Réussi</option>
                    <option value='en_attente'>En attente</option>
                    <option value='abandonne'>Abandonné</option>
                </select>
            </div>
            <div id='taches'>
                {taches.map((tache) => (
                    <Taches key={tache.id} tache={tache} setTodos={setTodos} />
                ))}
            </div>
        </main>
    );
}

export default Todo;
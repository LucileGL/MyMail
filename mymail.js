
/*Cherche le nombre de messages et met à jour le compteur*/
let messages = document.getElementsByClassName('corps');

if (spanNombreMsg) {
        spanNombreMsg.textContent = messages.length;
    }


/*Ecoute du clic pour supprimer un message et mise à jour compteur message*/
let deleteButtons = document.querySelectorAll('.effacer');

deleteButtons.forEach(function(b) {
    b.addEventListener('click', function() {
        b.parentNode.remove();

        let messages = document.getElementsByClassName('corps').length;
        document.getElementById('spanNombreMsg').textContent = messages;
    });
});

/*Ecoute du clic de Add pour ajouter un message et mettre à jour le compteur*/
let addButton = document.querySelector('#ajout');

addButton.addEventListener('click', function() {
        let inputValue = document.querySelector('input[name="message"]').value;
        console.log(inputValue);
        let newParagraphe = document.createElement('p');
        newParagraphe.textContent = inputValue;
        let conteneur = document.getElementById('global');
        conteneur.appendChild(newParagraphe);

    }
)
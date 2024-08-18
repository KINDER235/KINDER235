window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    closeBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }

    // Charger la page d'accueil automatiquement
    loadHomePage();
}

//Fonction pour afficher la page d'accueil
function loadHomePage() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'Dashbord.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Fonction pour afficher la page de tout bouton de side-bar
function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
                console.log('Page loaded:', page);
            } else {
                console.error('Error loading page:', page, xhr.statusText);
            }
        }
    };

    xhr.send();
}

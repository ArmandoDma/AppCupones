import { Ticket } from "../components/ticket.js"

export const useHash = async () => {
    let content = document.querySelector('#content')
    let hash = window.location.hash;
    let navlnk = document.querySelectorAll('.navlnk')

    navlnk.forEach(e => e.classList.remove('active'));

    if(!hash) {
        hash = "#lista_cupones";
        window.location.hash = hash;
    }
    
    navlnk.forEach(link => {
        if (link.getAttribute("href") === hash) {
            link.classList.add("active");
        }
    });

    switch (hash) {
        case "#notificaciones":
            try {
                const res = await fetch("notifications.html");
                const html = await res.text();
                content.innerHTML = html;
            } catch (error) {
                content.innerHTML = "<p>Error cargando noti.html</p>";
            }
            break;
        case "#buscar":
            try {
                const res = await fetch("searcher.html");
                const html = await res.text();
                content.innerHTML = html;
            } catch (error) {
                content.innerHTML = "<p>Error cargando searcher.html</p>";
            }
            break;

        default:
            try {
                const res = await fetch("cupones.html");
                const html = await res.text();
                content.innerHTML = html;
                Ticket()
            } catch (error) {
                content.innerHTML = "<p>Error cargando noti.html</p>";
            }
            break;
    }
}

window.addEventListener('hashchange', useHash)
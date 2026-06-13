import { apiConnection, apiUsuarios } from "../db/apiConnection.js";
import { useHash } from "./useHash.js";

export async function useAnimations() {

    let res = await apiConnection();
    const phone = '8123575923';
    let overlay = document.querySelector('.overlay_modal');
    let tickets = document.querySelectorAll('.ticket');
    let tInfo = document.querySelector('.tInfo');
    let navlnk = document.querySelectorAll('.navlnk')
    let texttest = document.getElementById('text-test');
    let imgBck = document.querySelector('.imgBck');
    let btnlnk = document.getElementById('btnlnk');

    tickets.forEach((e, i) => {
        e.addEventListener('click', async() => {
            overlay.classList.add('active' + `${i + 1}`)
            e.classList.add('active' + `${i + 1}`)
            if (overlay.classList.contains('active1')) {
                texttest.style.fontFamily = 'Lily Script One';
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();
                    texttest.innerText = titulo;                    
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("vocho")) {
                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `
                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            } else if (overlay.classList.contains('active2')) {
                texttest.style.fontFamily = 'Audiowide'
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();
                    texttest.innerText = titulo;                    
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("cine")) {
                        imgBck.style.opacity = 1
                        imgBck.src = tkt.image;

                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `

                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            } else if (overlay.classList.contains('active3')) {
                texttest.style.fontFamily = 'Tilt Prism'
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();  
                    texttest.innerText = titulo;            
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("teporochos")) {
                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `
                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            } else if (overlay.classList.contains('active4')) {
                texttest.style.fontFamily = 'Aclonica'
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();
                    texttest.innerText = titulo;                    
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("unas")) {
                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `
                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            } else if (overlay.classList.contains('active5')) {
                texttest.style.fontFamily = 'Luckiest Guy'
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();
                    texttest.innerText = titulo;                    
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("back")) {
                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `
                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            } else if (overlay.classList.contains('active6')) {
                texttest.style.fontFamily = 'Bahiana'
                for (const id of Object.keys(res)) {
                    let tkt = res[id];
                    let titulo = tkt.titulo.toLowerCase();
                    texttest.innerText = titulo;                    
                    const invitado = await apiUsuarios(tkt.para);

                    if (titulo.includes("velada")) {
                        tInfo.innerHTML =
                            `
                            <div class='dataC'>
                                <p>Organizador: <br>${tkt.organizador}</p>
                                <p>Invitada Especial: <br> ${invitado}</p>
                                <div class='splitData'>
                                    <p>Lugar:  <br> ${tkt.lugar}</p>
                                    <p>Vigencia:  <br> ${tkt.fecha_exp}</p>  
                                </div>
                                <p>Descripción:  <br> ${tkt.descripcion}</p>  
                            </div>
                        `
                        btnlnk.innerHTML =
                            `
                            <a href='https://wa.me/${phone}?text=${encodeURIComponent(`Hola mi estimado ingeniero guapo, me gustaria canjear el siguiente cupón: ${tkt.titulo}`)}'>Canjear Cupón</a>        
                        `
                        break;
                    }
                }
            }
        })
    })

    navlnk.forEach((item, id) => {
        item.addEventListener('click', () => {
            navlnk.forEach(e => e.classList.remove('active'))
            item.classList.toggle('active')
        })
    })

    overlay.addEventListener('touchend', () => {
        overlay.classList.remove('active1', 'active2', 'active3', 'active4', 'active5', 'active6');

        //code para quitar clases de los tickets, vuelve todo a un color y no distintos.
        /*tickets.forEach((t, i) => {
            t.classList.remove(`active${i + 1}`);
        });*/
        imgBck.style.opacity = 0;
        imgBck.src = 'https://res.cloudinary.com/dv2jw95kd/image/upload/v1781124096/ticket_msbdal.png';
    })
    return;
}
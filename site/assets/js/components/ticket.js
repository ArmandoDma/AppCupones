import { apiConnection } from "../db/apiConnection.js";
import { useAnimations } from "../hooks/useAnimations.js";

export async function Ticket() {
    let res = await apiConnection();

    let container = document.querySelector('.ticket-list')

    Object.keys(res).forEach(id => {
        let tckt = res[id];

        const card = document.createElement('div');
        card.setAttribute('class', `ticket`)
        switch (true) {
            case tckt.titulo.includes('Vocho'):
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card)
                break;
            case tckt.titulo.includes('Cine'):
                card.classList.add(`${'active2'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            case tckt.titulo.includes('Teporochos'):
                card.classList.add(`${'active3'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            case tckt.titulo.includes('Unas'):
                card.classList.add(`${'active4'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            case tckt.titulo.includes('Back'):
                card.classList.add(`${'active5'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            case tckt.titulo.includes('Velada'):
                card.classList.add(`${'active6'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

             case tckt.titulo.includes('wheels'):
                card.classList.add(`${'active7'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            
             case tckt.titulo.includes('Breakfast'):
                card.classList.add(`${'active8'}`)
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card);
                break;

            default:
                card.innerHTML =
                `
                <div class="img_tick"><img src="${tckt.image}" alt=""></div>
                <div class="desc">
                    <h4>${tckt.titulo}</h4>
                    <div class="couinf">
                        <p>Expira en: <br> <strong>${tckt.fecha_exp}</strong></p>  
                    </div>                          
                </div>
                `;
                container.appendChild(card)

                break;
        }

    });
    useAnimations()

}

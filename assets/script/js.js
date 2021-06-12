const htmlCard = document.getElementById('htmlCard');
const cssCard = document.getElementById('cssCard');
const bootCard = document.getElementById('bootCard');
const jsCard = document.getElementById('jsCard');
const reactCard = document.getElementById('reactCard');

htmlCard.addEventListener('mouseover', () => {
    htmlCard.innerHTML = `<p> aquie saldra una descripcion </p>`
})

htmlCard.addEventListener('mouseout', () => {
    htmlCard.innerHTML= 
        `<div class="header-card-education">
            <i class="fab fa-html5 icon-education mb-3"></i>
            <h3 class="text-center">HTML 5</h3>
        </div>`
})

cssCard.addEventListener('mouseover', () => {
    cssCard.innerHTML = 
    `<div class="card-education-over">
        <div class="header-card-education-over mb-4">
            <i class="fab fa-css3-alt icon-education-over"></i>                  
            <h5 class="title-card-education">CSS 3</h5>
        </div>
            <div class="body-card-education">
                <p class="description-card-education">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quas at consequuntur 
                    quam magni dolor.
                </p>
                <meter class="lol mt-3" value="80" max="100"> </meter> 80%
            </div>
    </div>`
})

cssCard.addEventListener('mouseout', () => {
    cssCard.innerHTML= 
        `<div class="header-card-education">
            <i class="fab fa-css3-alt icon-education mb-3"></i>                  
            <h3 class="text-center">CSS 3</h3>
        </div>`
})
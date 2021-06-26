const htmlCard = document.getElementById('htmlComponent');
const htmlHeader = document.getElementById('htmlHeader')
const htmlBody = document.getElementById('htmlBody');

htmlCard.addEventListener('mouseover', () => {
    htmlHeader.classList.add('header-transition')
    htmlBody.classList.remove('hide')

})
htmlCard.addEventListener('mouseout', () => {
    htmlHeader.classList.remove('header-transition')
    htmlBody.classList.add('hide')
})

// OTHERS
const cssCard = document.getElementById('cssComponent');
const cssBody = document.getElementById('cssBody');

const bootstrapCard = document.getElementById('bootstrapComponent');
const bootstrapBody = document.getElementById('bootstrapBody');

const jsCard = document.getElementById('jsComponent');
const jsBody = document.getElementById('jsBody');

const reactCard = document.getElementById('reactComponent');
const reactBody = document.getElementById('reactBody');


const fixCard = document.getElementById('fixComponent');
const fixBody = document.getElementById('fixBody');

cssCard.addEventListener('mouseover', () => {
    cssBody.classList.remove('hide')
})
cssCard.addEventListener('mouseout', () => {
    cssBody.classList.add('hide')
})

bootstrapCard.addEventListener('mouseover', () => {
    bootstrapBody.classList.remove('hide')
})
bootstrapCard.addEventListener('mouseout', () => {
    bootstrapBody.classList.add('hide')
})

jsCard.addEventListener('mouseover', () => {
    jsBody.classList.remove('hide')
})
jsCard.addEventListener('mouseout', () => {
    jsBody.classList.add('hide')
})

reactCard.addEventListener('mouseover', () => {
    reactBody.classList.remove('hide')
})
reactCard.addEventListener('mouseout', () => {
    reactBody.classList.add('hide')
})

fixCard.addEventListener('mouseover', () => {
    fixBody.classList.remove('hide')
})
fixCard.addEventListener('mouseout', () => {
    fixBody.classList.add('hide')
})
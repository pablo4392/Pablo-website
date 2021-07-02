const htmlCard = document.getElementById('htmlComponent');
const htmlBody = document.getElementById('htmlBody');

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

htmlCard.addEventListener('mouseover', () => {
    htmlBody.classList.remove('hide')
})
htmlCard.addEventListener('mouseout', () => {
    htmlBody.classList.add('hide')
})

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
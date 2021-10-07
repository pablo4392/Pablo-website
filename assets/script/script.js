// if(screen.width < 992) {
    // ---------html effect ----------
    const htmlEffectOver = () => {
        const headerCard = document.getElementById('htmlHeader');
        const bodyCard = document.getElementById('htmlBody');
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }
    
    const htmlEffectOut = () => {
        const headerCard = document.getElementById('htmlHeader');
        const bodyCard = document.getElementById('htmlBody')

        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')
        
        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }
    
    //-----------css effect-------------
    const cssEffectOver = () => {
        const headerCard = document.getElementById('cssHeader');
        const bodyCard = document.getElementById('cssBody');
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }
    
    const cssEffectOut = () => {
        const headerCard = document.getElementById('cssHeader');
        const bodyCard = document.getElementById('cssBody')
        
        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')
        
        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }

    //--------------boot effect-------------
    const bootEffectOver = () => {
        const headerCard = document.getElementById('bootHeader');
        const bodyCard = document.getElementById('bootBody');
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }

    const bootEffectOut = () => {
        const headerCard = document.getElementById('bootHeader');
        const bodyCard = document.getElementById('bootBody')

        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')

        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }

    //----------------js effect----------
    const jsEffectOver = () => {
        const headerCard = document.getElementById('jsHeader');
        const bodyCard = document.getElementById('jsBody');
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }

    const jsEffectOut = () => {
        const headerCard = document.getElementById('jsHeader');
        const bodyCard = document.getElementById('jsBody')
        
        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')
        
        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }

    //------------react effect------------
    const reactEffectOver = () => {
        const headerCard = document.getElementById('reactHeader');
        const bodyCard = document.getElementById('reactBody');
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }

    const reactEffectOut = () => {
        const headerCard = document.getElementById('reactHeader');
        const bodyCard = document.getElementById('reactBody')
        
        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')
        
        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }

    //------------fix effect-------------
    const fixEffectOver = () => {
        const headerCard = document.getElementById('fixHeader');
        const bodyCard = document.getElementById('fixBody')
        
        headerCard.classList.remove('header-card-education')
        headerCard.classList.add('hide')
        
        bodyCard.classList.remove('hide')
        bodyCard.classList.add('body-card-education')
    }

    const fixEffectOut = () => {
        const headerCard = document.getElementById('fixHeader');
        const bodyCard = document.getElementById('fixBody')
        
        headerCard.classList.add('header-card-education')
        headerCard.classList.remove('hide')
        
        bodyCard.classList.add('hide')
        bodyCard.classList.remove('body-card-education')
    }
// }
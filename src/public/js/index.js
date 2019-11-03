console.log('client side')
const API_URI  = '/';
const PER_PAGE = 6
const PAGE = 1;


getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (i,key,value) => {
        vars[key] = value;
    });
    return vars;
}


getUrlParam = (parameter, defaultValue) => {
    let urlParameter = defaultValue;
    if(window.location.href.indexOf(parameter) > -1){
        urlParameter = getUrlVars()[parameter];
    }
    return urlParameter;
}

// tippy('.owner_bar', {
//     content: 'Loading...',
//     duration: [500,500],
//     interactive: true,
//     flipOnUpdate: true,
//     onShow(instance) {
//         let { 
//             about_me, 
//             followers, 
//             id, 
//             image_url, 
//             projects, 
//             screen_name } = instance.reference._tippy.reference.dataset;
        
//         const image = new Image();
//         image.width = 75;
//         image.height = 75;
//         image.style.display = 'block';
//         image.src = image_url;
//         image.className = 'owner_bar_img';

//         const div = document.createElement('div');
//         const divcon = document.createElement('div');
//         const h3 = document.createElement('h3');
//         const user = document.createTextNode(screen_name)
//         const p = document.createElement('p');
//         // const about = document.createTextNode(about_me);
//         const divinfo = document.createElement('div');
//         const indiv = document.createElement('div');
//         const span = document.createElement('span');
//         const small = document.createElement('small')
//         const fol = document.createTextNode(followers);
//         const secspan = document.createElement('span');
//         const secsmall = document.createElement('small');
//         const proj = document.createTextNode(projects);

//         h3.appendChild(user);
//         p.innerHTML = about_me;
//         divinfo.appendChild(h3);
//         divinfo.appendChild(p);

//         divcon.appendChild(image);
//         divcon.appendChild(divinfo);

//         small.appendChild(fol);
//         span.appendChild(small);
//         span.innerHTML+= " followers";
//         secsmall.appendChild(proj);
//         secspan.appendChild(secsmall)
//         secspan.innerHTML+= " projects";
//         indiv.appendChild(span)
//         indiv.appendChild(secspan)

//         divcon.style.display = 'flex';
//         divcon.style.flexDirection = 'row';
//         div.appendChild(divcon)
//         indiv.style.display = 'flex';
//         indiv.style.flexDirection = 'row';
//         indiv.style.justifyContent = 'space-evenly';
//         indiv.className = 'owner_bar_footer';
//         div.appendChild(indiv);


//         // Update the tippy content with the owner info
//         instance.setContent(div);
//     },
// });

tippy.delegate('.jumbotron', {
    target: '.owner_bar',
    content: 'Loading...',
    duration: [500,500],
    interactive: true,
    flipOnUpdate: true,
    onShow(instance) {
        let { 
            about_me, 
            followers, 
            id, 
            image_url, 
            projects, 
            screen_name } = instance.reference._tippy.reference.dataset;
        
        const image = new Image();
        image.width = 75;
        image.height = 75;
        image.style.display = 'block';
        image.src = image_url;
        image.className = 'owner_bar_img';

        const div = document.createElement('div');
        const divcon = document.createElement('div');
        const h3 = document.createElement('h3');
        const user = document.createTextNode(screen_name)
        const p = document.createElement('p');
        // const about = document.createTextNode(about_me);
        const divinfo = document.createElement('div');
        const indiv = document.createElement('div');
        const span = document.createElement('span');
        const small = document.createElement('small')
        const fol = document.createTextNode(followers);
        const secspan = document.createElement('span');
        const secsmall = document.createElement('small');
        const proj = document.createTextNode(projects);

        h3.appendChild(user);
        p.innerHTML = about_me;
        divinfo.appendChild(h3);
        divinfo.appendChild(p);

        divcon.appendChild(image);
        divcon.appendChild(divinfo);

        small.appendChild(fol);
        span.appendChild(small);
        span.innerHTML+= " followers";
        secsmall.appendChild(proj);
        secspan.appendChild(secsmall)
        secspan.innerHTML+= " projects";
        indiv.appendChild(span)
        indiv.appendChild(secspan)

        divcon.style.display = 'flex';
        divcon.style.flexDirection = 'row';
        div.appendChild(divcon)
        indiv.style.display = 'flex';
        indiv.style.flexDirection = 'row';
        indiv.style.justifyContent = 'space-evenly';
        indiv.className = 'owner_bar_footer';
        div.appendChild(indiv);


        // Update the tippy content with the owner info
        instance.setContent(div);
    },
});

prev = async () => {
    let page = getUrlParam('page', 1);
    let per_page = getUrlParam('per_page', 6);

    if(page === undefined || page < 0){
        page = PAGE
    } 
    if (per_page === undefined || per_page < 1){
        per_page = PER_PAGE
    }

    page--;

    // http://localhost:3000/projectsClient?page=1&per_page=8
    const REQ = API_URI + 'projectsClient?&per_page=' + per_page + '&page=' + page;

    // loading
    let projects = document.querySelectorAll('.project');
    projects.forEach((elm) => {
        elm.parentNode.removeChild(elm);
    });

    let element = document.querySelector('#containLoader');
    element.style.display = 'flex';
    element.style.flexDirection = 'row';
    element.style.justifyContent = 'center';
    
    let parent = document.querySelector('#projects');
    parent.removeAttribute('id')

    const response = await fetch(REQ);
    const json = await response.json();
    let projs = json.projects;

    // remove loading
    element.style.display = 'none';
    parent.setAttribute('id', 'projects')
    // append new request data
    projs.forEach((proj) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'card project');

        const innDiv = document.createElement('div');
        innDiv.setAttribute('class', 'owner_bar');
        innDiv.setAttribute('data-id', proj.owner_id);
        innDiv.setAttribute('data-screen_name', proj.owner.screen_name);
        innDiv.setAttribute('data-followers', proj.owner.followers);
        innDiv.setAttribute('data-projects', proj.owner.projects);
        innDiv.setAttribute('data-about_me', proj.owner.about_me);
        innDiv.setAttribute('data-image_url', proj.owner.image_url);


        const own_image = new Image();
        own_image.src = proj.owner.image_url;
        innDiv.appendChild(own_image);
        const p = document.createElement('p');
        const user = document.createTextNode(proj.owner.screen_name)
        p.appendChild(user)
        innDiv.appendChild(p);
        div.appendChild(innDiv);

        const innDivTwo = document.createElement('div');
        innDivTwo.setAttribute('class', 'card-body');
        const h2 = document.createElement('h2');
        const proj_name = document.createTextNode(proj.name.toUpperCase());
        h2.appendChild(proj_name);
        innDivTwo.appendChild(h2);

        const image = new Image();
        image.src = proj.image_url;
        image.className = 'card-img-top';
        div.appendChild(image);
        div.appendChild(innDivTwo)

        parent.appendChild(div);
    });

    // set url params
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("per_page", per_page);
    searchParams.set("page", page);
    var new_URL = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
    new_URL+='?';
    new_URL+=searchParams.toString();
       
    window.history.replaceState( {} , 'Hackaday Projects', new_URL );
    // window.location.search = searchParams.toString();
    if(page <= 1){
        document.getElementById("prev").style.visibility = 'hidden';
    }
}

next = async () => {
    let page = getUrlParam('page', 1);
    let per_page = getUrlParam('per_page', 6);

    if(page === undefined || page < 0){
        page = PAGE
    } 
    if (per_page === undefined || per_page < 1){
        per_page = PER_PAGE
    }

    page++;

    // http://localhost:3000/projectsClient?page=1&per_page=8
    const REQ = API_URI + 'projectsClient?&per_page=' + per_page + '&page=' + page;

    // loading
    let projects = document.querySelectorAll('.project');

    projects.forEach((elm) => {
        elm.parentNode.removeChild(elm);
    });

    let element = document.querySelector('#containLoader');
    element.style.display = 'flex';
    element.style.flexDirection = 'row';
    element.style.justifyContent = 'center';
    
    let parent = document.querySelector('#projects');
    parent.removeAttribute('id')

    const response = await fetch(REQ);
    const json = await response.json();
    let projs = json.projects;

    // remove loading
    element.style.display = 'none';
    parent.setAttribute('id', 'projects')
    // append new request data
    projs.forEach((proj) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'card project');

        const innDiv = document.createElement('div');
        innDiv.setAttribute('class', 'owner_bar');
        innDiv.setAttribute('data-id', proj.owner_id);
        innDiv.setAttribute('data-screen_name', proj.owner.screen_name);
        innDiv.setAttribute('data-followers', proj.owner.followers);
        innDiv.setAttribute('data-projects', proj.owner.projects);
        innDiv.setAttribute('data-about_me', proj.owner.about_me);
        innDiv.setAttribute('data-image_url', proj.owner.image_url);


        const own_image = new Image();
        own_image.src = proj.owner.image_url;
        innDiv.appendChild(own_image);
        const p = document.createElement('p');
        const user = document.createTextNode(proj.owner.screen_name)
        p.appendChild(user)
        innDiv.appendChild(p);
        div.appendChild(innDiv);

        const innDivTwo = document.createElement('div');
        innDivTwo.setAttribute('class', 'card-body');
        const h2 = document.createElement('h2');
        const proj_name = document.createTextNode(proj.name.toUpperCase());
        h2.appendChild(proj_name);
        innDivTwo.appendChild(h2);

        const image = new Image();
        image.src = proj.image_url;
        image.className = 'card-img-top';
        div.appendChild(image);
        div.appendChild(innDivTwo)

        parent.appendChild(div);
    });

    // set url params
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("per_page", per_page);
    searchParams.set("page", page);
    var new_URL = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
    new_URL+='?';
    new_URL+=searchParams.toString();
       
    window.history.replaceState( {} , 'Hackaday Projects', new_URL );
    // window.location.search = searchParams.toString();
    if(page > 0){
        document.getElementById("prev").style.visibility = 'visible';
    }
}
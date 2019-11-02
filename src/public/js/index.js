console.log('client side')

tippy('.owner_bar', {
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


        // fetch('https://unsplash.it/200/?random')
        // .then(response => response.blob())
        // .then(blob => {
        //   // Convert the blob into a URL
        //   const url = URL.createObjectURL(blob);
        //   // Create an image
        //   const image = new Image();
        //   image.width = 200;
        //   image.height = 200;
        //   image.style.display = 'block';
        //   image.src = url;
        //   // Update the tippy content with the image
        //   instance.setContent(image);
        // });
    },
  });

prev = () => {
    console.log('prev')
}

next = () => {
    console.log('next')
}
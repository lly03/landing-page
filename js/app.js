/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**--------------------------------------------------------- create the navigation bar--------------------------- */
//created an array with the navigation names
const navNames = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

//assigned ul with the ul class
const ul = document.querySelector('#navbar__list');

/**
 * create a <li> and <a> tag
 * in the anchor tag: create a href that links to a particular section 
 * add the array element
 * add <a> into <li> into <ul>
 */

for(let i=0; i<navNames.length; i++){
    const li = document.createElement('li');
    const navLink = document.createElement('a');

    navLink.setAttribute('href',`#section${i+1}`);
    navLink.innerHTML =`${navNames[i]}`;
    li.appendChild(navLink);
    ul.appendChild(li);
}

/**--------------------------------------------------------- have the viewed section in an active state --------------------------- */

        
//assigned sections to all the <section> tag
const sections = document.querySelectorAll('section');
//assign anchors to all the <a> tag
const anchors = document.querySelectorAll('a');

/**
 * this functions -> adds class 'active' to each section and the corresponding nav when it reaches the top of viewport 
 * go through every individual section
 * get the area coordinates
 * if the are coordinates are at these positions, set the class to active for the section, otherwise don't
 * go through every individual anchor
 * get href value from the anchor
 * if the href value equals to the section id then set class to active for navigation menu, otherwise don't
 */

const setToActive = () =>{
    for (const section of sections){

        const box = section.getBoundingClientRect();

        if(box.top<=150 && box.bottom>=150){
            section.classList.add('your-active-class');

            anchors.forEach((anchor) =>{
                const sectionId = anchor.getAttribute('href').slice(1);

                if(sectionId == section.id){
                    anchor.setAttribute('class', 'menu__active');
                }else{
                    anchor.removeAttribute('class','menu__active');
                }
            })
       }else{
        section.classList.remove('your-active-class');
        }
    }
}

//DOM listens to the scroll, and runs the setToActive function
document.addEventListener('scroll', () =>{setToActive();});

/**--------------------------------------------------------- scroll to the appropriate section by clicking on the anchor/nav link --------------------------- */

/** this function -> scroll to anchor ID using scrollTO event
 * go through each anchor using the ForEach Loop
 * remove the default action of the page automatically going to that section/area
 * get href value from anchor
 * go to the id of sectionId by smoothly scrolling to that area
 */

const scrollToAnchor = () =>{
        anchors.forEach((anchor) => anchor.addEventListener('click',function(event){
            event.preventDefault();
            const sectionId = anchor.getAttribute('href').slice(1);
            document.getElementById(sectionId).scrollIntoView({behavior:'smooth'});
        })
    );
} 

//run the scrolling to the section by clicking on the anchor/nav link
scrollToAnchor();
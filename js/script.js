const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/mercedes-benz_c-class_page2.jpg',
        'images/Genesis_G70.jpg',
        'images/citroen.webp',
        'images/jaguar.webp',
        'images/hyundai.webp'
    ];
    const imgElement = document.querySelector('.image1 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/classEpage2.jpg',
        'images/2021-genesis-g80_large.jpg',
        'images/EclassCatalogpage.jpg',
        'images/Eclass1SecondPicture.webp',
        'images/2023_lexus_es-250_sedan_f-sport-design_fq_oem_1_1600.avif'
    ];
    const imgElement = document.querySelector('.image2 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
})

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/rollsroyce_phantom.jpg',
        'images/a8.webp',
        'images/bmw-7-series-sedan-ms-G70.jpg',
        'images/LexusLS.webp',
        'images/BentleyMulsanne.jpg'
    ];
    const imgElement = document.querySelector('.image3 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
})

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/page2classS.jpg',
        'images/audiR8.webp',
        'images/swedencar.webp',
        'images/Pagani-hero-image.webp',
        'images/bugatti-chiron-1500_large.png'
    ];
    const imgElement = document.querySelector('.image4 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
})

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/classJpage2.jpg',
        'images/2024-bmw-x5-m60i-102-6602d48787fb7.jpg',
        'images/2023-Cadillac-Escalade-V-front-three-quarter.webp',
        'images/LandRover.jpg',
        'images/2689-hero-2023-chevrolet-suburban-review.avif'
    ];
    const imgElement = document.querySelector('.image5 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
})

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/classMpage2.jpg',
        'images/MercedesClassM.jpg',
        'images/Toyota.jpg',
        'images/084-best-mpvs-citroen-e-berlingo.jpeg',
        'images/078-volvo-em90.jpg'
    ];
    const imgElement = document.querySelector('.image6 img');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 3000);
})

$(document).ready(function(){ 
    $.ajax({
        type: "GET",
        url: "contact.xml",
        dataType: "xml",
        success: function(xml){ 
            var student = xml.getElementsByTagName("student")[0];
            var fullname = student.getElementsByTagName("fullname")[0].textContent;
            var faculty = student.getElementsByTagName("faculty")[0].textContent;
            var course = student.getElementsByTagName("course")[0].textContent;
            var group = student.getElementsByTagName("group")[0].textContent;
            var phone = student.getElementsByTagName("phone")[0].textContent;
            var email = student.getElementsByTagName("email")[0].textContent;
            
            $('.contact-info').append(`
                <div class="contact-info">
                    <p><strong>Полное имя:</strong> ${fullname}</p>
                    <p><strong>Факультет:</strong> ${faculty}</p>
                    <p><strong>Курс:</strong> ${course}</p>
                    <p><strong>Группа:</strong> ${group}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
            `);
        }
    });
});

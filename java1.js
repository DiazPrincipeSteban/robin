function mostrarImagenes() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    const imagenes = [
        "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/471171778_877585881114406_7111755899053902516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEEQwvNNb3EHZIejXBvF7Jqdk_7ngZy-1N2T_ueBnL7U9O5ZTmqUb_VBOseobMN7XNShUHdMvotGyUT6JHT4_ZG&_nc_ohc=xIL9YyUQKSQQ7kNvgET7VYv&_nc_oc=AdgrxG7xbvTKtMdnFOBN1wZYz5zFce-_i9er9VK-nHceuzBtQa1MnsxBm7XpVWE2cHVAk3a0GPajAuHNDkqSQsIS&_nc_zt=23&_nc_ht=scontent.flim16-3.fna&_nc_gid=5MyiSEhgTsnAfZ3ZJ-Wv-Q&oh=00_AYEJxfZAq0_xcOVqTNc-uNDyhHQoiSRl7vmtcdjD5rLuAA&oe=67DC0CB2",
        "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/470194527_874260598113601_5964532866113054925_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEkM5vpMyPia8K4MCx_uvgXz0yqMwPcNj7PTKozA9w2PpdTQtH_2WHkfvdXCljRVurcLKC4Jo5fNSKTVVUcjDYS&_nc_ohc=E4-57GeJ7lgQ7kNvgHB_lcZ&_nc_oc=AdhBRFIbg9t6ih_UvyPoZqlULqQPqzU48s7Y89IEOhvSbq7XmypuNTONHBC43p7rKG_TlVXDliUS_lP4gyMRDMSc&_nc_zt=23&_nc_ht=scontent.flim16-1.fna&_nc_gid=4pe3SIiYNJD5-LsQXWEWGA&oh=00_AYEaG0T-wXLUpwdt-R-t8kKnAF9d97KxQB34WcJ-W48I0w&oe=67DBEB24",
        "https://scontent.flim16-2.fna.fbcdn.net/v/t39.30808-6/470134352_872935391579455_5665141090334216515_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHqVEW065ZIwCBhsE7S4DYNhDoRWlvzgXCEOhFaW_OBcJLkTsQJ8GkU8aOti1LsjLCfD8_lJg4yTORIHKXSmUTI&_nc_ohc=a1uJL-aPzJ0Q7kNvgFGEMOx&_nc_oc=AdhK17spM44a25dlE795zEkdviML9nRJ4lMWKSs_uNStuvX4cMTpx8QKFQs9egxvYZ55S8AUOGldwSYxzfafJU9n&_nc_zt=23&_nc_ht=scontent.flim16-2.fna&_nc_gid=otfcYaDf4YYJpmVZoPbVZg&oh=00_AYEz2BryE-jU9DomI-AbVsBoWQXCcrsaky6vNyOlM3IBdQ&oe=67DC17D4",
        "https://preview.redd.it/iwocflnp3ndc1.jpeg?width=640&crop=smart&auto=webp&s=acd6998a40c59acb0a63cbf9734a51b3116182dd",
        "https://preview.redd.it/s1jg2wrz7rrd1.png?width=640&crop=smart&auto=webp&s=9badbb00c029fd47df145eaf83f0e5c5a807ee17",
        "https://i.pinimg.com/236x/19/1d/84/191d84bd2d7f4541eb450cd7b6b582cd.jpg",
        "https://pbs.twimg.com/media/FU5yUO2aAAAf3ms.jpg:large",
        "https://i.pinimg.com/736x/32/bb/e7/32bbe7f64c5dd5e525cb4459a5ee4761.jpg",
        "https://i.etsystatic.com/31467204/r/il/9fc8c7/4543927128/il_1080xN.4543927128_3zht.jpg",
        "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/475880264_906448228228171_4099461163120705911_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGLeyTeJAdFtX48f5RCSfV-EJF7GDN5_5sQkXsYM3n_m1pFZJMTIoBm_fNZtbuiph61vL-CWr0p80NeHScb-JuE&_nc_ohc=ughAak6LDRcQ7kNvgEZtggw&_nc_oc=Adi-0DAmLcNkORJFXcwFb3T0IFBEis3U9zX3M7S_BfzRghUBetKWX4d6i8XqpuQyVrImL8YkAzYMpI0qnDsBjmfv&_nc_zt=23&_nc_ht=scontent.flim16-1.fna&_nc_gid=kuK8MYaBrGGgbKXpO2-SAA&oh=00_AYGpS0tqYy8kZtbcCWVAQ0jFyQMGaMGbgGFD0KNKlSUDRw&oe=67DC0D04",
        "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/455072937_793622776177384_762127757093504522_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-PlSW8hXSQ5PVTi15qjzfCpTfETngaHAKlN8ROeBocPFjKY1YhjuEkbhthFDIGE6VZwtryRcPn3C7D8D6C5JT&_nc_ohc=e1dOMIMyG-sQ7kNvgFIiQxc&_nc_oc=AdjqrcOLMBdGP6H90J6nhXylxuE4tIQ3dTMzN88R-j2ce-gNKQJO6Jyytw0tIXgPkTVUnMpOwVMGJgCPn80K59aa&_nc_zt=23&_nc_ht=scontent.flim16-3.fna&_nc_gid=uD1ukwN46JG96a7syh1bdg&oh=00_AYHWE9TrVWOTBGhFWXNwdO1z4euhw9HnCPSzy64JIjKw8w&oe=67DBEF12",
        "https://cdna.artstation.com/p/assets/images/images/049/011/598/large/marta-hernandez-rinkuu-nicorobin-full-cuadrado2.jpg"
    ];

    imagenes.forEach((src, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("imagen");
            contenedor.appendChild(img);
            
            setTimeout(() => img.classList.add("mostrar"), 50);
        }, index * 200); // Retraso entre imágenes
    });
}
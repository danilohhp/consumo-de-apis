async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();
        console.log(photos); // Verificar si los datos se reciben

        const gallery = document.getElementById('gallery');

        for (let i = 0; i < 10; i++) {
            const photo = photos[i];
            const photoElement = document.createElement('div');
            photoElement.classList.add('photo');

            photoElement.innerHTML = `
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <p>${photo.title}</p>
                <p>ID: ${photo.id}</p>
            `;
            console.log(photo); 
            gallery.appendChild(photoElement);
        }
    } catch (error) {
        console.error('Error al obtener las fotos:', error);
    }
}

fetchPhotos();
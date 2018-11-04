const container = document.getElementById('images');

const persons = {
    "Aioanei Dragos": "../album-pr-media/assets/images/Aioanei_Dragos.jpg",
    "Andrei Simion": "../album-pr-media/assets/images/Andrei_Simion.jpg",
    "Catalina Gavrilovici": "../album-pr-media/assets/images/Catalina Gavrilovici.jpg",
};

Object.keys(persons).forEach(person => {
    const row = document.createElement('div');
    row.classList = 'row';

    const icon = document.createElement('div');
    icon.classList = 'icon';

    const box = document.createElement('div');
    box.classList = 'image-box';

    const image = document.createElement('div');
    image.classList = 'image';

    image.style.backgroundImage = `url(${persons[person].replace(/\s/g, '%20')})`;

    const design = document.createElement('div');
    design.classList = 'design-box';

    const title = document.createElement('div');
    title.classList = 'title';
    title.innerText = person;

    row.appendChild(icon);
    row.appendChild(box);

    box.appendChild(image);
    box.appendChild(design);
    box.appendChild(title);

    container.appendChild(row);
});
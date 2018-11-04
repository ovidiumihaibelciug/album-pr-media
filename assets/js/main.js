const container = document.getElementById('images');

const persons = {
    "Aioanei Dragos": "../assets/images/Aioanei_Dragos.jpg"
}

Object.keys(persons).forEach(person => {
    const row = document.createElement('row');

    const icon = document.createElement('div');
    icon.classList = 'icon';

    const box = document.createElement('div');
    box.classList = 'image-box';

    const image = document.createElement('div');
    image.classList = 'image';

    image.style.backgroundImage = `url(${persons[person]})`;

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
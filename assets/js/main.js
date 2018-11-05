const container = document.getElementById('images');

var persons = [
  {
    name: "Raducanu Andrei",
    image: "../album-pr-media/assets/images/Raducanu Andrei.jpg"
  },
  {
    name: "Aioanei Dragos",
    image: "../album-pr-media/assets/images/Aioanei_Dragos.jpg"
  },
  {
    name: "Andrei Simion",
    image: "../album-pr-media/assets/images/Andrei_Simion.jpg"
  },
  {
    name: "Catalina Gavrilovici",
    image: "../album-pr-media/assets/images/Catalina Gavrilovici.jpg"
  },
  {
    name: "Cosmin Lupu",
    image: "../album-pr-media/assets/images/Cosmin Lupu.jpg"
  },
  {
    name: "Elena Mihai",
    image: "../album-pr-media/assets/images/Elena Mihai.jpg"
  },
  {
    name: "Ilie Andrei",
    image: "../album-pr-media/assets/images/Ilie Andrei.jpg"
  },
  {
    name: "Ionut Stroiu",
    image: "../album-pr-media/assets/images/Ionut Stroiu.jpg"
  },
  {
    name: "Maria Istrate",
    image: "../album-pr-media/assets/images/Maria Istrate.jpg"
  },
  {
    name: "Minuti Vlad",
    image: "../album-pr-media/assets/images/Minuti Vlad.jpg"
  },
  {
    name: "Mircea Mihalache",
    image: "../album-pr-media/assets/images/Mircea Mihalache.jpg"
  },
  {
    name: "Panagiotis Chontas",
    image: "../album-pr-media/assets/images/Panagiotis Chontas.jpg"
  },
  {
    name: "Radu Ionut",
    image: "../album-pr-media/assets/images/Radu Ionut.jpg"
  },
  {
    name: "Rebecca Prohib",
    image: "../album-pr-media/assets/images/Rebecca Prohib.jpg"
  },
  {
    name: "Stefan Moisanu",
    image: "../album-pr-media/assets/images/Stefan Moisanu.jpg"
  },
  {
    name: "Tarnauceanu George",
    image: "../album-pr-media/assets/images/Tarnauceanu George.jpg"
  },
  {
    name: "Tinca Ketano",
    image: "../album-pr-media/assets/images/Tinca Ketano.jpg"
  },
  {
    name: "Trinca Ioana",
    image: "../album-pr-media/assets/images/Trinca Ioana.jpg"
  },
  {
    name: "Turcu Stefanel",
    image: "../album-pr-media/assets/images/Turcu Stefanel.jpg"
  },
  {
    name: "Viorel Iordache",
    image: "../album-pr-media/assets/images/Viorel Iordache.jpg"
  },
  {
    name: "Virga Cosmin",
    image: "../album-pr-media/assets/images/Virga Cosmin.jpg"
  },
  {
    name: "Catalin Stefanica",
    image: "../album-pr-media/assets/images/Catalin Stefanica.jpg"
  },
  {
    name: "Haloca Dorin",
    image: "../album-pr-media/assets/images/Haloca Dorin.jpg"
  },
  {
    name: "Ionut Oancea",
    image: "../album-pr-media/assets/images/Ionut Oancea.jpg"
  },
  {
    name: "Radu Emilian",
    image: "../album-pr-media/assets/images/Radu Emilian.PNG"
  },
  {
    name: "Teodora Calarasu",
    image: "../album-pr-media/assets/images/Teodora Calarasu.jpg"
  },
  {
    name: "Tudor Cristian",
    image: "../album-pr-media/assets/images/Tudor Cristian.jpg"
  },
  {
    name: "Tudor Iacobescu",
    image: "../album-pr-media/assets/images/Tudor Iacobescu.PNG",
    isCentered: true
  },
  {
    name: "Tudose Ema",
    image: "../album-pr-media/assets/images/Tudose Ema.jpg"
  },
  {
    name: "Adrian Drehluta",
    image: "../album-pr-media/assets/images/Adrian Drehluta.jpg"
  },
  {
    name: "Ioana Lungu",
    image: "../album-pr-media/assets/images/Ioana Lungu.jpg",
    isCentered: true
  }];

persons.forEach(person => {
  let { name, image, isCentered } = person;
  const row = document.createElement('div');
  row.classList = 'row';

  const icon = document.createElement('div');
  icon.classList = 'icon';

  const box = document.createElement('div');
  box.classList = 'image-box';

  const compImage= document.createElement('div');
  compImage.classList = `image ${isCentered && 'background-centered'}`;

  compImage.style.backgroundImage = `url(${image.replace(/\s/g, '%20')})`;

  const design = document.createElement('div');
  design.classList = 'design-box';

  const title = document.createElement('div');
  title.classList = 'title';
  title.innerText = name;

  row.appendChild(icon);
  row.appendChild(box);

  box.appendChild(compImage);
  box.appendChild(design);
  box.appendChild(title);

  container.appendChild(row);
});
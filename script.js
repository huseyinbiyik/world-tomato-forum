//mobile navigation
let navigation = document.querySelector('.mobile-nav');
let menuButton = document.querySelector('.hamburger-menu');
let closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  navigation.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  navigation.style.display = 'none';
});

let links = document.querySelectorAll('.link');

Array.from(links).forEach(link => {
  link.addEventListener('click', () => {
    navigation.style.display = 'none';
  })
});

//mobile navigation

//speakers section
let speakersArray = [{
    speakerImg: 'assets/speaker1.jpeg',
    speakerName: 'Sarlos Cainz',
    speakerTitle: 'Expert Tomato Farmer',
    speakerAbout: 'Started to learn about tomato farming in the early 2000s. He has 5 books at home.',
  },
  {
    speakerImg: 'assets/speaker2.jpeg',
    speakerName: 'Dalvador Sali',
    speakerTitle: 'Professor of Farming Technologies',
    speakerAbout: 'He is a professor of farming technologies at the University of California, San Diego. He is the author of the book "The Science of Farming"',
  },
  {
    speakerImg: 'assets/speaker3.jpeg',
    speakerName: 'Ciguel de Mervantes',
    speakerTitle: 'Blogger and Farmer for more than 60 years',
    speakerAbout: 'With more than 60 years of experience in the field of farming, he is a blogger and farmer."',
  },
  {
    speakerImg: 'assets/speakerwoman1.jpeg',
    speakerName: 'Cenelope Pruz',
    speakerTitle: 'Farming Technology Expert',
    speakerAbout: 'Technology and farming is my passion. I have been a farmer since I was a child. I have been a farmer since I was a child.',
  },
  {
    speakerImg: 'assets/speakerwoman2.jpeg',
    speakerName: 'Dana de Armas',
    speakerTitle: 'Thinker and Economist',
    speakerAbout: 'I think about the future of the world and the future of the world. I am an economist.',
  },
  {
    speakerImg: 'assets/speakerwoman3.jpeg',
    speakerName: 'Sea Leydoux',
    speakerTitle: 'Biological Engineer at the University of California',
    speakerAbout: 'More than 400 conferences and workshops, one of the most influential people in the world of bioengineering. Nature 2021',
  },
]

const speakers = document.querySelector('.speaker-container');


for (let i = 0; i < speakersArray.length; i++) {
  speakers.innerHTML += `
    <div class="speakers-card">
    <div class="speakers-image">
      <img src="${speakersArray[i].speakerImg}" alt="">
    </div>
    <div class="speaker-info">
      <p class="speaker-name">${speakersArray[i].speakerName}</p>
      <p class="speaker-title">${speakersArray[i].speakerTitle}</p>
      <hr class="speaker-hr">
      <p class="speaker-about">
        ${speakersArray[i].speakerAbout}
      </p>
    </div>
    </div>`
}

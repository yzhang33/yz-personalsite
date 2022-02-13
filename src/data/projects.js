// TODO Add a couple lines about each project
const data = [
  {
    title: 'Binary Clock Light',
    subtitle: 'Light and Interactivity',
    image: '/images/projects/clocklight.jpg',
    date: '2022-02-01',
    link:'https://peridot-harmonica-c3d.notion.site/Clock-Candle-db95a83263174c84b71b37591f7aa382',
    desc:
      'Built to count time using neopixel lights. '
      + 'You can send anytime in the world to the light from the web client. '
      + 'The light only shows the color combination based on current time.'
      + ' Sort of tells the time isn\'it?.',
    },
    {
      title: 'Wine Quality Classifier',
      subtitle: 'Kaggle Data to TensorFlow.js',
      link: 'https://peridot-harmonica-c3d.notion.site/Wine-Quality-Checker-e616445d5dcc4211a8be4bd2bb5f36ab',
      image: '/images/projects/wine.jpg',
      date: '2021-12-01',
      desc:
        'Self trained a nerual network to classify wine quality'
        + 'Exported the model to tensorflow.js and designed a front end in p5.js.'
    },
    {
      title:'River Flows',
      subtitle:'light project',
      image:'/images/projects/river.jpg',
      date:'2021-12-10',
      desc:
        'A light representing where my heart lies, where my childhood begins,'
        + 'where I find love, where I get lost, and where I will never forget.'
    },
    {
      title: 'Deep Look into RESTful APIs',
      subtitle: 'Wrote an article for a network class.',
      link: 'https://itp.nyu.edu/networks/explanations/rest/',
      image: '/images/projects/restapi.png',
      date: '2021-12-10',
      desc:
        'Worte a rest api article to understanding networks class. '
        + 'Explain what is rest and restful and the history of rest.' 
        + ' Deep dive into restful apis and their use case.'
    },
    {
      title: 'Face Doodle',
      subtitle: 'A doodle drawing of your face',
      image: '/images/projects/face.png',
      date: '2021-10-15',
      link:'https://github.com/yzhang33/doodleface.github.io',
      desc:
        'A drwaing of you face using medipeipe\'s face mesh and javascript.'
    },
    {
      title: 'Hand Gesture Classfication',
      subtitle: 'punch game',
      image: '/images/projects/punch.png',
      date: '2021-6-15',
      link:'https://github.com/yzhang33/ML4Pcom/tree/main/punchgame',
      desc:
        'Collect punch and flex IMU data from the arduino and use these'
        + ' data trained a nerual network to classfiy punch and flex movments'
        + ' then developed a javascript game in p5 and connected the game with the arduino as a controller.'
    },
    {
      title: 'Smile Detector',
      subtitle: 'A smile detector',
      image: '/images/projects/smile.jpg',
      date: '2021-10-15',
      link:'https://github.com/yzhang33/smile_dector',
      desc:
        'Use smile detection algorithm in opencv to track user\'s '
        + ' smile times. Connected the bot with twitter api to send reminder and gifs '
        +" to the user and evoke conversations when smiled."
    }
];

export default data;

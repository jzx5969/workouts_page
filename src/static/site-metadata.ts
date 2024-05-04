interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '江志鑫的运动记录',
  siteUrl: 'https://www.strava.com/athletes/111427482',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/111427482/26085264/3/large.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/111427482',
    },
    {
      name: 'MikeMa',
      url: 'https://mikema.vercel.app/',
    },
  ],
};

export default data;

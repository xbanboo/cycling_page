interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Eric Cycling',
  siteUrl: 'https://cyc.pubu.io',
  logo: 'https://photo.pubu.io/Banboo%20Profile%20Image.jpeg',
  description: 'my cycling page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
  ],
};

export default data;

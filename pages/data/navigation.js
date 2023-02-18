import contributors from './contributions';

const treeData = {
    series:[
      {
        title: 'The Writing Process',
        href:"/series",
        type: "link",
        key: '0-0-0'
      },
      {
        title: 'Collaborations',
        href:"/series#collaborations",
        type: "link",
        key: '0-0-1'
      },
      {
        title: 'The Writing Process',
        href:"/series#tech_design",
        type: "link",
        key: '0-0-2'
      }
    ],
    artists:[
      {
        title: 'Heather Bowlan',
        href:"/poet",
        type: "link",
        key: '0-1-0'
      },
      {
        title: 'Warren C. Longmire',
        href:"/developer",
        type: "link",
        key: '0-1-1'
      }
    ],
    contributors:contributors.map((contrib, id) => ({
      title: `${contrib.first} ${contrib.last}`,
      href: `/contributors#${contrib.first}-${contrib.last}`,
      type: "link",
      key: `0-2-${id}`
    })),
    poems:[]
  }

  export default treeData
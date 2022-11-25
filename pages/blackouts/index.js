
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import Link from 'next/link';

import erasures from './../data/erasures.json';
import contributors from './../data/contributions';

const treeData = [
  {
    title: 'The Series',
    type: "header",
    key: '0-0',
    children:[
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
    ]
  },
  {
    title: 'The Artists',
    type: "header",
    key: '0-1',
    children:[
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
    ]
  },
  {
    title: 'The Contributors',
    type: "header",
    key: '0-2',
    children: contributors.map((contrib, id) => ({
      title: `${contrib.first} ${contrib.last}`,
      href: `/contributors#${contrib.first}-${contrib.last}`,
      type: "link",
      key: `0-2-${id}`
    }))
  },
  {
    title: 'The Poems',
    type: "header",
    key: '0-3',
    children: erasures.items.map(item => (
      {
        title: item.title,
        type: "erasureTitle",
        href:`/blackouts/${item.id}`,
        key:`0-3-${item.id}`,
        children: item.stages.map(stage => ({
          title: stage.title,
          type: "poemTitle",
          key:`0-3-${item.id}-${stage.id}`,
          href: `/blackouts/${item.id}/${stage.id}`
        }))
      }
    ))
  }
];

// const treeData = [
//   {
//     title: '',
//     type: "title",
//     key: '0',
//     children: [
//       {
//         title: 'The Series',
//         type: "header",
//         key: '0-0',
//         children:[
//           {
//             title: 'The Writing Process',
//             href:"/series",
//             type: "link",
//             key: '0-0-0'
//           },
//           {
//             title: 'Collaborations',
//             href:"/series#collaborations",
//             type: "link",
//             key: '0-0-1'
//           },
//           {
//             title: 'The Writing Process',
//             href:"/series#tech_design",
//             type: "link",
//             key: '0-0-2'
//           }
//         ]
//       },
//       {
//         title: 'The Artists',
//         type: "header",
//         key: '0-1',
//         children:[
//           {
//             title: 'Heather Bowlan',
//             href:"/poet",
//             type: "link",
//             key: '0-1-0'
//           },
//           {
//             title: 'Warren C. Longmire',
//             href:"/developer",
//             type: "link",
//             key: '0-1-1'
//           }
//         ]
//       },
//       {
//         title: 'The Contributors',
//         type: "header",
//         key: '0-2',
//         children: contributors.map((contrib, id) => ({
//           title: `${contrib.first} ${contrib.last}`,
//           href: `/contributors#${contrib.first}-${contrib.last}`,
//           type: "link",
//           key: `0-2-${id}`
//         }))
//       },
//       {
//         title: 'The Poems',
//         type: "header",
//         key: '0-3',
//         children: erasures.items.map(item => (
//           {
//             title: item.title,
//             type: "erasureTitle",
//             href:`/blackouts/${item.id}`,
//             key:`0-3-${item.id}`,
//             children: item.stages.map(stage => ({
//               title: stage.title,
//               type: "poemTitle",
//               key:`0-3-${item.id}-${stage.id}`,
//               href: `/blackouts/${item.id}/${stage.id}`
//             }))
//           }
//         ))
//       },
//     ],
//   }
// ];

const Container = styled.div`
  width: 100%;
  padding: 2em;
  border: 1px solid black;
`
const LinkTitle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`

const ErasureTitle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`

const PoemTitle = styled.div`
  
`

const TreeNode = (props) => {
  const { title, type, href} = props;
  const renderTypes = {
    "header":<h2>{title}</h2>,
    "link":<LinkTitle><Link href={href}>{title}</Link></LinkTitle>,
    "erasureTitle":<ErasureTitle><Link href={href}>{title}</Link></ErasureTitle>,
    "poemTitle":<PoemTitle><Link href={href}>{title}</Link></PoemTitle>,
  }
  return renderTypes[type] || <p>{title}</p>
}


const Home = () => {
  return <>
    <header>
      <h1>HIGHLIGHTS AND BLACKOUTS</h1>
      <p>By Heather Bowlan</p>
    </header>,
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      treeData={treeData}
      titleRender={(data)=> <TreeNode {...data}/>}
    />
  </>
}

export default Home;


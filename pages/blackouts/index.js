import styled from 'styled-components';
import { Plock } from 'react-plock';
import Link from 'next/link';
import erasures from './../data/erasures.json';

const Container = styled.div`
  width: 100%;
  padding: 2em;
  border: 1px solid black;
`

const ListElement = styled.li`
  display:block;
`

const ErasureStages = ({currentErasure, stages})=> {
    return <>
        {
            stages.map((stage, stageIdx)=> {
                return <>
                    <Link href={`/blackouts/${currentErasure}/${stageIdx+1}`}><a>Stage {stageIdx}: {stage.title}</a></Link>
                    <br/>
                </>
            })
        }
    </>
}


const Home = () => {
  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 1024, columns: 3 },
  ];

  return <>
    <div>
      <h1>Highlights & Blackouts</h1>
      <p>A Poem Series By Heather Bowlan</p>
    </div>
    <Plock breakpoints={breakpoints}>
      <Container>
        <h3>The Series</h3>
        <ul>
          <ListElement><Link href="/series">Poems</Link></ListElement>
          <ListElement><Link href="/series">Colaborations</Link></ListElement>
          <ListElement><Link href="/series">Technical Design</Link></ListElement>
        </ul>
      </Container>
      <Container>
        <h3>The Artists</h3>
        <ul>
          <ListElement>
            <Link href="/poet">Heather Bowlan</Link>
          </ListElement>
          <ListElement>
            <Link href="/developer">Warren C. Longmire</Link>
          </ListElement>
        </ul>
      </Container>
      <Container>
        <h3>The Contributors</h3>
        <ul>
          <ListElement>
            <Link href="/contributors">Heather Bowlan</Link>
          </ListElement>
          <ListElement>
            <Link href="/contributors">Warren C. Longmire</Link>
          </ListElement>
        </ul>
      </Container>
      <Container>
        <h3>The Poems</h3>
        {
          erasures.items.map((item) => {
            return(
              <ul key={item.id} >
                <ListElement>
                  <p><Link href={`/blackouts/${item.id}`}><a>{item.title}</a></Link></p>
                  <ul>
                    {
                      item.stages.map((stage) => <ListElement key={`${item.title}-${stage.title}`}>
                        <Link href={`/blackouts/${item.id}/${stage.id}`}><a>{stage.title}</a></Link>
                      </ListElement>)
                    }
                  </ul>
                </ListElement>
            </ul>)
          })
        }
      </Container>
    </Plock>
    <div>
      developed by alongmirewriter 2022
    </div>
  </>
}


// const Home = () => {
//     return <>
//         <h1>BLACKOUTS AND HIGHLIGHTS</h1>
//         <div>
//             {
//                 erasures.items.map((erasure, idx) => {
//                     return(<>
//                         <hr/>
//                         <Link href={`/blackouts/${idx+1}`}><a>BLACKOUT {idx+1}</a></Link>
//                         <br/>
//                         <ErasureStages currentErasure={idx+1} stages={erasure.stages}/>
//                         <hr/>
//                     </>)
//                 })
//             }
//         </div>
//     </>
// }

export default Home;

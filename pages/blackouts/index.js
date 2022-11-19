
import styled from 'styled-components';
import { Plock } from 'react-plock';
import Link from 'next/link';
import erasures from './../data/erasures.json';
import contributors from './../data/contributions';

const Container = styled.div`
  width: 100%;
  padding: 2em;
  border: 1px solid black;
`

const ListElement = styled.li`
  display:block;
`

const Home = () => {
  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 1024, columns: 3 },
  ];

  return <>
    <ul className="tree">
      <li>
        <code id="header">
          <h1>Highlights & Blackouts</h1>
          <p>A Poem Series By Heather Bowlan</p>
        </code>
        <ul>
          <li>
            <code>The Series</code>
            <ul>
              <li>
                <code><Link href="/series">The Writing Process</Link></code>
              </li>
              <li>
                <code><Link href="/series#colaborations">Collaborations</Link></code>
              </li>
              <li>
                <code><Link href="/series#tech_design">Technical Design</Link></code>
              </li>
            </ul>
          </li>
          <li>
            <code>The Artists</code>
            <ul>
              <li><code><Link href="/poet">Heather Bowlan</Link></code></li>
              <li><code><Link href="/developer">Warren C. Longmire</Link></code></li>
            </ul>
          </li>
          <li>
            <code>The Contributors</code>
            <ul>
              {
                contributors.map(contrib => <li><code><a href={`/contributors#${contrib.first}-${contrib.last}`}>{contrib.first} {contrib.last}</a></code></li>)
              }
            </ul>
          </li>
          <li>
            <code>The Poems</code>
            {
              erasures.items.map((item) => {
                return(
                  <ul key={item.id} >
                    <code><p><Link href={`/blackouts/${item.id}`}><a>{item.title}</a></Link></p></code>
                    {/* <ul>
                      {
                        item.stages.map((stage) => 
                          <code key={`${item.title}-${stage.title}`}>
                            <Link href={`/blackouts/${item.id}/${stage.id}`}><a>{stage.title}</a></Link>
                          </code>)
                      }
                    </ul> */}
                </ul>)
              })
            }
          </li>
        </ul>
      </li>
      
    </ul>
    {/* <Plock breakpoints={breakpoints}>
      <Container>
        <h3>The Series</h3>
        <ul>
          <ListElement><Link href="/series">The Writing Process</Link></ListElement>
          <ListElement><Link href="/series#colaborations">Colaborations</Link></ListElement>
          <ListElement><Link href="/series#tech_design">Technical Design</Link></ListElement>
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
          {
            contributors.map(contrib => <ListElement><a href={`/contributors#${contrib.first}-${contrib.last}`}>{contrib.first} {contrib.last}</a></ListElement>)
          }
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
    </Plock> */}
  </>
}

export default Home;


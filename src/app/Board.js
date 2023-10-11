import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Board.module.css'
import ProgressBanner from './ProgressBanner';
import { useEffect, useState } from 'react';
import SprintStage from './SprintStage';



const Board = () => {

  let stages = [
    'todo',
    'in-progress',
    'code-review',
    'in-qa',
    'on-hold',
    'po-review',
    'done'
  ]
  let categorizedStories= {
      "code-review":[
        {
          id:1,
          storynumber:"RR-15803",
          subject:"Implement firewall rules",
          assignedto:"John",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"code-review"
        }
      ],
      "in-qa":[
        {
          id:2,
          storynumber:"RR-15801",
          subject:"Configure CI/CD",
          assignedto:"Tylor",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"in-qa"
        }
      ],
      "po-review":[
        {
          id:3,
          storynumber:"RR-15811",
          subject:"Changing UI background.",
          assignedto:"John",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"code-review"
        }
      ],
      "done":[
        {
          id:4,
          storynumber:"RR-15812",
          subject:"Bootstrap upgrade.",
          assignedto:"Tylor",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"in-qa"
        }
      ],
      "on-hold":[
        {
          id:5,
          storynumber:"RR-15805",
          subject:"Integrate new pdf dll",
          assignedto:"Tylor",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"on-hold"
        }
      ],
      "todo":[
        {
          id:6,
          storynumber:"RR-15903",
          subject:"Implement security to dashboards",
          assignedto:"John",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"todo"
        },
        {
          id:7,
          storynumber:"RR-15904",
          subject:"Fix the vulnerabilities",
          assignedto:"Rambo",
          storypoints:"8",
          release:"2023 November R2",
          color:"Primary",
          status:"todo"
        },
        {
          id:8,
          storynumber:"RR-15905",
          subject:"Analyze the document addition.",
          assignedto:"Arnold",
          storypoints:"8",
          release:"2023 November R2",
          color:"Primary",
          status:"todo"
        }
      ],
      "in-progress":[
        {
          id:9,
          storynumber:"RR-15906",
          subject:"Fix the image allignment",
          assignedto:"John",
          storypoints:"5",
          release:"2023 November R1",
          color:"Primary",
          status:"in-progress"
        },
        {
          id:10,
          storynumber:"RR-15907",
          subject:"Add header to save request",
          assignedto:"Rambo",
          storypoints:"8",
          release:"2023 November R2",
          color:"Primary",
          status:"in-progress"
        }
      ]
    };
    return (
        <Container>
          <Container>
            <ProgressBanner />
          </Container>
          <Container>
            <Row>
              {
                stages.map(stage => {
                  return (
                    <SprintStage key={stage} stage={stage} stories={categorizedStories[stage.toString()]}/>
                  )
                })
              }
            </Row>
          </Container>
        </Container>
      );
}

export default Board;
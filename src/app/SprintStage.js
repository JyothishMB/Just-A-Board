import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoryCard from './StoryCard';
import Badge from 'react-bootstrap/Badge';
import styles from './SprintStage.module.css'

const SprintStage = ({stage,stories}) => {
    return (
        <Col className={styles.stagecolumn} style={{padding:0}}>
            <div className={styles.stageheader}>{stage}</div>
            {
                stories!=null?
                stories.map(story => (
                    <StoryCard key={story.id} story={story} />
                )):""
            }
        </Col>
    );
}

export default SprintStage;
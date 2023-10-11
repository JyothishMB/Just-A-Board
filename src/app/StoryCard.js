import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const StoryCard = ({story}) => {
    return (
        <Card 
        border={story.color.toLowerCase()}
        key={story.storynumber}
        >
            <Card.Header>
                <Link to={`/story/${story.id}`}>{story.storynumber}</Link>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {story.subject}
                    <br />
                    <Badge bg="dark">{story.release}</Badge>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Badge bg="primary">{story.assignedto}</Badge>
                <Badge bg="info">{story.storypoints}</Badge>
            </Card.Footer>
        </Card>
    );
}

export default StoryCard;
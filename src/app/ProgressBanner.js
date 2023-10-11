import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './ProgressBanner.module.css'

const ProgressBanner = () => {
    const now = 60;
  return (
    <div className={styles.progressdiv}>
      <ProgressBar now={now} label={'current progress is '+`${now}%`} />
    </div>    
  );
}

export default ProgressBanner;
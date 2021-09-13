import styles from './index.module.scss';
import { Container } from 'react-bootstrap';

export function Index() {
    return (
        <div className={styles.page}>
            <Container></Container>
        </div>
    );
}

export default Index;

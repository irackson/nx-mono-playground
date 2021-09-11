import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { Carousel } from '@nx-mono/mycomps';
export function App() {
    return (
        <div className={styles.app}>
            <header className="flex">
                <Logo width="75" height="75" />
                <h1>Welcome to demoapp!</h1>
            </header>
            <Carousel title="wow"></Carousel>
        </div>
    );
}

export default App;

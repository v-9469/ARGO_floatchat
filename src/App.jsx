import React from 'react';
import MapDisplay from './components/MapDisplay';
import ProfileChart from './components/ProfileChart';
import ChatAssistant from './components/ChatAssistant';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <MapDisplay />
          <ProfileChart />
        </div>
        <div className={styles.rightColumn}>
          <ChatAssistant />
        </div>
      </div>
    </div>
  );
}

export default App;
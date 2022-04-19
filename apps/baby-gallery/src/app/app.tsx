// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import Photos from './photos/photos';

export function App() {
  return (
    <>
      <Photos />
      <NxWelcome title="baby-gallery" />
      <div />
    </>
  );
}

export default App;

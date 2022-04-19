import styles from './photos.module.scss';

/* eslint-disable-next-line */
export interface PhotosProps {}

export function Photos(props: PhotosProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Photos!</h1>
    </div>
  );
}

export default Photos;

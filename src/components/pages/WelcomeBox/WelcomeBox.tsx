import { User } from '@/types/user.type';
import styles from './WelcomeBox.module.scss';
import Button from '@/components/ui/Button/Button';

interface Props {
    user : User
}

const WelcomeBox = ({user} : Props) => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.userInfo}>
        <div className={styles.avatarWrapper}>
          <img 
            src={user?.picture.large} 
            alt={user?.name.first} 
            className={styles.avatar}
          />
          <div className={styles.statusIndicator}></div>
        </div>
        <div className={styles.userDetails}>
          <h3 className={styles.userName}>{user?.name.first} {user?.name.last}</h3>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
      </div>
      
      <div className={styles.welcomeContent}>
        <h2 className={styles.welcomeTitle}>Welcome back, <span>{user?.name.first} {user?.name.last}</span>!</h2>
        <p className={styles.welcomeText}>We've missed you. Your last login was 2 days ago.</p>
        
        <div>
          <Button size='md' className='w-full' variant='secondary' >Thanks</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBox;
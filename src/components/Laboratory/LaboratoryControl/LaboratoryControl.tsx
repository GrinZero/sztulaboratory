import LaboratoryNav from '../LaboratoryNav/LaboratoryNav';
import LaboratoryList from '../LaboratoryList/LaboratoryList';
import styles from './LaboratoryControl.module.scss';

const LaboratoryControl = () => (
  <div className={`w-full flexCol`}>
    <div className={`w-95% flexCol mt-5`}>
      <LaboratoryNav />
    </div>
    <div className={`mt-5 w-95%`}>
      <div className={styles.list}>
        <LaboratoryList />
      </div>
    </div>
  </div>
);
export default LaboratoryControl;

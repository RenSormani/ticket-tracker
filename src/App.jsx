import styles from './App.module.scss';
import EmployeeCard from './Components/EmployeeCard/EmployeeCard';
import NavBar from "./Components/NavBar";
import data from './data/data';

const App = () => {

  const getEmployeeCardJsx = (data) => (
    <EmployeeCard data={data} key={data.id}/>
  )
  
  return (
    <>
      <div className={styles.app}>
        <section className={styles.nav}>
            <NavBar />
        </section>
        <section className={styles.content}>
          {data.map(getEmployeeCardJsx)}
        </section>
      </div>
    </>
  );
};

export default App;
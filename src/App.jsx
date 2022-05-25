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
          {/* <EmployeeCard data={data[1]}/> */}
          {data.map(getEmployeeCardJsx)}
        </section>
      </div>
    </>
  );
};

export default App;

// 1. Change title in public/index.html
// 2. Rename src/App.js => App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install sass
// 7. Rename App.css => App.module.scss & change import

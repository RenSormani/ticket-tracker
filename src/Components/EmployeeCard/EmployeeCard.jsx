import React from 'react';
import styles from './EmployeeCard.module.scss';
import Counter from '../Counter';

const EmployeeCard = (props) => {
  return (
        <div className={styles.cardFront}>
            <h2 className={styles.employeeDetails}>EMPLOYEE CARD</h2>
            <section className={styles.employeeDetails}>
                <p>
                    <span className={styles.name}>{props.data.name}</span>
                </p>
                <p>
                    <span className={styles.role}>{props.data.role}</span>
                </p>
                </section>
                <section className={styles.Counter}>
                    <Counter />
            </section>
        </div>  
    )
}

export default EmployeeCard
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, status, trainer, duration } = props;
  const statusClass = status === 'ongoing' ? styles.ongoing : styles.completed;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Trainer</dt>
        <dd>{trainer}</dd>
        <dt>Duration</dt>
        <dd>{duration}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

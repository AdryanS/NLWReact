import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { CountdonwContext } from '../contexts/CountdonwContext';

export function Countdown () {

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdonwContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
    
    return(
        <div>
            <div className={styles.countdonwContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={styles.CountdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                        type="button" 
                        className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                        onClick={resetCountdown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        className={styles.CountdownButton}
                        onClick={startCountdown}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

        </div>
    );
}
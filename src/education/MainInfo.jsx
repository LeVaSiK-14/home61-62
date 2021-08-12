import style from './MainInfo.module.css';


function MainInfo({fullName, age, desiredPosition}){
    return(
        <main  className={style.main}>
            <h2 className={style.title}>Main info</h2>
            <p className={style.name}>Full name: {fullName}</p>
            <p className={style.age}>Age: {age}</p>
            <p className={style.position}>Desired position: {desiredPosition}</p>
        </main>
    );
};

export default MainInfo;
import style from './Skills.module.css';

const Expirients = (props) => {
    const {
        lastWorkPlace,
        expirient,
        skills
    } = props;

    return (
        <section className={style.section}>
            <h2>Job expirients</h2>
            <p className={style.last}>Last work place: {lastWorkPlace}</p>
            <p>Expirients in (years): {expirient}</p>
            <p className={style.count}>Skills: ({skills.length})</p>
            <ul>
                {
                    skills.map(item => (<li className={style.item_list}>{item}</li>))
                }
            </ul>
                
        </section>


    );
};

export default Expirients;
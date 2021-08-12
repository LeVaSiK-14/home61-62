const Expirients = (props) => {
    const {
        lastWorkPlace,
        expirient,
        skills
    } = props;

    return (
        <section className='name'>
            <h2>Job expirients</h2>
            <p>Last work place: {lastWorkPlace}</p>
            <p>Expirients in (years): {expirient}</p>
            <p>Skills: ({skills.length})</p>
            <ul>
                {
                    skills.map(item => (<li>{item}</li>))
                }
            </ul>
        </section>
    );
};

export default Expirients;
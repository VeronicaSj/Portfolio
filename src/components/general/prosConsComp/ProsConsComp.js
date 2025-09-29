import styles from "./ProsConsComp.module.css"

function ProsConsComp({prosListTitle, prosList, consListTitle, consList}) {

    return (
        <div className={styles.row}>
            <div>
                <h3>
                    {prosListTitle}
                </h3>
                <ol className={styles.list}>
                    {prosList.map(item => (
                        <li className={styles.listItem}>
                            <h4>{item.title}</h4>
                            <p>{item.expl}</p>
                        </li>
                    ))}
                </ol>
            </div>
            <div>
                <h3>
                    {consListTitle}
                </h3>
                <ol className={styles.list}>
                    {consList.map(item => (
                        <li className={styles.listItem}>
                            <h4>{item.title}</h4>
                            <p>{item.expl}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ProsConsComp;
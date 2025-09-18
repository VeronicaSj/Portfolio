import styles from "./Cycle.module.css";


export default function Cycle() {
const steps = [
"You choose a functionality",
"You write automated tests for that functionality",
"You write the minimum code necessary for them to pass",
"Refactor"
];


return (
<div className={styles.container}>
<div className={styles.cycle}>
{steps.map((step, index) => (
<div key={index} className={styles.step}>
<span>{step}</span>
</div>
))}
</div>
</div>
);
}
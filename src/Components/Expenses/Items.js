const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

}
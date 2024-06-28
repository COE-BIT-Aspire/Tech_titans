function Welcome(props) {

    // const user = props.username;
    const { users } = props;
    const { name, age } = users;
    const text = `Welcome to this website ${name} (${age})`;
    return (
        <h2>{text}</h2>
    );
}
 
export default Welcome;
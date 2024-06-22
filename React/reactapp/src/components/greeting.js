import Welcome from './home';
import Wish from './wish';

function Greeting() {
    // const name = 'Sujeeth';
    // const userage = 25;
    const userinfo= {
        name: 'Sujeeth',
        age: 25
    }
  return (
      <div>
          {/* <Welcome username={name} age={userage}/> */}
          <Welcome users={userinfo}/> 
          <h1>Good morning!!</h1>
          <Wish />
    </div>
  );
}

export default Greeting;
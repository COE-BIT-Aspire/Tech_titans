import Welcome from './home';
import Wish from './wish';

function Greeting() {
    // const name = 'Sujeeth';
    // const userage = 25;
    const userinfo= {
          name: 'Sujeeth',
          age: 25
    } 
    const user = [
      { name: 'Kavin', age: 30 },
      { name: 'Ramesh', age: 50},
      { name: 'Param', age: 40}
    ];
    const ismorning = true;
    const wishinfo = { occ:"Birthday", age:22 };
    return (
        <div>
        {/* <Welcome username={name} age={userage}/> */}
        { userinfo.name!==undefined && userinfo.age!==undefined?
          <Welcome users={userinfo} /> : null}
        
        <ol>
          {user.map((det) => <li key={user.name}><Welcome users={det} /></li>)}
        </ol>
            
        {ismorning ? <h1>Good morning!!</h1> : <h1>Good Evening</h1>}
        
        <Wish wishdet={wishinfo} />
      </div>
    );
}

export default Greeting;
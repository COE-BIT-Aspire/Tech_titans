let score= JSON.parse(localStorage.getItem('score')) 
     
     

      if(!score) // same as "score === null"
      {
      score={
         wins:0,
         losses:0,
         ties:0,
      };
      }
     updatescore();

     document.body.addEventListener('keydown',(event) => 
    {
      if(event.key === 'a') playgame('rock');
      else if(event.key === 's') playgame('paper');
      else if(event.key === 'd') playgame('scissors');
    })

     
      function playgame(player){

        
        
      
         let res='';
        const comp=computermove();
        
        console.log(comp) 
        if(player === 'scissors')
        {
         if(comp === 'scissors')
            res='tie';
        else if(comp === 'rock')  
           res='wasted';
        else
           res='winner winner chicken dinner'  ;
        }

        if(player === 'paper')
        {
         if(comp === 'paper')
        res='tie';
        else if(comp === 'scissors')  
        res='wasted';
        else
        res='winner winner chicken dinner'  ;
        }

        if(player === 'rock')
        {
         if(comp === 'rock')
           res='tie';
        else if(comp === 'paper')  
           res='wasted';
        else
           res='winner winner chicken dinner'  ;
        }
        /// let result = res;
        if(res === "winner winner chicken dinner")
           score.wins +=1;
        else if(res ==='wasted')
           score.losses +=1;
         else
           score.ties +=1;
    //localstorage only stores sting so we use stringfy to conversion
    //think localstorage stores in server of website
         localStorage.setItem('score', JSON.stringify(score) );

         updatescore();

         document.querySelector('.js-res').innerHTML=res;
         document.querySelector('.js-mov').innerHTML=` you <img src="handges/${player}-emoji.png" class="img">  <img src="handges/${comp}-emoji.png" class="img">  computer `;


        //alert(`you choose ${player},computer choose ${comp},\n ${res} 
//wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`) 
      }
       
      function computermove()
      {
         const rand=Math.random();
         let comp='';       
         
         if(rand>=0 && rand<1/3) comp='rock';
        
        else if(rand>=1/3 && rand<2/3) comp='paper';
        
        else comp='scissors';
        return comp;

      }

      function updatescore()
      {
         document.querySelector('.js-score').innerHTML=`wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
      }
      let isautoplayed= false;
     let intervalid='';//setinterval func gives specific running ID
     function autoplay()
     {
      if(isautoplayed===false)
      
      {
         intervalid=setInterval(function(){
         const playerrandommove= computermove();
         playgame(playerrandommove);
         
      }, 1000); 
      isautoplayed=true;
      }else {
         clearInterval(intervalid);//ID can used as this line,clearinterval terminate running
         isautoplayed=false;
      }
   }
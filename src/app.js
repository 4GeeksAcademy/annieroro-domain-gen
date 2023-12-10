
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = ['.es', '.com'];

  for (let i = 0; i < pronoun.length; i++){
    for (let i2 = 0; i2 < adj.length; i2++){
      for(let i3 = 0; i3 < noun.length; i3++){
        for(let i4 = 0; i4 < ext.length; i4++){
          console.log(pronoun[i]+adj[i2]+noun[i3]+ext[i4]);

        }
      }
    }
  }






export  const getInitialsFromName = (name: string) => {
      const spllitedName = name.split(' ');
      let initials = ''
      if(spllitedName.length > 0){
          initials = spllitedName[0][0] + spllitedName[1][0];
          return initials
      }
      return spllitedName[0][0]
}

import {format, formatDistance} from "date-fns";


export  const getInitialsFromName = (name: string) => {
      const spllitedName = name.split(' ');
      let initials = ''
      if(spllitedName.length > 0){
          for (let i= 0; i< spllitedName.length; i++){
              initials += spllitedName[i][0]
          }
          return initials
      }
      return spllitedName[0][0]
}

export  const formateDate = (startDate: any, endDate: any) => {
    const formattedStartDate = format(startDate, 'MMMM yyyy'); // Format start date like "September 2022"
    const formattedEndDate = format(endDate, 'MMMM yyyy'); // Format end date like "September 2024"

    const distance = formatDistance(startDate, endDate, { addSuffix: true }); // Get distance between dates

    return `${formattedStartDate} - ${formattedEndDate}`;
}

export  function findAddedAndRemovedItems(originalIds: string[], newIds: string[]): { added: string[], removed: string[] } {
    const originalSet = new Set(originalIds);
    const newSet = new Set(newIds);

    const added: string[] = [];
    const removed: string[] = [];

    newSet.forEach(id => {
        if (!originalSet.has(id)) {
            added.push(id);
        }
    });

    originalSet.forEach(id => {
        if (!newSet.has(id)) {
            removed.push(id);
        }
    });

    return { added, removed };
}

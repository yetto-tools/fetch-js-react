export const getKey = () =>{
  return Math.random().toString(36).substring(2,36) + Date.now().toString(36).substring(2,36)
}

export const fromStringToDate = value => {
    return new Date(value+'T06:00');
}

export const fromStringToDateLocalString = (value, 
    options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }, lang='es-GT'
) => {
    return new Date(value+'T0:00').toLocaleDateString(lang, options);
    
}


export const propCapitalize = (arrayObjects, propObject) =>{
    arrayObjects.map( item =>{
      item[propObject] = item[propObject]
        .replace(/\s+/g,' ')
        .toLowerCase()
        .split(' ')
        .map((word) => 
          word.replace(/\w/, firstLetter => firstLetter.toUpperCase())
        )
      .join(' ');
      
    })
  }



export  function dynamicSortMultiple() {
    /*
     * People.sort(dynamicSortMultiple("Name", "-Surname"));
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          /* next line works with strings and numbers, 
           * and you may want to customize it to your needs
           */
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }    
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}
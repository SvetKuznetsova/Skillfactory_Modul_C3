function printInfoObject (obj) {
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      console.log(p, obj[p]);
    }
  }
}
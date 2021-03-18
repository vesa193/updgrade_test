// update an object

export function updateObj(obj, key, value) {
  let theObject = {
    ...obj,
    [key]: value
  }
  return theObject
}

// const index = categoriesState.findIndex(item => item.selfID === idTab)


export function findIndexFunc(obj, key, prop) {
  const theObject = obj.findIndex(item => item[key] === prop)
  return theObject
}

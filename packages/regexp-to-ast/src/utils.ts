export function cc(char) {
  return char.charCodeAt(0)
}

export function insertToSet(item, set) {
  if (item.length !== undefined) {
    item.forEach(function (subItem) {
      set.push(subItem)
    })
  } else {
    set.push(item)
  }
}

export function addFlag(flagObj, flagKey) {
  if (flagObj[flagKey] === true) {
    throw "duplicate flag " + flagKey
  }

  flagObj[flagKey] = true
}

export function ASSERT_EXISTS(obj) {
  // istanbul ignore next
  if (obj === undefined) {
    throw Error("Internal Error - Should never get here!")
  }
}

// istanbul ignore next
export function ASSERT_NEVER_REACH_HERE() {
  throw Error("Internal Error - Should never get here!")
}

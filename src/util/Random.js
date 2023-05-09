
export default class Random {
  /**
   * Get a random number from 0 to below max
   * @param {number} max 
   * @returns {number} a random number
   * call this function with a max number that random numbers should be less than.
   * ex: Random.getRandomNumber(10) will return a number between 0 to 9, inclusive
   */
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Gets a random event from events state
   * @param {Array} events
   * @returns {Object} a random event
   * call selectEvent and pass the events state.
   * ex: Random.selectEvent([{ name: 'werewolf' }, { name: 'zombie' }]) could return { name: 'zombie' }
   */
  static selectEvent(events) {
    // type checking safety
    if (!Array.isArray(events)) {
      throw new TypeError(`selectEvent(): Received type ${events === null ? 'null' : typeof events}, expected an Array`);
    }

    const randomNumber = Random.getRandomNumber(events.length);
    return events[randomNumber];
  }

/**
 * Gets a shuffled subset array from an array
 * @param {Array} list
 * @param {number} amount
 * @return {Array}
 * call this function by passsing an array and the number of random elements you want back.
 * ex: Random.selectRandomElements([ 1,2,3,4 ], 2) could return [ 2,1 ]
 */
  static selectRandomElements(list, amount = list.length) {
  // limit amount to list length if user sends amount greater than list.length
  if (amount > list.length) {
    amount -= (amount - list.length);
  }
  
  const maxStartIndex = list.length - amount;
  const randomStartIndex = Random.getRandomNumber(maxStartIndex + 1);
  const endIndex = randomStartIndex + amount;
  const randomList = list.slice(randomStartIndex, endIndex);

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
  for (let i = randomList.length - 1; i >= 0; --i) {
    const randomIndex = Random.getRandomNumber(i);
    // [ randomList[i], randomList[randomIndex] ] = [ randomList[randomIndex], randomList[i] ];
    const tmp = randomList[i];
    randomList[i] = randomList[randomIndex];
    randomList[randomIndex] = tmp;
  }
  return randomList;
  }

  /**
   * Returns a shuffled events array with exclusive (non-repeating) event names.
   * @param {Array} events
   * @returns {Object} a random event
   * call this function by passing the events array.
   * ex: Random.selectRandomEvents(events) could return [{ name: 'zombie' }, { name: 'ghost' }, ...]
   */
  static selectRandomEvents(events) {
    const eventNames = {};
    const shuffledEvents = Random.selectRandomElements(events);
    const exclusiveEvents = shuffledEvents.filter(event => {
      if (!eventNames[event.name]) {
        eventNames[event.name] = 1;
        return true;
      }
      return false;
    });

    return exclusiveEvents;
  }
}



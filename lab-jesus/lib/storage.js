'use strict'

const debug = require('debug')('http:storage')

const storage = module.exports = {}
const memory = {};


// memory = {
//   'Notes': {
//     '1234.5678.9012': {
//       '_id': '1234.5678.9012',
//       'title': '',
//       'content': '',
//     },
//   },
//   'Categories': {
//     ...
//   },
// }

storage.create = function(schema, item) {
  debug('Created a new thing')

  return new Promise((resolve, reject) => {
    if(!schema || !item) return reject(new Error('Cannot create a new item; Schema and Item required'))

    if(!memory[schema]) memory[schema] = {}

    memory[schema][item._id] = item
    // debug(`right before return${memory[schema][item._id]}`)
    console.log(`${memory}`)
    return resolve(memory[schema][item._id])
  })
}

storage.fetchOne = function() {
    return new Promise((resolve, reject) => {
        // if(!schema || !item) return reject(new Error('Cannot create a new item; Schema and Item required'))
        return resolve(memory)
      })
}

storage.fetchAll = function() {
    
    return new Promise((resolve, reject) => {
        // if(!schema || !item) return reject(new Error('Cannot create a new item; Schema and Item required'))
    

        return resolve(memory)
      })
}

storage.update = function(schema, item) {
    return new Promise((resolve, reject) => {
        if(!schema || !item) return reject(new Error('Cannot create a new item; Schema and Item required'))
    
        if(!memory[schema]) memory[schema] = {}
    
        memory[schema][item._id] = item
        // debug(`right before return${memory[schema][item._id]}`)
        console.log(`${memory}`)
        return resolve(memory[schema][item._id])
      })
}

storage.delete = function(schema, id) {
    return new Promise((resolve, reject) => {
        // if(!schema || !item) return reject(new Error('Cannot create a new item; Schema and Item required'))
    
        // if(!memory[schema]) memory[schema] = {}

        // for(var i = 0; i < memory.length; i++) {
        //     if(memory[schema][i]._id === id){
    
        //         delete memory[schema][i][_id];
        //         delete memory[schema][i][content];
        //         delete memory[schema][i][title];
        //     }
        // }
        delete memory[schema][id];

    
        // debug(`right before return${memory[schema][item._id]}`)

        return resolve(memory)
      })


}
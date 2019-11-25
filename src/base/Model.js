import EventBus from './EventBus'

class Model extends EventBus {
  constructor(options) {
    super()
    const keys = ['data', 'update', 'create', 'delete', 'get']
    keys.forEach((key) => {
      if (key in options) {
        this[key] = options[key]
      }
    })
  }

  create() {
    console && console.error && console.error('你还没有实现 create')
  }

  delete() {
    console && console.error && console.error('你还没有实现 delete')
  }

  update() {
    console && console.error && console.error('你还没有实现 update')
  }

  get() {
    console && console.error && console.error('你还没有实现 get')
  }
}


export default Model

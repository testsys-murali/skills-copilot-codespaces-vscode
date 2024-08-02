function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    member: {
      name: 'skills',
      type: 'object',
      object: {
        name: 'skills',
        type: 'array',
        array: {
          type: 'object',
          object: {
            name: 'skill',
            type: 'string'
          }
        }
      }
    }
  };
}
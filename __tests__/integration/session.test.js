const { User } = require('../../src/app/models')

describe('Authentication', () => {
  it('should sum tow numbers', async () => {
    const user = await User.create({
      name: 'Roberto',
      email: 'roberto@test.com',
      password_hash: '12345678910111213141516'
    })
    
    console.log(user)

    expect(user.email).toBe('roberto@test.com')
  })
})

// describe('First test', () => {
//   it('should sum tow numbers', () => {
//     const x = 2
//     const y = 4

//     const sum = x + 4
//     expect(sum).toBe(6)
//   })
// })
import test from 'ava'
import * as calculadora from '../src/calculadora.js'

test('1 + 1 deve ser igual a 2', (t) => {
  const soma = calculadora.somar(1, 1)
  t.is(soma, 2)
})

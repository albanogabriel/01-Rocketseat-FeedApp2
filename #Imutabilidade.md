# imutabilidade

As variáveis não sofrem mutação. nós nunca alteramos uma variável na memória
Nós criamos um novo valor(um novo espaço na memória com o novo array, etc.)

Nós não mudamos o valor de uma variável comentários.
Nós criamos um novo valor, para a variável comentários.

## porquês ?

-> A imutabilidade nos permite ser mais performático
-> Ciar um novo valor na memória é mais rápido para o react fazer a comparação se aquilo mudou ou não, do que eu alterar um valor que já está na memória... então o react irá monitor o valor no memória para ver se mudou ou se não mudou, qual erao valor antigo, ql é o novo...

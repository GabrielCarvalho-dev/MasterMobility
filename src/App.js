import logo from './logo.svg';
import './App.css';
var lista_tarefas = [
  { titulo: 'Teste 1', descricao: 'Descricao Teste 1', id: 1, resolvido: true },
  { titulo: 'Teste 2', descricao: 'Descricao Teste 2', id: 2, resolvido: false }]

  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);
    return arr;
  }

function TarefasCriadasConcluidas(props) {
  const tarefas = props.tarefas;
  var tarefas_concluidas = tarefas.reduce((count, tarefa) => count + (tarefa.resolvido ? 1 : 0), 0);
  return <>
    <div class="Down">
      <p>Tarefas criadas</p>

      {tarefas.length > 0 &&
        <span class="ggg">{tarefas.length}</span>
      }
      <p class="ppp">Concluídas</p>
      {tarefas_concluidas > 0 &&
        <span class="ggg">{tarefas_concluidas}</span>
      }

    </div>
  </>
}
function Tarefas(props) {
  const tarefas = props.tarefas;

  return <>
    {tarefas.map((tarefa, index) => {
      return <>
        <div class="area">
          <div class="check">
          {tarefa.resolvido ?
          <input type="checkbox" class="ball" checked />:<input type="checkbox" class="ball" />}
          </div>
    
          <div class="titulo"><h1>{tarefa.titulo}</h1>
          <p> {tarefa.descricao} </p>
          </div>
          <div class="remove">
          <button class="Bremove" onClick={() => removeObjectWithId(tarefas,tarefa.id)}><img src="assets/Vector.png"></img></button>
          </div>
        </div></>
    })}




  </>
}
function TarefasCadastradas(props) {
  const tarefas = props.tarefas;
  return <>
    <div class="text">


      {tarefas.length === 0 ?
        <div>
          <img class="Board" src="assets/Clipboard.png" alt="" />
          <div class="break"></div>

          <div class="one">
            <p>Você ainda não tem tarefas cadastradas</p>
          </div>
          <div class="break"></div>
          <div class="two">
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> : <div class="one">
          <Tarefas tarefas={lista_tarefas} />
        </div>
      }



    </div>
  </>
}
function App() {
  return (
    <div>

      <TarefasCriadasConcluidas tarefas={lista_tarefas} />


      <hr></hr>

      <TarefasCadastradas tarefas={lista_tarefas} />
    </div>
  );
}

export default App;

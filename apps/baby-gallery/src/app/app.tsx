import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import Photos from './photos/photos';
import { Todo } from '@drc-nx/data';
import { Ui, Todos } from '@drc-nx/ui';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos').then((response) => response.json()).then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };

  return (
    <>
      <Photos />
      <Ui />
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
      <NxWelcome title="baby-gallery" />
      <div />
    </>
  );
}

export default App;

import { Todo } from '@drc-nx/data';
import './todos.module.scss';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
}

export default Todos;